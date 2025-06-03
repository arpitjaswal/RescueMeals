/**
 * Geocoding Utility Functions
 * 
 * This module provides utility functions for geocoding addresses and calculating distances
 * between locations to enhance the food donation and collection process.
 */

/**
 * Geocodes an address to get latitude and longitude
 * 
 * @param {string} address - The full address to geocode
 * @param {string} city - The city name
 * @param {string} state - The state name
 * @returns {Promise<Object>} - A promise that resolves to an object with lat and lng
 */
function geocodeAddress(address, city, state) {
    return new Promise((resolve, reject) => {
        // In a real implementation, this would call a geocoding API
        // For now, we'll simulate a successful geocoding with mock data
        
        // Simulate API call delay
        setTimeout(() => {
            // This is a mock implementation
            // In production, you would use a service like Google Maps Geocoding API
            
            // Mock successful geocoding
            if (city && state) {
                // Return mock coordinates (this would be real geocoding in production)
                resolve({
                    latitude: parseFloat((Math.random() * 10 + 30).toFixed(6)),
                    longitude: parseFloat((Math.random() * 10 + 70).toFixed(6)),
                    formattedAddress: address || `${city}, ${state}`
                });
            } else {
                reject(new Error('City and state are required for geocoding'));
            }
        }, 100);
    });
}

/**
 * Calculates the distance between two points using the Haversine formula
 * 
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} - Distance in kilometers
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
    // Haversine formula to calculate distance between two points on Earth
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    
    return distance;
}

/**
 * Finds nearby donations based on user location
 * 
 * @param {Object} userLocation - User's location with latitude and longitude
 * @param {Array} donations - Array of donation objects with location data
 * @param {number} maxDistance - Maximum distance in kilometers
 * @returns {Array} - Filtered array of nearby donations with distance added
 */
function findNearbyDonations(userLocation, donations, maxDistance = 10) {
    if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
        return donations; // Return all donations if no location provided
    }
    
    return donations.filter(donation => {
        if (!donation.location || !donation.location.latitude || !donation.location.longitude) {
            return false; // Skip donations without location data
        }
        
        // Calculate distance
        const distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            donation.location.latitude,
            donation.location.longitude
        );
        
        // Add distance to donation object
        donation.distance = parseFloat(distance.toFixed(2));
        
        // Return true if within maxDistance
        return distance <= maxDistance;
    }).sort((a, b) => a.distance - b.distance); // Sort by distance
}

module.exports = {
    geocodeAddress,
    calculateDistance,
    findNearbyDonations
};
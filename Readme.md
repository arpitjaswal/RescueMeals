# RescueMeals

Welcome to RescueMeals, a revolutionary food waste management system aimed at tackling the critical issue of food wastage by empowering a collaborative platform for restaurants, NGOs, and volunteers.

## Introduction

In a world where food scarcity coexists with massive food wastage, RescueMeals serves as a light of hope. This system provides a seamless bridge between restaurants with surplus food, NGOs dedicated to feeding the hungry, and volunteers willing to make a difference.

RescueMeals not only tackles the pressing issue of food wastage but also harnesses the power of technology to streamline food distribution. By providing a dynamic platform, RescueMeals addresses these core challenges:

- **Food Wastage Reduction**: RescueMeals empowers restaurants and other donors to effortlessly connect with potential beneficiaries, converting excess food into valuable resources.
- **Efficient Collaboration**: NGOs and volunteers can efficiently locate and accept food donation requests, ensuring timely and effective distribution.
- **Transparent Communication**: Transparent communication channels facilitate seamless interaction between stakeholders, fostering a sense of community and shared purpose.
- **User-Friendly Interfaces**: Intuitive interfaces make it easy for donators, receivers, and volunteers to navigate the system and make meaningful contributions.

## Features
- **Donator Portal**: Restaurants can post details of surplus raw and cooked food, contributing to the fight against food wastage.
- **NGO and Volunteer Dashboard**: NGOs and volunteers can explore and accept food donation requests, enabling efficient distribution.
- **Secure User Authentication**: JSON Web Tokens (JWT) ensure secure access to the system and role-based privileges.
- **Real-Time Updates**: Beneficiaries receive real-time updates about accepted donation requests, ensuring transparency.
- **Integrated Payment Gateway**: RescueMeals integrates with Razorpay for secure online payments, enhancing the overall experience.
- **User-Centric Design**: The platform's design prioritizes usability, making it easy for all users to contribute effectively.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Styling**: CSS with Bootstrap
- **Deployment**: Heroku for backend, Vercel for frontend

## Getting Started
1. Clone the repository: `git clone https://github.com/yourusername/RescueMeals.git`
2. Navigate to the project folder: `cd RescueMeals`
3. Install backend dependencies: `npm install`
4. Navigate to the `client` folder: `cd client`
5. Install frontend dependencies: `npm install`
6. Run the backend server: `npm start` (in the project root)
7. Run the frontend development server: `npm start` (in the `client` folder)

## Razorpay Integration
To enable online payments through RescueMeals using Razorpay:
1. Sign up for a Razorpay account: [https://razorpay.com](https://razorpay.com)
2. Obtain your Razorpay API key and secret key.
3. Add your API key and secret key to the `.env` file in the backend directory:

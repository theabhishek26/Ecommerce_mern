# React E-Commerce Project

## Project Overview

This project is a React-based E-commerce application designed for selling clothing for men, women, and kids. Users can browse through the catalog of clothes, select items, and make purchases after logging into their accounts. The application includes an Admin Panel that allows the administrator to manage inventory by uploading new products and updating existing ones. The admin can also monitor and handle user purchases.

## Features

### User Features
- **User Registration and Login:**
  - Users can create an account and log in to access their profile and purchase history.
  
- **Product Browsing:**
  - Browse and filter clothing by categories (Men, Women, Kids).
  - Search functionality for finding specific products.
  
- **Shopping Cart:**
  - Users can add products to the cart and update the cart quantity.
  
- **Checkout Process:**
  - Users can purchase items after successfully logging in.
  
- **User Profile:**
  - View order history and profile details.

### Admin Features
- **Admin Login:**
  - Admins can log in to access the admin dashboard.

- **Product Management:**
  - Add new clothing items with details such as title, description, price, category (Men, Women, Kids), and images.
  - Edit or delete existing items.

- **Order Management:**
  - Admin can view user purchases and manage orders.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router for navigation
  - Redux for state management
  - Axios for API requests
  - Bootstrap/Material UI for UI components
  
- **Backend (Optional based on setup):**
  - Node.js
  - Express.js
  - MongoDB or Firebase for database management
  
- **Authentication:**
  - Firebase Authentication / JWT-based authentication
  
- **Hosting (Optional):**
  - Netlify / Vercel / Heroku for frontend deployment

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/theabhishek26/Ecommerce_mern.git
   ```

2. Navigate to the project folder:
   ```bash
   cd ecommerce-react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Navigate to `http://localhost:3000` in your browser.



- **components**: Reusable UI components such as authentication, product listing, shopping cart, and admin panel.
- **pages**: Core pages like Home, Login, Product Detail, Checkout, Admin Dashboard.
- **redux**: Handles global state management for the application.
- **utils**: Utility functions for API calls, form validations, etc.

## Admin Panel

The admin panel is located at `http://localhost:3000/admin` where admins can:
- Add new clothing items.
- Edit or remove existing products.
- Monitor orders placed by users.

## Authentication

The app uses Firebase or JWT authentication to secure user logins. Both users and admins have separate access control, ensuring only authorized personnel can access the admin panel.

## Contribution

Contributions to this project are welcome. If you find any bugs or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

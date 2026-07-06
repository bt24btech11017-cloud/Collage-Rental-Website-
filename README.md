<img width="1451" height="788" alt="image" src="https://github.com/user-attachments/assets/17c8aae1-af5e-4ecf-838c-36e468ff2964" /># 🏠 College Rental Marketplace

A full-stack rental marketplace web application built using **React**, **Firebase Authentication**, **Cloud Firestore**, and **Tailwind CSS**. The platform enables users to list products for rent, browse items posted by others, manage their own listings, and securely communicate with sellers.

🌐 **Live Demo:** https://collagerental-8922a.web.app

---

## 📌 Features

### 🔐 Authentication
- User Sign Up with Email & Password
- Google Sign-In
- Secure Logout
- Firebase Authentication integration

### 🛍 Product Listings
- Browse all available rental products
- View product details including:
  - Product Name
  - Description
  - Price
  - Quantity
  - Condition
  - Product Image

### ➕ Create Listings
Authenticated users can:
- Add new rental listings
- Upload product information
- Store data securely in Cloud Firestore

### 👤 My Listings
Users can:
- View only their own uploaded products
- Delete their own listings
- Update product details
- Protected using Firestore Security Rules

### 🛒 Shopping Cart
Users can:
- Add products to their personal cart
- View seller contact details after adding a product
- Maintain separate carts for different users

### 🔒 Secure Firestore Rules
Implemented ownership-based security:
- Everyone can browse products
- Only authenticated users can create listings
- Only the owner of a listing can edit or delete it
- Users can only access their own cart

### ☁ Deployment
- Hosted on Firebase Hosting
- Automated deployment using GitHub Actions

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend / Database
- Firebase Authentication
- Cloud Firestore

### Deployment
- Firebase Hosting
- GitHub Actions (CI/CD)

### Version Control
- Git
- GitHub

---

## 📂 Project Structure

```
src/
│
├── Components/
├── Pages/
├── configuration/
│      └── firebase.js
│
├── App.jsx
├── main.jsx
│
public/
firebase.json
```

---

## 🔐 Firestore Security

The application implements secure ownership-based authorization.

- Public read access
- Authenticated users can create listings
- Only the owner can update/delete listings
- Cart access restricted to the logged-in user

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/bt24btech11017-cloud/Collage-Rental-Website-.git
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 💡 Future Improvements

- Image upload using Firebase Storage
- Wishlist functionality
- Product categories
- Product search & filters
- Rental booking dates
- Chat between buyer and seller
- Ratings & Reviews
- Order history
- Email notifications
- Responsive mobile UI improvements

---

## 📚 What I Learned

This project helped me gain hands-on experience with:

- React Hooks
- Firebase Authentication
- Cloud Firestore CRUD Operations
- Firestore Security Rules
- User Authorization
- React Routing
- State Management
- Git & GitHub
- GitHub Actions
- Firebase Hosting
- Deploying Production Applications

---

## 👨‍💻 Author

**Manmohan Reddy**

B.Tech Biotechnology  
Indian Institute of Technology Hyderabad (IIT Hyderabad)

GitHub: https://github.com/bt24btech11017-cloud

---

## ⭐ If you like this project

Please consider giving this repository a ⭐ on GitHub!

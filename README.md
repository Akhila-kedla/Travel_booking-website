
# 🌍 Travel Booking Management System – Backend

This is a **Node.js + MongoDB backend project** for a Travel Booking Management System.  
It allows users to explore destinations, view travel packages, and make bookings.

---

## 🚀 Features

- 👤 User Management  
- 🏝️ Destination Management  
- 📦 Travel Package Management  
- 🧾 Booking System  
- 🗄️ MongoDB Database with Mongoose Models  

---

## 🛠️ Tech Stack

- **Backend:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB  
- **ODM:** Mongoose  
- **Language:** JavaScript  

---

## 📂 Project Structure

```

/models
├── User.js
├── Destination.js
├── Package.js
└── Booking.js
/server.js
/package.json

````

---

## 📄 Database Models

### 👤 User Model
```js
name: String  
email: String  
phone: String
````

### 🏝️ Destination Model

```js
name: String  
country: String  
bestSeason: String
```

### 📦 Package Model

```js
title: String  
price: Number  
duration: String  
destinationId: String
```

### 🧾 Booking Model

```js
userId: String  
packageId: String  
bookingDate: String  
status: String
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/travel-booking-backend.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

### 4️⃣ Run the Server

```bash
npm start
```

---

## 🧪 API Testing

You can test APIs using:

* Postman
* Thunder Client
* REST Client

---

## ✅ Future Enhancements

* 🔐 User Authentication & Authorization
* 💳 Payment Gateway Integration
* 📊 Admin Dashboard
* 🌐 Frontend Integration (React / Next.js)
* 📍 Google Maps for Destinations

---

## 🤝 Contribution

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Akhila K**
Backend Developer | Full Stack Developer

---






`

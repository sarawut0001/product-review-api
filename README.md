## ⚙️ วิธีติดตั้งและใช้งาน

### 1. Clone Repo

- git clone https://github.com/sarawut0001/product-review-api.git
- cd product-review-api

### 2. ติดตั้ง dependencies
- npm install

### 3. ตั้งค่า .env
- DATABASE_URL="postgresql://postgres:art11820@localhost:5432/product_review?schema=public"
- SECRET_KEY="mysecretkeyforproductreview1"

### 4. สร้าง DB และ Prisma Client
- npx prisma migrate dev --name init
- npx prisma generate

### 5. รันเซิร์ฟเวอร์
- npm start
  
# 📦 Product Review API

RESTful API สำหรับเว็บไซต์แสดงสินค้าและระบบสมาชิกที่ให้สมาชิกสามารถเขียนรีวิวสินค้าได้ไม่จำกัด  
พัฒนาโดยใช้ **Node.js (Express.js)** และ **Prisma ORM**

---

## 🚀 Features

- 🔐 ระบบสมาชิก: สมัคร / เข้าสู่ระบบ ด้วย JWT
- 🛒 ดูสินค้า / ดูรายละเอียดสินค้า / รีวิวสินค้า
- ✍️ สมาชิกสามารถรีวิวสินค้าได้หลายครั้ง
- ✅ Admin สามารถเพิ่ม แก้ไข ลบสินค้า
- ✏️ สมาชิกสามารถแก้ไข / ลบรีวิวของตัวเอง

---

## 📁 Tech Stack

- **Backend Framework**: Express.js
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **Database**: PostgreSQL
- **Dev Tools**: Nodemon, dotenv

---

## 📂 โครงสร้างโฟลเดอร์

product-review-api/
├── controllers/ # Logic ของแต่ละ endpoint
├── routes/ # Routing แต่ละกลุ่ม
├── middleware/ # JWT middleware
├── prisma/ # Prisma schema
├── .env # Environment variables
├── index.js # Entry point
└── README.md

# Learning Management System (LMS) 📚

A comprehensive Learning Management System built with Node.js, TypeScript, Express, and TypeORM. This system provides a robust platform for educational institutions to manage courses, students, instructors, and learning content.

---

## 🚀 Features

### 🎓 Core Functionality
- **User Management** - Students, instructors, and admin roles
- **Course Management** - Create, update, and organize courses
- **Content Delivery** - Upload and manage learning materials
- **Authentication & Authorization** - Secure JWT-based auth system
- **Email Integration** - Automated notifications and communications
- **File Upload** - Support for various file types and media
- **Database Integration** - MySQL with TypeORM for data persistence

### 🔐 Security Features
- **Password Encryption** - Bcrypt hashing for secure password storage
- **JWT Authentication** - Token-based authentication system
- **Input Validation** - Class-validator for data validation
- **Type Safety** - Full TypeScript implementation

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | Latest | Runtime environment |
| **TypeScript** | ^5.8.3 | Type-safe JavaScript |
| **Express** | ^5.1.0 | Web application framework |
| **TypeORM** | ^0.3.22 | Database ORM |
| **MySQL** | ^3.14.1 | Database |
| **JWT** | ^9.0.2 | Authentication |
| **Bcrypt** | ^6.0.0 | Password hashing |
| **Multer** | ^2.0.0 | File upload handling |
| **Nodemailer** | ^7.0.3 | Email service |

---

## 📋 Prerequisites

Before running this project, make sure you have:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MySQL** database server
- **Git** for version control

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd learning-management-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=lms_database

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# Server Configuration
PORT=3000
NODE_ENV=development
```

### 4. Database Setup
```bash
# Create database
mysql -u root -p
CREATE DATABASE lms_database;

# Run migrations (if available)
npm run migration:run
```

### 5. Development Server
```bash
# Start development server with auto-reload
npm run dev
```

### 6. Production Build
```bash
# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
learning-management-system/
│
├── src/
│   ├── controllers/        # Route controllers
│   ├── entities/          # TypeORM entities
│   ├── middlewares/       # Custom middlewares
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── validators/       # Input validation
│   └── app.ts            # Application entry point
│
├── dist/                 # Compiled JavaScript files
├── uploads/              # File upload directory
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm test` | Run test suite |

---

## 📡 API Endpoints

### Authentication
```http
POST /api/auth/register    # User registration
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET  /api/auth/profile     # Get user profile
```

### Courses
```http
GET    /api/courses        # Get all courses
POST   /api/courses        # Create new course
GET    /api/courses/:id    # Get course by ID
PUT    /api/courses/:id    # Update course
DELETE /api/courses/:id    # Delete course
```

### Users
```http
GET    /api/users          # Get all users
GET    /api/users/:id      # Get user by ID
PUT    /api/users/:id      # Update user
DELETE /api/users/:id      # Delete user
```

### File Upload
```http
POST   /api/upload         # Upload files
GET    /api/files/:id      # Download file
```

---

## 🔐 Authentication

This LMS uses JWT (JSON Web Tokens) for authentication:

1. **Register/Login** to receive a JWT token
2. **Include token** in request headers:
   ```http
   Authorization: Bearer <your-jwt-token>
   ```
3. **Protected routes** require valid authentication

---

## 📧 Email Configuration

The system supports automated email notifications:
- **Welcome emails** for new users
- **Course enrollment** confirmations  
- **Password reset** functionality
- **Assignment notifications**

Configure your email provider in the `.env` file.

---

## 💾 Database Schema

### Key Entities
- **Users** - Students, instructors, admins
- **Courses** - Course information and metadata
- **Enrollments** - Student-course relationships
- **Assignments** - Course assignments and submissions
- **Files** - Uploaded learning materials

---

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set:
```bash
NODE_ENV=production
DB_HOST=your_production_db_host
JWT_SECRET=strong_production_secret
```

### Build and Deploy
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker Deployment (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

---

## 🔮 Future Enhancements

- [ ] **Real-time Chat** - Student-instructor communication
- [ ] **Video Streaming** - Integrated video lectures
- [ ] **Quiz System** - Interactive assessments
- [ ] **Progress Tracking** - Learning analytics
- [ ] **Mobile App** - React Native companion app
- [ ] **LTI Integration** - Learning Tools Interoperability
- [ ] **Advanced Reporting** - Analytics dashboard

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write unit tests for new features
- Update documentation for API changes
- Use conventional commit messages

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Developer**: Wagdi
- 🐙 GitHub: [@wagdi](https://github.com/wagdi)
- 📧 Email: contact@yourproject.com

---

## 🏷️ Tags

`nodejs` `typescript` `express` `mysql` `typeorm` `jwt` `education` `lms` `learning-management` `rest-api`

---

## 🔧 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Check MySQL service is running
systemctl status mysql

# Verify credentials in .env file
```

**JWT Token Issues**
```bash
# Ensure JWT_SECRET is set in .env
# Check token expiration time
```

**File Upload Problems**
```bash
# Check uploads directory permissions
chmod 755 uploads/
```

---

> **Learning Management System** - Empowering education through technology. Built with modern web technologies for scalable, secure, and efficient learning experiences.

# Backend API

A robust NestJS backend application with authentication, database integration, and comprehensive testing setup.

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with Passport.js
- **Database Integration**: TypeORM with support for PostgreSQL and MySQL
- **Data Validation**: Class-validator and class-transformer for request validation
- **Security**: Bcrypt for password hashing, cookie-parser for session management
- **Testing**: Jest with unit and e2e testing capabilities
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **Configuration Management**: Environment-based configuration with dotenv

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL or MySQL database
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   ```

3. **Database Setup**
   Ensure your database is running and accessible with the credentials provided in `.env`

## 🚀 Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

## 📁 Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── dto/             # Data Transfer Objects
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── entities/            # Database entities
│   ├── task.entity.ts
│   └── user.entity.ts
├── tasks/               # Tasks module
├── app.controller.ts    # Main application controller
├── app.module.ts       # Root application module
├── app.service.ts      # Main application service
└── main.ts            # Application entry point
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

### Watch Mode
```bash
npm run test:watch
```

## 🔧 Development Tools

### Code Formatting
```bash
npm run format
```

### Linting
```bash
npm run lint
```

## 📊 API Documentation

### Authentication Endpoints
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout

### Protected Routes
All protected routes require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 🔒 Security Features

- **Password Hashing**: Uses bcrypt for secure password storage
- **JWT Authentication**: Stateless authentication with JSON Web Tokens
- **Input Validation**: Comprehensive request validation using class-validator
- **Environment Variables**: Sensitive data stored in environment variables


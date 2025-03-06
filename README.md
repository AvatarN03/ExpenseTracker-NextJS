# Expense Tracker

## Overview
An expense tracker application built with **Next.js**, **Clerk** for authentication, **Neon DB**, and **Prisma**. This app allows users to track their expenses efficiently and securely.

## Features
- User authentication with **Clerk**
- Database management with **Neon DB**
- ORM with **Prisma**
- Responsive UI built in **Next.js**
- Add, edit, and delete expenses
- View expense summary and analytics

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Neon DB account](https://neon.tech/)
- [Clerk account](https://clerk.dev/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/AvatarN03/ExpenseTracker-NextJS.git
   ```
2. Navigate to the project directory:
   ```sh
   cd expense-tracker
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```sh
   DATABASE_URL=<your_neon_db_url>
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
   CLERK_SECRET_KEY=<your_clerk_secret_key>
   ```
5. Push Prisma schema to database:
   ```sh
   npx prisma db push
   ```
6. Run the development server:
   ```sh
   npm run dev
   ```

## Usage
- Sign up or log in using **Clerk**.
- Add, edit, or delete your expenses.
- View your expense summary and analytics.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, reach out via:
- Email: jsprashanth003@gmail.com 
- GitHub Issues


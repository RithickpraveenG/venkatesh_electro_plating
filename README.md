# Industrial Plating Website

A professional, high-performance website for an industrial surface treatment company, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Industrial Design**: Custom aesthetics using "Steel Grey", "Deep Blue", and "Olive Green".
- **Responsive UI**: Fully responsive layouts using Tailwind CSS.
- **Service Showcase**: Detailed service cards with technical specifications.
- **Process Workflow**: Animated timeline demonstrating the plating process.
- **Industries Page**: Grid layout highlighting industries served.
- **Enquiry System**: Functional contact form with Zod validation.
- **Email Notifications**: Integrated Nodemailer for admin alerts.
- **SEO Friendly**: Server-side metadata for all pages.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Next.js API Routes.
- **Database**: PostgreSQL (via Prisma ORM).
- **Email**: Nodemailer.

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker Desktop (for local PostgreSQL database)

### Installation

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up Database:**
    Start the PostgreSQL container:
    ```bash
    docker-compose up -d
    ```

3.  **Environment Variables:**
    Copy `.env.example` to `.env` (already done if using provided setup):
    ```bash
    cp .env.example .env
    ```
    Ensure `DATABASE_URL` matches your Docker config.

4.  **Initialize Database Schema:**
    Push the Prisma schema to the database:
    ```bash
    npx prisma db push
    ```

5.  **Run Development Server:**
    ```bash
    npm run dev
    ```

6.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`: Reusable UI components (Client & Server split).
- `lib/`: Utilities (Database, etc).
- `prisma/`: Database schema.
- `public/`: Static assets.

## Production Build

To create a production build:
```bash
npm run build
npm start
```

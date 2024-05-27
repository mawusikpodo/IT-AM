## UNIVERSITY OF GHANA

## DEPARTMENT OF COMPUTER SCIENCE

## ISS Assignment Group 5

## Group Members

1. **Emmanuel Ametepee** - 11365216
2. ⁠**Robert Mawusi Kpodo** - 11365200
3. **Emmanuel Hemans** - 11365190
4. **Ampomah Kofi** - 11366516
5. **Nana Kumi Joshua** - 11005268
6. **Nartey Michael** - 11365196
7. ⁠**Isaac Abraham-Mumuni** - 11365255
8. ⁠**Samuel Odoom Ayew** -11366113
9. **GIDEON TATAGAH** - 11365208
10. **Alfred Foli**-11365899
11. **Paula Herzuah** - 11365281
12. **Johnny Orleans De-Graft Hanson** - 11365288
13. **Randy Ofori-Atta** - 11365204

---

# IT Tracking System and Document Management Application

## Overview

This is a web-based IT Tracking and Document Management application developed using Next.js and Convex Backend as a Service (BaaS). The application allows users to securely upload, search, delete, favorite, and restore files, with robust security mechanisms including role-based authorization and user authentication.

## Key Features

1. **File Upload**: Securely upload files to cloud storage.
2. **File Search**: Efficient search functionality to locate files by name or content.
3. **File Delete**: Secure delete with the ability to restore deleted files.
4. **File Favorite**: Mark files as favorites for quick access.
5. **File Restore**: Restore deleted files from a recycle bin.
6. **Role-Based Authorization**: Different user roles with specific permissions.
7. **User Authentication**: Secure login with Clerk and multi-factor authentication (MFA).

## Security Mechanisms

- **Access Control**: Role-Based Access Control (RBAC) and fine-grained access control lists (ACLs).
- **Authentication**: User authentication with Clerk, supporting OAuth and JWT.
- **Non-repudiation**: Comprehensive audit logs of user actions.
- **Confidentiality**: Data encryption in transit and at rest.
- **Availability**: High availability with Convex cloud infrastructure, redundancy, and backups.
- **Integrity**: Regular data integrity checks using secure hash algorithms.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Convex account
- Clerk account

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mawusikpodo/IT-AM.git
   ```

2. Change directory to the project folder:

   ```sh
   cd IT-AM
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

4. Set up environment variables:

   Create a `.env.local` file in the root directory and add your Convex and Clerk credentials:

   ```sh
   NEXT_PUBLIC_CONVEX_API_URL=your_convex_api_url
   CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **File Upload**: Navigate to the upload section, choose your file, and upload it.
- **File Search**: Use the search bar to find files by name or content.
- **File Delete**: Select a file and choose the delete option. Deleted files can be restored from the recycle bin.
- **File Favorite**: Mark files as favorites by clicking the favorite icon.
- **File Restore**: Go to the recycle bin and restore deleted files.
- **Role Management**: Admin users can manage roles and permissions for other users.

## Contributing

We welcome contributions!

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

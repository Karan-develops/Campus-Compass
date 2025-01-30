# Campus Project - Add Everything you know - Open Source

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Campus Project is a full-stack web application designed to manage and streamline campus activities. It provides a platform for students, faculty, and administrators to interact and manage campus-related tasks efficiently.

## Features
- User authentication and authorization
- Profile management for students
- Event scheduling and notifications
- Course management and enrollment
- Discussion forums and messaging
- Administrative dashboard for managing campus activities

## 📚 Tech Stack
- **Frontend:**
    - React.js
    - Next.js
    - Shadcn-ui
    - TailwindCSS
- **Backend:**
    - Node.js
    - Prisma
- **Database:**
    - Neon
    - PostgreSQL
- **Version Control:**
    - Git

```
## 📁 File Structure :
Directory structure:
└── karan-develops-campus-compass/
    ├── backend/
    │   └── package.json
    └── frontend/
        ├── README.md
        ├── components.json
        ├── eslint.config.mjs
        ├── middleware.ts
        ├── next.config.ts
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.mjs
        ├── tailwind.config.ts
        ├── tsconfig.json
        ├── types.d.ts
        ├── .gitignore
        ├── actions/
        │   └── user.actions.ts
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── not-found.tsx
        │   ├── page.tsx
        │   ├── (root)/
        │   │   ├── academics/
        │   │   │   ├── academics-content.tsx
        │   │   │   ├── page.tsx
        │   │   │   └── [program]/
        │   │   │       ├── learn-more-content.tsx
        │   │   │       └── page.tsx
        │   │   ├── admissions/
        │   │   │   ├── admissions-content.tsx
        │   │   │   └── page.tsx
        │   │   ├── campus-life/
        │   │   │   ├── clubs/
        │   │   │   │   ├── club-content.tsx
        │   │   │   │   └── page.tsx
        │   │   │   ├── events/
        │   │   │   │   ├── events-content.tsx
        │   │   │   │   └── page.tsx
        │   │   │   └── sports/
        │   │   │       ├── page.tsx
        │   │   │       └── sports-content.tsx
        │   │   ├── contact/
        │   │   │   ├── contact-content.tsx
        │   │   │   └── page.tsx
        │   │   ├── peers/
        │   │   │   ├── page.tsx
        │   │   │   └── peers-content.tsx
        │   │   ├── placements/
        │   │   │   ├── page.tsx
        │   │   │   └── placements-content.tsx
        │   │   └── profile/
        │   │       ├── profile-content.tsx
        │   │       └── [identifier]/
        │   │           └── page.tsx
        │   └── api/
        │       ├── messages/
        │       │   └── route.ts
        │       └── profile/
        │           └── route.ts
        ├── components/
        │   ├── Footer.tsx
        │   ├── HomePage.tsx
        │   ├── Navbar.tsx
        │   ├── NavbarWrapper.tsx
        │   ├── ThemeProvider.tsx
        │   ├── ToggleTheme.tsx
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── avatar.tsx
        │       ├── badge.tsx
        │       ├── button.tsx
        │       ├── calendar.tsx
        │       ├── card.tsx
        │       ├── dialog.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── menubar.tsx
        │       ├── progress.tsx
        │       ├── separator.tsx
        │       ├── switch.tsx
        │       ├── tabs.tsx
        │       └── textarea.tsx
        ├── lib/
        │   ├── prisma.ts
        │   └── utils.ts
        ├── prisma/
        │   ├── schema.prisma
        │   └── migrations/
        │       ├── migration_lock.toml
        │       └── 20250126121634_mg1/
        │           └── migration.sql
        └── public/
            └── images/
                └── placements/
```

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
        ```bash
        git clone https://github.com/Karan-develops/Campus-Compass
        ```
        2. Navigate to the project directory:
            ```bash
            cd campus/frontend
            ```
        3. Install the dependencies:
            ```bash
            npm install
            ```
        4. Set up environment variables:
            - Create a `.env.local` file in the `frontend` directory.
            - Add the following variables:
                ```
                NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_api_key
                CLERK_SECRET_KEY=your_clerk_secret
                DATABASE_URL=your_db_secret
                ```

        5. Start the development server:
            ```bash
            npm run dev
            ```
        ```

## Usage
- Open your browser and navigate to `http://localhost:3000`.
- Register a new account or log in with existing credentials.
- Explore the features and functionalities of the Campus Project.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
        ```bash
        git checkout -b feature/your-feature-name
        ```
3. Make your changes and commit them:
        ```bash
        git commit -m "Add your message"
        ```
4. Push to the branch:
        ```bash
        git push origin feature/your-feature-name
        ```
5. Open a pull request.

## 🔒 License
This repository is open source and under [MIT](https://choosealicense.com/licenses/mit/) License.
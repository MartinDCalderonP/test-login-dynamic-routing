## Technical Test:

The company has a web application that requires users to log in before accessing any function. After a user logs in, the application should redirect them to an appropriate landing page based on their role.

_For example, if a user has the role of "administrator," they should be redirected to a page that displays the available administration options for them. If a user has the role of "regular user," they should be redirected to a home page that displays the available functions for regular users._

**Objective**:

Design and implement a solution that allows users to be redirected to a destination page after logging in, based on their role.

**Instructions:**

1.  Design and develop a solution that meets the following requirements:

    - The solution should allow users to log in to the application (simple login, not evaluated only to simulate functionality).
    - Users must be redirected to a different destination page based on their role after logging in.
    - The solution must include destination pages for each user role, with content to differentiate between roles.
    - Users should not be able to access other role's destination pages.
    - The solution should be practical and should NOT have a professional appearance.

2.  Use the following test data:

- Administrator Role:

      Username: admin
      Password: admin
      Destination path: /admin

- User Role:

      Username: user
      Password: user
      Destination path: /user

3.  Upload your solution to a version control repository of your choice (e.g. GitHub) and send the link to your solution along with any additional necessary instructions.

4.  Your solution will be evaluated according to the following criteria:

- **Functionality**: the solution must meet the specified requirements.
- **Code quality**: the solution must be well-structured and have clean and readable code.
- **Code scalability**: the code should be easily scalable to add new functions and features in the future.

## Getting Started

First: fork this repository [Fork a repo (GitHub docs)](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

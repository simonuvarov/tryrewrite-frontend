# TryRewrite Frontend

This is the source code of [tryrewrite.com](https://tryrewrite.com) frontend. This is the version of the app contains authentication and authorization. The live version was stripped of these features.

It is built with [Next.js](https://nextjs.org/), and [Tailwind CSS](https://tailwindcss.com/). It uses [Zustand](https://github.com/pmndrs/zustand) for state management. It also uses [React Query](https://react-query-v3.tanstack.com/) for data fetching and local caching. React Query is also used for [optimistic UI updates](https://tanstack.com/query/v4/docs/react/guides/optimistic-updates/) during the deletion of an essay. The app uses [Slate](https://www.slatejs.org) as the customizable editor.

REST API calls are strongly typed. You can find them in `src/services`.

## Running the app

Bisedes standard `yarn` and `yarn dev` commands, you also need to specify the `NEXT_PUBLIC_API_URL` environment variable. This is the URL of the backend API.
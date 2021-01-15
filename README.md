# C-Stop

A lightning-fast, offline-first website with [Netlify CMS](https://netlifycms.org) and React.

- **[Create React App](https://github.com/facebookincubator/create-react-app)**
- **[React Router](https://github.com/ReactTraining/react-router)** for routing
- **[React Helmet](https://github.com/nfl/react-helmet)** for document titles, descriptions, meta
- **[React Snapshot](https://github.com/geelen/react-snapshot)** for pre-rendering to static html so it works without Javascript ⭐️
- **[Netlify CMS](https://github.com/netlify/netlify-cms)** for content management

I aim to include commonly used components and best-practices e.g. forms, settings, <head> tags, lazy-loading images, etc.

## Show me the CMS!

The CMS lives at [\_\_YOUR_SITE_NAME\_\_.netlify.com/admin](https://__YOUR_SITE_NAME__.netlify.com/admin).

## Developing

1.  Clone your repo to your local machine

1.  Install dependencies

`yarn` or `npm install`

1.  Run the development server

`yarn start` or `npm run start`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

1.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:3000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).

## See also

[Netlify CMS Docs](https://www.netlifycms.org/docs/)  
[Netlify CMS Repo](https://github.com/netlify/netlify-cms)  
[Hyperstatic](https://github.com/Jinksi/hyperstatic) – the same starter project minus Netlify CMS  
[Gatsby + Netlify CMS Starter (Gatsbro)](https://github.com/Jinksi/gatsbro)

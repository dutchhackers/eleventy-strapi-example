# Eleventy with Strapi demo 

This is an example project. This project shows how to use Eleventy with Stapi (Headless CMS) and it will fetch all data via the GraphQL endpoint. 

The demo result is a static site and will show a simple Tracks/Songs listing. Data is coming from Strapi and fetched by Eleventy via GraphQL.


## Getting started

Configuration steps:
1. Setup Strapi
2. Setup Eleventy

### Setup Strapi

Install dependencies:

```
cd strapi-cms
npm install
```

### Setup Eleventy

Install dependencies:

```
cd eleventy-site
npm run start
```

Create environment file:
```
cp .env.example .env
```

Specify GraphQL enpoint on Strapi Server:
```
GRAPHQL_API=http://localhost:1337/graphql
```

## Build and run project

Run Strapi
```
cd strapi-cms
npm run develop
```

If you're starting Strapi for the first time, it will:
- create a local database in the folder `.tmp`
- ask you to create an Admin account

If you need more instructions on Strapi, visit [Strapi Quickstart](https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html)

The following Collection types will be created automatically:
- Track
- Artist

Important: make sure to set the correct permissions (find/findOne)


Start Eleventy

```
cd eleventy-site
npm run start
```

If everything runs OK, the eleventy site is available on http://localhost:8080

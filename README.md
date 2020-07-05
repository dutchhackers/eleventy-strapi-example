# Eleventy with Strapi demo 

This is an example project. This project shows how to use Eleventy with Stapi (Headless CMS) and it will fetch all data via the GraphQL endpoint. 

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
cp .env.example .env2
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

Start Eleventy

```
cd eleventy-site
npm run start
```

If everything runs OK, the eleventy site is available on 
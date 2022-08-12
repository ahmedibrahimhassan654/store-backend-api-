# Build a Storefront Backend

## Overview

This project building Node js Back end Rest API with Node js , Express js ,Postgre sql, and test API's with jasmin.this requried in UDACTITY Addvanced Full stack Nanodegree presented from Egypt-FWD-MCIT.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Build

`npm run build`

### 3. production

`npm run prod`

### 4. development

`npm run dev`

### 5. test

`npm run tset`

### 6. Linting

`npm run lint`

### 6. prettier format

`npm run format`

# .env file

PORT=3000

NODE_ENV=dev

# database connection informations

- DB_HOST=localhost
- DB_PORT=5432
- DB_NAME_DEV=store_dev
- DB_NAME_TEST=store_test
- DB_NAME_PROD=store_prod
- DB_USER=postgres
- DB_PASSWORD=Allahonly1
- BCRYPT_PASSWORD=Allahonly1
- SALT_ROUNDS=10
- TOKEN_SECRET=secret

## Endpoint

all api endpoints are listed on this link

- [Postman ](https://documenter.postman.com/preview/7173620-3569b4ba-b4fa-42d3-bc58-826083cc6e28?environment=&versionTag=latest&apiName=CURRENT&version=latest&documentationLayout=classic-double-column&right-sidebar=303030&top-bar=FFFFFF&highlight=EF5B25#8370898c-2f3d-4288-839b-60ce3da827f5) - End point docmentation .

## Create a new user

### `/api/users`

Method: `Post`

body parameters:
"email":"test3534email.gmail.com",
"first_name":"test3534",
"last_name":"test334",
"password":"Allahonly1"

for example: `http://localhost:3000/api/users`

![Postman res ](https://github.com/ahmedibrahimhassan654/store-backend-api-/blob/master/screens/create%20user.PNG?raw=true)

## Get all users

### `/api/users`

Method: `get`

for example: `http://localhost:3000/api/users`

![Postman res ](https://github.com/ahmedibrahimhassan654/store-backend-api-/blob/master/screens/get%20all%20users.PNG?raw=true)

## Get single user

### `/api/users`

Method: `get`

for example: `http://localhost:3000/api/71420891-c652-415b-9c6c-437153275c88`

![Postman res ](https://github.com/ahmedibrahimhassan654/store-backend-api-/blob/master/screens/get%20all%20users.PNG?raw=true)

## Delete single user

### `/api/users`

Method: `Delete`

for example: `http://localhost:3000/api/71420891-c652-415b-9c6c-437153275c88`

![Postman res ](https://github.com/ahmedibrahimhassan654/store-backend-api-/blob/master/screens/get%20all%20users.PNG?raw=true)

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [postgree SQL DB](https://www.postgresql.org/) - potgree DB.
- [Postman](https://www.getpostman.com/) - The REST API tool.
- [Prettier](https://prettier.io/) - The code formatter.
- [eslint](https://eslint.org/) - Find and fix problems in code.
- [jasmine](https://jasmine.github.io/) - The test framework.
- [Git](https://git-scm.com/) - The version control system.

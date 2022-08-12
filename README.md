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

DB_HOST=localhost
DB_PORT=5432
DB_NAME_DEV=store_dev
DB_NAME_TEST=store_test
DB_NAME_PROD=store_prod
DB_USER=postgres
DB_PASSWORD=Allahonly1
BCRYPT_PASSWORD=Allahonly1
SALT_ROUNDS=10
TOKEN_SECRET=secret

## Endpoint

### `/api/users`

Method: `Post`

body parameters:
"email":"test3534email.gmail.com",
"first_name":"test3534",
"last_name":"test334",
"password":"Allahonly1"

for example: `http://localhost:3000/api/users`

![Postman res ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/postman%20res.PNG?raw=true)

![Browser res ](https://github.com/ahmedibrahimhassan654/image_processingAPI/blob/master/screens/rest-response%20in%20the%20browser.PNG?raw=true)

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.
- If the image is not found, a 404 error is returned.
- All images requested will be saved to disk.
- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
- [Postman](https://www.getpostman.com/) - The REST API tool.
- [Prettier](https://prettier.io/) - The code formatter.
- [eslint](https://eslint.org/) - Find and fix problems in code.
- [jasmine](https://jasmine.github.io/) - The test framework.
- [Git](https://git-scm.com/) - The version control system.

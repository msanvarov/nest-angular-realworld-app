<h1 align="center">Realworld App</h1>

<p align="center">
  <a href="https://www.realworld.how/" target="blank"><img src="https://www.realworld.how/img/realworld-logo.png" width="100" alt="realworld" /></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="200" alt="nest" /></a>
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="100" alt="angular" /></a>
</p>

<p align="center">
A full-stack <a href="https://nodejs.org" target="blank">Node.js</a> application built with <a href="https://angular.io" target="blank">Angular</a>, and <a href="https://nestjs.com" target="blank">Nest</a> based off of the <a href="https://www.realworld.how/docs/specs/backend-specs/introduction/" target="blank">Realworld OAS</a>.
</p>

<p align="center">
	<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
	<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
	<a href="https://github.com/msanvarov/nest-angular-realworld-app/actions"><img src="https://github.com/msanvarov/nest-angular-realworld-app/actions/workflows/build-merge.yml/badge.svg" alt="Github Actions" /></a>
	<a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

Table of Contents:

1. [Description](#-description)
2. [Prerequisites](#%EF%B8%8F-prerequisites)
3. [Deployment](#-deployment)
4. [Environment Configuration](#-environment-configuration)
5. [Choosing a Web Framework](#-choosing-a-web-framework)
6. [HTTP2](#-http2)
7. [Choosing a Database](#-choosing-a-database)
8. [Testing](#-testing)
9. [TypeDocs](#-typedocs)
10. [Logs](#-logs)

🔎 This repo was created with [Nx](https://nx.dev/).

### 📚 Description

This application is template from [Sals' NEST REST TYPEORM STARTER](https://github.com/msanvarov/nest-rest-typeorm-boilerplate) which was made to quickly prototype backend applications. Deployed with authentication/authorization, logging, crud features and database persistence out of the box.

---

### 🛠️ Prerequisites

#### Non Docker

- Please make sure to have [Node.js](https://nodejs.org/en/download/) (16+) locally by downloading the Javascript runtime via `brew`, `choco`, or `apt-get`.

- Please make sure to have MYSQL locally by deploying a web server stack like [XAMPP](https://www.apachefriends.org/). The control panel can then trigger MYSQL to start on localhost. MYSQL can be downloaded standalone via `brew`, `choco`, or `apt-get`.

#### Docker 🐳

- Please make sure to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) operational to quickly compose the required dependencies. Then follow the docker procedure outlined below.

---

### 🚀 Deployment

#### Manual Deployment without Docker

- Clone the repo via `git clone https://github.com/msanvarov/realworld-app`.

- Download dependencies via `npm i` or `yarn`.

- Create a **.env file** via the `cp .env.example .env` command and replace the existing environment variable placeholders with valid responses.

- Start the api in development mode by using `npm run start` (the api will be exposed on http://localhost:3333, and the **default ui** will be exposed on http://localhost:4200).

<details open>
<summary>Deployment of the Custom UI</summary>
<br>

- This repo comes with a custom UI built with [Angular](https://angular.io/) - that can be accessed via `http://localhost:4201`. This is different from the default UI that comes with the Realworld OAS.

- To start the UI, start a new terminal window and run `npm run ng serve -- --project ui`.

> Remark: In the docker deployment, the UI is automatically started and served by the API.

</details>
<br/>

#### Deploying with Docker 🐳

- Execute the following command in-app directory:

```bash
# creates and loads the docker container in detached mode with the required configuration
$ docker-compose up -d
```

- The following command will download dependencies and execute the web application on http://localhost:80 (deployed behind a Nginx reverse proxy).

---

### 🔒 Environment Configuration

By default, the application comes with a config module that can read in every environment variable from the `.env` file.

**APP_ENV** - the application environment to execute as, either in development or production. Determines the type of logging options to utilize. Options: `development` or `production`.

**WEBTOKEN_ENCRYPTION_KEY** - the key to encrypt/decrypt web tokens with. Make sure to generate a random alphanumeric string for this.

**WEBTOKEN_EXPIRATION_TIME** - **the time in seconds** when the web token will expire; by default, it's 2400 seconds which is 40 mins.

**DB_TYPE** - the type of [database connection to use](https://github.com/typeorm/typeorm/blob/master/docs/connection-options.md).

**DB_USERNAME** - username for authenticating against the database.

**DB_PASSWORD** - password for authenticating against the database, can be left empty if a password is not needed (**not safe**).

**DB_HOST** - the endpoint where this database sits (default is localhost but can be set explicitly).

**DB_PORT** - default ports for different types of database connections.

**DB_DATABASE** - the actual database name to perform operations on.

---

### 🏗 Choosing a Web Framework

This boilerplate comes with [Fastify](https://github.com/fastify/fastify) out of the box as it offers [performance benefits](https://github.com/nestjs/nest/blob/master/benchmarks/all_output.txt) over Express. But the Express adapter is still accessible on a [different branch](https://github.com/msanvarov/realworld-app/tree/express).

---

### 💾 Choosing a Database

By default **PostgreSQL** is the database of choice but TypeORM supports other database types like SQLite, MySQL/MariaDB, MongoDB, and MSSQL. To use anything other than MYSQL/MariaDB, change the configuration in the `.env` file, and download the corresponding wrapper library, like [SQLite3](https://www.npmjs.com/package/sqlite3).

> Check https://typeorm.io/ for supported database types.

**Remark: For MongoDB, TypeORM is not as feature-rich as Mongoose. Therefore I created another boilerplate for [Nest and Mongoose](https://github.com/msanvarov/nest-rest-mongo-boilerplate)**.

---

### 🦾 HTTP/2

Luckily, Fastify can enable HTTP2 over either HTTPS (h2) or plaintext (h2c) out of the box. This boilerplate makes use of this on the [feat/http2 branch](https://github.com/msanvarov/realworld-app/tree/feat/http2) where a self-signed certificate was created for testing this capability. The certificate is located in the [certs folder](https://github.com/msanvarov/realworld-app/tree/feat/http2/apps/api/src/assets/certs). **For production, please use a valid certificate.**

The self signed certificate can be generated via OpenSSL:

```bash
$ openssl req -x509 -newkey rsa:4096 -keyout api-key.pem -out api-cert.pem -days 365 -nodes

```

> Remark: Express can be ran with HTTP/2 by employing the [spdy](https://www.npmjs.com/package/spdy) library.

---

### ✅ Testing

#### Docker 🐳

```bash
# Start the docker container if it's not running
$ docker start nest-rest-typeorm-api

# unit tests
$ docker exec -it nest-rest-typeorm-api npm run test

# test api against postman collection
$ docker exec -it nest-rest-typeorm-api npm run test:postman

```

#### Non-Docker

```bash
# execute test
$ npm run test

# test api against postman collection
$ npm run test:postman

```

---

### 💡 TypeDocs

The documentation for this boilerplate can be found [on Github pages](https://msanvarov.github.io/nest-rest-typeorm-boilerplate/).

The docs can be generated on-demand, by typing `npm run typedocs:api:start`. This will produce a **docs/api** folder with the required front-end files and **start hosting on [localhost](http://localhost:8080/)**.

> Remark: The docs for the ui are generated on-demand, by typing `npm run typedocs:ui:start`. This will produce a **docs/ui** folder with the required front-end files and **start hosting on [localhost](http://localhost:8080/)**.

```bash
# generate docs for api code
$ npm run typedocs:api:start
```

---

### 📝 Open API

Out of the box, the web app comes with OAS; an [open api specification](https://swagger.io/specification/), that is used to describe RESTful APIs. Nest provides a [dedicated module to work with it](https://docs.nestjs.com/openapi/introduction).

The configuration for OAS can be found at this [location](https://github.com/msanvarov/realworld-app/blob/master/apps/api/src/main.ts).

The client lib is generated with [OpenAPI Generator](https://openapi-generator.tech/) to be compatible with the UI application out of the box. The reference OAS yaml file can be found at this [location](https://github.com/msanvarov/realworld-app/blob/master/openapi/realworld-openapi.yaml).

---

### ✨ TypeORM

TypeORM is an object-relational mapping that acts as an abstraction layer over operations on databases. Please view the [documentation](https://typeorm.io/#/) for further details.

The configuration for TypeORM can be found in the [app module](https://github.com/msanvarov/realworld-app/blob/master/apps/api/src/app.module.ts#L33-L51).

---

### 🔊 Logs

This boilerplate comes with a Winston module for **extensive logging**, the configurations for Winston can be found in the [app module](https://github.com/msanvarov/realworld-app/blob/master/apps/api/src/app.module.ts#L52-L89).

---

### 🏗️ Progress

|                                                       Branches | Status |
| -------------------------------------------------------------: | :----- |
|             [main](https://github.com/msanvarov/realworld-app) | ✅     |
| [feat/\*](https://github.com/msanvarov/realworld-app/branches) | 🚧     |

<!-- > Remark: This template was employed to create a [Real World example app](https://github.com/gothinkster/realworld) on [Github](). -->

---

### 👥 Support

PRs are appreciated, I fully rely on the passion ❤️ of the OS developers.

---

## License

This starter API is [MIT licensed](LICENSE).

[Author](https://sal-anvarov.tech/)

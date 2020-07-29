# Survey API

This is a survey API (wip) made with the purpose of testing Deno.\
This was made following the freecodecamp.org deno's [course](https://www.youtube.com/watch?v=TQUy8ENesGY).\
Additional to all the mentioned in the course I added docker and docker-compose support.

## Current features

- Database integration using mongo.
  (Refer to my-environment repository to [reference](https://github.com/meguiluzo/my-environment/tree/master/mongo))
- Login with JWT support.
- Docker integration.

## Installation requirements

- [Denon](https://deno.land/x/denon)
- [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/)
- [Mongo](https://docs.mongodb.com/manual/installation/)

## How to run

In order to run the application use the following commands:

- **denon start:dev** Run the app in development mode.
- **denon start:debug** Run the app in debug mode.
- **denon start:docker** Run the app with docker.

## Pendant features

- Survey CRUD endpoints
- Swagger support

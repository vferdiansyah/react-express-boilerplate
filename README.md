# React Express Boilerplate

A barebone React and Express boilerplate.

## Background

I created this boilerplate because I have several coding interviews that needs to be done using React and an API server.

## Setup

You have to have [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac) installed.

### [Step 1] Building and running the dockerized codebase

1.  Clone the repository.

2.  In the root of cloned repository, duplicate `.env.example` file, save it as `.env`, and then fill the credentials. For example:

    ```bash
    cp .env.example .env
    ```

    ```bash
    API_SERVER_PORT=5000
    ```

3.  Build all containers using `docker-compose build --no-cache`.

4.  Run all containers using `docker-compose up`.

    **Notes**:
    When running docker compose, it will create new volume(s). If change(s) are made to `package.json`, it won't be detected by the container.
    I recommend:

    - To remove the volume `docker volume prune`, or
    - Update package manually by doing `docker exec -it <container id> sh` and `npm install`

    I use the `--no-cache` flag so that new npm packages gonna be installed.

    **Tips**:

    - Use `--build` in `docker-compose` to force update the docker image created, e.g. `docker-compose up --build`

### [Step 2] Connecting to a running dockerized instances

1. **Viewing website**: In `docker-compose.yml`, I map the Nginx container's port (80) to your localhost port (1337). To see if this is working, visit <http://localhost:1337>.

2. **Connecting to API server**: In the Nginx's `default.conf`, I filter calls to `/api` to the backend. You can then use Postman or curl to test routes e.g. <http://localhost:1337/api/users>

3. **Connecting to a shell in container**: If you want shell access to a particular docker container, execute the following command

   ```bash
   # Lists all running containers with their names
   docker ps

   # Connects a shell session to a running container
   docker exec -it <container_name> <command (either sh or /bin/bash)>
   ```

### [Step 3] Cleaning up

1. When you're done, `Ctrl-C` in the main `docker-compose up` window to terminate the running processes.

2. Run `docker-compose down` to stop and remove containers.

## License

Copyright (c) 2019 Veri Ferdiansyah
Licensed under the MIT license.

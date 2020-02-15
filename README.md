
# Coding Challenge


### Instructions:

1) Run the server

In the `BackEnd` directory, run `npm start` (use `npm start:dev` for live reloading in development). The server will run on port 8080.

2) Run the front end

In the `FrontEnd` directory, run `npm start` for development, which will serve the React app on port 3000 (it will proxy requests to port 8080). In production, run `npm build` which will create the static files in the build directory. The server is configured to serve these static files from the `FrontEnd` directory.
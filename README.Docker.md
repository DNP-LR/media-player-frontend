# Docker Setup for Media Player Frontend

This document provides instructions on how to build and run the Media Player Frontend application using Docker.

## Dockerfile Summary

The Dockerfile is designed to build and serve the Media Player Frontend application using a multi-stage build process.
It uses the `node:18-alpine` image to build the application and the `nginx:alpine` image to serve it.

## Building the Docker Image

To build the Docker image, run the following command in the root directory of the project:

```bash
docker build -t media-player-frontend .
```

## Running the Docker Image

To run the Docker image, run the following command in the root directory of the project:

```bash
docker build -t media-player-frontend .
```

docker build -t pavel27/mediaplayerfrontend .

# Ticketing Website
![](https://img.shields.io/badge/Docker-blue) ![](https://img.shields.io/badge/Kubernetes-v1.25.9-blue) ![](https://img.shields.io/badge/Skaffold-v2.5.1-blue) ![](https://img.shields.io/badge/Ingress--Nginx-v1.2.0-blue) ![](https://img.shields.io/badge/platform-MacOS-orange) \
This application offers a seamless ticket booking experience with a user-friendly interface and secure login/logout system. The website is built on a microservices architecture, allowing for scalable and independent service deployment. Each service handles specific functionalities, ensuring high maintainability and reliablity.

## Technologies Used
- Frontend: React.js, Next.js
- Service: Node.js, Express
- Database: MongoDB
- Implemented Server: runs in **Docker** containers executed in a **Kubernetes** cluster

## Configuration
In this project, it should create a Docker image. This course push docker image to Docker Hub, so you need to change the docker id `barrypr14` to your own docker id in all yaml files. Then follow these steps to build
- update the docker id in every yaml file
- build the image: `docker build -t <your docker ID>/<image name> .`
- push the image to the Docker Hub: `docker push <your docker ID>/<image name>` \

In this project, we will create auth, client, tickets these three images so far.

(Optional) To share same logic between service, you need to custom NPM packages. If you custom your NPM packages, you should revise all the services which use this common package 
1. You should go to [npm](https://www.npmjs.com/) website and create an account. 
2. Create a new public organization.
3. Revise the `@porutickets` to your own organization name
4. Go to the `./common` directory and run the command line `npm run pub`
5. Revise all the services which use the package `@porutickets/common`

## Installation and Usage
If you follow all the steps in the installation in [Environment Setup](../README.md), move to the `./ticketing` and run the following command line
```bash
skaffold dev
```

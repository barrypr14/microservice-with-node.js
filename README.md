# microservice-with-node.js
![](https://img.shields.io/badge/Node.js-v19.8.1-orange) ![](https://img.shields.io/badge/Typescript-v5.1.3-blue) \
This repository contains the source code and class notes from the course "Microservices with Nodejs and React" taught by Stephen Grider.


## Installation
To run the application, you'll need to have the following tools installed on your system. 
1. **Docker:** Docker is used to create and manage containers for your application. Follow the instructions in [Docker](https://www.docker.com/products/docker-desktop/) for your operating system to install.
2. **Kubernetes:** Kubernetes is the container orchestration platform used to manage containerized applications. Follow the official documentation to install Kubernetes: [Kubernetes on Docker Desktop](https://docs.docker.com/desktop/kubernetes/)
3. **Ingress-Nginx:** it is an Ingress controller for Kubernetes that enables routing of incoming traffic to your services. Install using the following command:
   ```bash
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.1/deploy/static/provider/cloud/deploy.yaml
   ```
   you can get more information in https://kubernetes.github.io/ingress-nginx/deploy
4. **Skaffold:** It automates many tasks in a Kubernetes dev environment, and makes it easy to update code running in the pod. You can run skaffold in command line when you construct your .yaml
5. ```bash
   skaffold dev
   ```
## Usage
For both project `blog` and `ticketing`, please run following command line to implement the application
```bash
cd ./microservcie-wtih-node.js/<blog or ticketing>
skaffold dev
```

# CS 519 Assignments

This is CS 519 Assignments repository with overview of the setup and structure of the projects.

## Repository Structure

- **CI/CD Pipelines:** We have a CI/CD setup located in `.github/workflows` containing three main workflows:
  1. **Azure Web Apps Node Deployment** (`azure-webapps-node.yml`) - This workflow builds and pushes a Node.js application to an Azure Web App.
  2. **Azure Functions App Node.js Deployment** (`azure-functions-app-nodejs.yml`) - This workflow builds a Node.js project and deploys it to an Azure Functions App.
  3. **Azure Functions App Container Deployment** (`azure-functions-app-container.yml`) - This workflow builds a container, pushes it to an Azure Container Registry, and then deploys it to an Azure Container App.
  
- **Node Folder:** Contains three main sub-folders:
  1. **API1** - The first API.
  2. **API2** - The second API which also has a Docker container setup.
  3. **WEB** - The web application containing both backend and frontend.

- **C_Sharp Folder:** I am not using this directory.

## Instruction Running Projects (Node Folder)

### WEB

1. Navigate to the `WEB` folder.
2. Install the required dependencies for the server:
   ```bash
   npm install
   ```
3. Navigate to the `WEB/frontend` directory and install the frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Return to the `WEB` directory and start the web application:
   ```bash
   cd ..
   node index.js
   ```
   
## Solution diagram
![image](https://github.com/spark-classes/assignment-1-jasonoh1998/assets/92873161/b0d35690-197d-4f14-a764-70c7cffb6a18)

### API1

1. Navigate to the `API1` folder.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the API1:
   ```bash
   npm start
   ```

### API2

1. Make sure you have Docker installed on your local machine.
2. Navigate to the `API2` folder.
3. Build the Docker image:
   ```bash
   docker build -t [image-name] .
   ```
4. Run the container:
   ```bash
   docker run -p 8080:8080 [image-name]
   ```

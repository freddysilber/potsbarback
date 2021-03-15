# Azure-MERN-Boilerplate
A very basic boilerplate for an Azure ready MERN app

The tutorial for deploying this boilerplate can be found here:
https://medium.com/@tuna.sogut/how-to-deploy-a-mern-stack-app-to-azure-via-continuous-integration-a3a551526e26?sk=0fc4fa9d7c7072ad7e95b94d7e5733e4

thub.com/freddysilber/potsbarback/workflows/Build%20and%20deploy%20Node.js%20app%20to%20Azure%20Web%20App%20-%20potsbarbak/badge.svg?branch=azure-dev)
=======
## Contents
* [Getting Started](#Getting-Started)
* [Scripts](#Scripts)

<img width="500" src="client/src/assets/bakbar.png"/>

## Getting Started
1. run ```npm i``` in the root directory
2. ```cd``` into the 'client' directory and run ```npm i```
3. ```cd``` back to the root directory and run ```npm run dev```
	* This will start the Express server and React app together and launch the app in a local host

## Scripts
1. init: this script will install deps in both directories, build the frontend and then run the dev server
2. start: script for production
3. client-install: installs deps in the client folder
4. server: starts the node server
5. dev: runs the node server and the frontend server simultaniously for development.

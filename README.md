# home-drive

Implement the cloud in your home, run the server on your local machine, set the device where you want to put the files and in your local network you will be able to manage the files. 
Its purpose is to work like a Drive solution but in your local network.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you start you need to install the following software:

* Node v12.x.x or latest LTS [Download here](https://nodejs.org/es/download/)
* Git latest [Download here](https://git-scm.com/downloads)


### Installing Backend
1. Clone or download the repository
2. Navigate to the folder *home-drive/back/* just created.
3. Install de dependencies
	```
		npm install
	```
4. Go to */src/shared/normalizepath.js* and set the constant *HOME_PATH* to your device route where you want to store the files. It could be a external HDD since your local machine can access to it.
5. start the development server
	```
		npm run dev
	```

### Installing Frontend
1. Clone or download the repository. If you already downloaded it omit this step.
2. Navigate to the folder *home-drive/front/* just created.
3. Install de dependencies
	```
		npm install
	```
4. Go to *src/app/services/path-content.service.ts* and set the variable *baseURL* :
	```
		let  baseURL  =  'http://backend_ip:5000/api/dir';
	```
	Replace *'backend_ip'* with the local IP address of your backend server.
6. start the development server
	```
		npm start
	```
7. Go to *localhost:4200* and look the webpage


## Deployment

## Contributing

## Authors

## License
# notes-api

This is a template repository created with Node JS, express JS, mongoDB

steps to configure:
1. pull the code to your machine
2. run ```npm install```

steps to run mongoDB
1. install mongoDB
2. create a data-directory for mongo in your preferable location
3. name the folder ```mongodb-data```
4. goto the location of the mongo server installed
5. run ```path\to\mongo\...\bin\mongod.exe --dbpath=\path\to\...\mongodb-data\```

configure postman
1. download and install postman
2. create 1 environment - ```Notes API Dev```
3. create one variable: ```url```
4. set the value as: ```localhost:3000```
5. Add a collection: ```notes-api```
6. goto edit option for that collection
7. add Authorization as > Bearer Token
8. name the Token value as {{authToken}}
9. add new request to that collection - Sign Up
10. goto ```tests``` tab and add the below code:
```
if(pm.response.code == 201) {
    pm.environment.set("authToken", pm.response.json().token)
}
```
11. add the same thing for the Login request as well
12. you'are done!

API's available
1. POST - {{url}}/users
```
{
	"name": "Soumyadip Hazra",
	"age": 26,
	"email": "sdh@gmail.com",
	"password": "1234567890"
}
```

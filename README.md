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
1. POST - ```{{url}}/users```
```
{
	"name": "Soumyadip Hazra",
	"age": 26,
	"email": "sdh@gmail.com",
	"password": "1234567890"
}
```
2. POST - ```{{url}}/users/login```
```
{
	"email": "sdh@gmail.com",
	"password": "1234567890"
}
```
3. POST - ```{{url}}/users/logout```
4. GET - ```{{url}}/users/me```
5. PATCH - ```{{url}}/users/me```
6. POST - ```{{url}}/posts```
```
{
	"title": "Taj Mahal",
	"cover": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.1280.960.suffix/1491581548979.jpeg",
	"description": "A mausoleum commissioned for the wife of Mughal Emperor Shah Jahan, the Taj Mahal was built between 1632 and 1648. Considered the most perfect specimen of Muslim art in India, the white marble structure actually represents a number of architectural styles, including Persian, Islamic, Turkish and Indian. The Taj Mahal also encompasses formal gardens of raised pathways, sunken flower beds and a linear reflecting pool."
}
```
7. GET - ```{{url}}/posts```
8. GET - ```{{url}}/posts/5df63fba7d723d0a505b264e```
9. PATCH - ```{{url}}/posts/5df63ec99a5f0700c8e82e39```
```
{
	"cover": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.hgtvcom.616.462.suffix/1491581548990.jpeg"
}
```
10. DELETE - ```{{url}}/posts/5df657be84bc7b09f8df5930```

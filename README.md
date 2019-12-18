# notes-api

This is a template repository created with Node JS, express JS, mongoDB

steps to configure:
1. pull the code to your machine
2. run ```npm install```

### Steps to run mongoDB
----
- install mongoDB
- create a data-directory for mongo in your preferable location
- name the folder ```mongodb-data```
- goto the location of the mongo server installed
- run ```path\to\mongo\...\bin\mongod.exe --dbpath=\path\to\...\mongodb-data\```

### Configure postman
----
- download and install postman
- create 1 environment - ```Notes API Dev```
- create one variable: ```url```
- set the value as: ```localhost:3000```
- Add a collection: ```notes-api```
- goto edit option for that collection
- add Authorization as > Bearer Token
- name the Token value as {{authToken}}
- add new request to that collection - Sign Up
- goto ```tests``` tab and add the below code:
```
if(pm.response.code == 201) {
    pm.environment.set("authToken", pm.response.json().token)
}
```
- add the same thing for the Login request as well
- you'are done!

### API's available
----
1. POST - ```{{url}}/users```
> register an user: all 4 params are important
> password need to be at least of 6 characters long
```
{
	"name": "Soumyadip Hazra",
	"age": 26,
	"email": "sdh@gmail.com",
	"password": "1234567890"
}
```
2. POST - ```{{url}}/users/login```
> login check using email and passowrd
```
{
	"email": "sdh@gmail.com",
	"password": "1234567890"
}
```
3. POST - ```{{url}}/users/logout```
> logout from current device/browser

4. GET - ```{{url}}/users/me```
> get user profile

5. PATCH - ```{{url}}/users/me```
> update profile data

6. POST - ```{{url}}/posts```
> create a new post
```
{
	"title": "Taj Mahal",
	"cover": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.1280.960.suffix/1491581548979.jpeg",
	"description": "A mausoleum commissioned for the wife of Mughal Emperor Shah Jahan, the Taj Mahal was built between 1632 and 1648. Considered the most perfect specimen of Muslim art in India, the white marble structure actually represents a number of architectural styles, including Persian, Islamic, Turkish and Indian. The Taj Mahal also encompasses formal gardens of raised pathways, sunken flower beds and a linear reflecting pool."
}
```
7. GET - ```{{url}}/posts```
> get all posts written by the logged-in user

8. GET - ```{{url}}/posts/5df63fba7d723d0a505b264e```

9. PATCH - ```{{url}}/posts/5df63ec99a5f0700c8e82e39```
```
{
	"cover": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.hgtvcom.616.462.suffix/1491581548990.jpeg"
}
```

10. DELETE - ```{{url}}/posts/5df657be84bc7b09f8df5930```

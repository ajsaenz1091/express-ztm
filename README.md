![Express.js](https://th.bing.com/th/id/R.08b7f631b8ae989e2b8d1bda66d3168a?rik=L5%2ftOazF7nQGAQ&riu=http%3a%2f%2fcharantechnologies.com%2fimages%2fcourses%2fexpressjs.png&ehk=i%2bBGgc8QBhKzJkExK4gz1xcOGHo5MLtoyzEllxuUiAc%3d&risl=&pid=ImgRaw&r=0)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 

![GitHub language count](https://img.shields.io/github/languages/count/ajsaenz1091/express-ztm) ![Profile View Counter](https://komarev.com/ghpvc/?username=ajsaenz1091)

## About
 I created this application to practice NodeJS and ExpressJS. The app is organized using the MVC model,
 it renders templates using a template engine called hbs(Handlebars.js).
 
 The main concepts practiced in this app were:
 
 1. How to create an Express.js server
 2. Middleware 
 3. Routing in Express.js
 4. The MVC design pattern
 5. Server side rendering
 6. Separation of concerns
 7. RESTful API convention
 
 ## Run locally 
 
 In order to run this app locally, make sure you clone this repository in your local machine. Instructions to [clone a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). Once you cloned the repository, navigate to the project folder and download the dependencies (all the packages listed in the package.json file necessary for the app to run) by running: `npm install`. At this point the app should be ready to run, which you can do with the following command `npm start`.

 You'll know the server is running when you see this in your terminal: 

 <img src="public/images/server-output.png" height="100">

 ## Testing endpoints

 Once you have the server up and running, you can visit [localhost](http://localhost:3000/). You can make two types of request, GET and POST.
 
  ### GET
  
  [get-friends](http://localhost:3000/friends)

   <img src="public/images/get-friends.png" height="500">
  
  [get-friend](http://localhost:3000/friends/1) pass a number from 0 to 3 to get a different friend

   <img src="public/images/get-friend.png" height="200">
  
  [get-messages](http://localhost:3000/messages)

   <img src="public/images/get-messages.png" height="200">
  
  ### POST
  
  To make POST requests I use a tool called Postman

  #### Post friend 

  <img src="public/images/post-friends.png" height="250">

  <img src="public/images/post-friends-response.png" height="180">

  #### Post messages

  <img src="public/images/post-messages.png" height="400">

  Again, this is a backend application so the views rendered to the client(front-end) are very simple.
  
  
  
 
 
 
 

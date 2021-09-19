# 📚 Bookshelfly
Bookshelfy is an open-source, remote library access application. Users can access their issues from anywhere, anytime! Being a full stack application, users can register, login and even add their own books to the library as well!

# 🥳 Features
- ✅ New users can register for Bookshelfy
- ✅ Allows users to login and logout
- ✅ Allows users to browse the public library
- ✅ Users can issue books from the library
- ✅ Users can add books to their bookshelf
- ✅ Allows users to return their issued books
- ✅ Update the number of available and issued books in the library for transparency
- ✅ Users shouldn't be able to view other's bookshelves
- ✅ Creates a custom route for each user associated with their userID
- ✅ Doesn't allow to access library without signing in
- ✅ Doesn't allow adding same books twice to the library
- ✅ Doesn't allow to submit new book without all information

# 🎥 Demo

# 🧐 What's the stack?
- Frontend: Basic HTML, CSS & JavaScript. I have used jQuery & Bootstrap for keeping the library simple and responsive.
- Backend: Node.js & Express.js for creating new routes, handling GET and POST requests, and performing CRUD operations on databases.
- Database: I have used MongoDB Atlas for remote database, and Mongoose for modelling the application data.
- Two schemas & collections, one for data of users, and another for public library.
- Deployed on Heroku! - https://try-bookshelfly.herokuapp.com

# 📷 Screenshots
![image](https://user-images.githubusercontent.com/70312106/133935324-d7f88ac6-39ad-4ea6-a9f0-fbe53e2376ed.png)

<hr>

![image](https://user-images.githubusercontent.com/70312106/133935327-3a85c225-0d37-4109-8fec-ade4bf4c478d.png)

<hr>

![image](https://user-images.githubusercontent.com/70312106/133935331-b09e6f4c-cd62-47e6-bdb1-9996148a2b20.png)

<hr>

![image](https://user-images.githubusercontent.com/70312106/133935333-00423f16-75e4-45b0-81d5-4d47354a8f6f.png)

<hr>

![image](https://user-images.githubusercontent.com/70312106/133935335-2b27f278-e581-41ff-b114-9e835aed29e7.png)



# 🤔 How to use this?
- You can access all cool features of Bookshelfly here: https://try-bookshelfly.herokuapp.com
- For running the app locally on your system, follow these steps: 
  -  Clone the project repository: `git clone https://github.com/guptasajal411/bookshelfly.git`
  -  Move to the project directory: `cd booshelfly`
  -  Install dependencies for Bookshelfly with NPM: `npm install`
  -  Create a new `.env` file in the project folder for credentials to the MongoDB Atlas database, with variables: `usernameMongoDB` & `password`
  -  Run `npm start` to kickstart the application
  -  Go to `localhost:3000` to access Bookshelfly! 🥳

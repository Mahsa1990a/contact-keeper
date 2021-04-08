# contact-keeper

> Full stack MERN (MongoDB, Express, React and Node) "Contact Manager" app with React hooks, context & JWT authentication and deployed by Heroku.

> You can Register, Login and Manage(Add, Delete, Edit, Filter) your Contacts.

To Watch Deployed App Go To :
[https://serene-taiga-86881.herokuapp.com/login/](https://serene-taiga-86881.herokuapp.com/login)

## Final Product :

### Homepage / Login

!["Home page / Login"](https://github.com/Mahsa1990a/contact-keeper/blob/main/client/public/screenShot/Home.png?raw=true)

### Register

!["Register"](https://github.com/Mahsa1990a/contact-keeper/blob/main/client/public/screenShot/Register.png?raw=true)

### Contact

!["Contact page"](https://github.com/Mahsa1990a/contact-keeper/blob/main/client/public/screenShot/Contact.png?raw=true)

### Edit & Delete

!["Edit & Delete"](https://github.com/Mahsa1990a/contact-keeper/blob/main/client/public/screenShot/Edit.png?raw=true)

### Filter

!["Filter"](https://github.com/Mahsa1990a/contact-keeper/blob/main/client/public/screenShot/Filter.png?raw=true)

## Technologies

- Express Backend API
- JWT(JSON Web Token)
- MongoDB / Mongoose
- Password Encryption
- React Hooks
- Context API(Store JWT, etc)
- Route Protection
- Heroku

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```

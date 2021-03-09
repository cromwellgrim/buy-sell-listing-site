# Buy-Sell-Listing-Website

## Project General Requirements

Goal:
- [ ] Build a web app from start to finish using the tech and approaches learned to date
- [ ] Turn requirements into a working product
- [ ] Practice architecting an app in terms of UI/UX, Routes/API and Database
- [ ] Manage a multi-developer project with git
- [ ] Simulate the working world where you do not always get to completely cherry pick your team,
      stack or product features
- [ ] Practice demoing an app to help prepare for the final project and employer interviews
- [ ] Stack Requirements

Our project will use:
- [ ] ES6 for server-side (NodeJS) code
- [ ] NodeJS
- [ ] Express
- [ ] RESTful routes
- [ ] One or more CSS or UI "framework"s:
- [ ] jQuery
- [ ] A CSS preprocessor such as SASS, Stylus, or PostCSS for styling -- or CSS Custom properties and
      no CSS preprocessor
- [ ] PostgreSQL and pg (with promises) for DBMS
- [ ] git for version control

Optional Requirements:
- [ ] SPA (Single-Page Application) Behaviour
- [ ] Hosting, such as heroku, netlify, github pages, AWS, or Azure

### Project Specific Requirements
Option 8: Buy/Sell Listing Website
- [ ] An app where you can put different types of things up for sale. You can pick a specific niche of
      items to sell for the app (a cars site, a shoes site, etc). This lets buyers find the items they are looking for quickly, and easily contact sellers.
- [ ] stretch: listings will have a timestamp of when the listing was posted

Users (buyers) can:
- [ ] As a user, I want to have a profile with my id # and name associated with my account because I want the site to remember me
- [ ] As a user, I want to have links to a search, and my favourite items in my navbar because I want to be able to
      access them quickly and easily
- [ ] As a user, I want to see featured items on the main feed because I want to see specific items in my interests
- [ ] As a user, I want to filter my search by price and make/model of aircraft because I only want to see certain aircraft in my budget
- [ ] As a user, I want to favourite items because I want to check up on them later
- [ ] As a user, I want to buy items by contacting the seller directly because it makes it a clearer purchase
- [ ] As a user, I want to send messages to the seller because I want to be able to negotiate for my purchase
- [ ] stretch: As a user, I want to be able to rate sellers because I want to know who is trustworthy and good to deal with
- [ ] stretch: As a user, I want the ability to become an admin by clicking a premium user button on my profile because I want to sell more things

Admins (sellers) can:
- [ ] As an admin, I want to post items which can be seen by others
- [ ] As an admin, I want to remove items from the site if it is no longer for sale or any other reason
- [ ] As an admin, I want to mark sold items as SOLD!
- [ ] As an admin, I want to send a message to the user about sale conditions app, email on negotiations in buying the
      said item

### Pick out all the nouns
* nouns === tables
* users [id, name, is_admin]
* favorites [id, user_id, listing_id]
* listings [id, seller_id, title, description, price, thumbnail_photo, year, make, model]
* comments [ids, buyer_id, seller_id, text]
* create the ERD

### Routes
* describe how we access the resource

RESTful

Browse  GET  /
Read    GET  /:id
Edit    POST /mylistings/:id
Add     POST /:id 
Delete  POST /mylistings/:id
<!-- GET/POST reference ejs files in server file. what ejs files will we have? -->
### MVP
* Minimal Viable Product
* Minimum Viable Demo MVD
* If you don't show it, don't build it

### User Interface
* Mockup/wireframe
* We are NOT a web design school
* STEAL
* diagrams.net, moqups, balsamiq

### User Login/Registration
* DON'T DO IT

```js
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, SCSS
* Back End: Node, Express, Postgres

### SPA vs Multi-page
* these are not mutually exclusive

### Git
* use branches
* do not code on master/main
* pull request
* merge conflicts => I hope you have 'em

### Splitting up the work
* Horizontal = all members are working on the same layer
* Vertical = members are working on different layers
* Pair Programming
* Do what you are weakest at

### Communication
* Just do it

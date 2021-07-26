# E-commerce Back End

![license](https://img.shields.io/badge/license-MIT-blue?style=plastic)


## Description
  
E-commerce Back End is a collection of REST API requests to work with data in database. The app has API to get, create, update or remove the data.
  
  
## Table of Contents

* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [License](#license)
* [Walkthrough Video](#walkthrough-video)

## Installation Instructions

Precondition steps: Install and configure a database server.

Installation steps:
1) Clone the code from this repository.
2) Run "npm install" in the console from the app directory.
3) Connect to a database server.
4) Run "source db/schema.sql" to create a schema.


## Usage Information

Run "node start" in the console from the app directory to start the app.
Note: Change "force: false" to "force: true" in "sequelize.sync()" in "server.js" for the first run. It is requered to create the models in a new database.

Run "node run seed" in the console from the app directory to fill the database with examples. 

Examples of the REST API requests can be found at this file: misc\requests_examples.json. For example, the data may be imported to the "Insomnia" app.


## License

MIT


## Walkthrough Video

[Link to the video - Part1](https://drive.google.com/file/d/1C9anwNRbfiOWkSgenvy9UKpU9U0XmU1p/view) 

[Link to the video - Part2](https://drive.google.com/file/d/1n7HVInsJwpicCapscaUtoda5P1icfWYg/view)


## Questions

GitHub profile: https://github.com/alexgorshkov02

In case of additional questions, please reach out to me at alexgorshkov0290@gmail.com

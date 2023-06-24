[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# zaingova-cms-tech-blog

## Description

This is a fullstack tech blog coded in javascript, using handlebars, express, sequelize mainly. It also utilizes a handful of other NPM packages which I will lsit below.

Users have the option to make a new account, log into existing ones, and once theyve done that they can add comments to other people's blog posts or create their own. They also have the option to delete/edit existing blog posts.

## Visuals

![login](/public/assets/login.png)
![allposts](/public/assets/allposts.png)
![dashboard](/public/assets/dashboard.png)

## Usage

Users can login if they already have an acccount or they can make a new one. Without logging in, they can view existing blog posts and comments but they cannot post their own. Once logged in, a timer starts and when it ends the user will automatically be logged out. They will be able to do everything they could while logged in, as well as create their own posts and comments. 

Users can also edit or delete existing posts they have made.

## Technologies Used

### NPM Packages

- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Connect Session Store](https://www.npmjs.com/package/connect-session-sequelize)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Express-Session](https://www.npmjs.com/package/express-session)
- [MySQL2](https://www.npmjs.com/package/mysql2)

### CSS Libraries

- [Bootstrap CSS](https://getbootstrap.com/)

### Other Resources

- [Google Fonts](https://fonts.google.com/)
- [Material Icons/Symbols (Google)](https://fonts.google.com/icons)

## Lisence 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
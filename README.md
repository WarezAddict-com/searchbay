# SearchBay
A Twitter Bootstrap template for a torrent website

#### About
Simple Twitter Bootstrap template for a torrent search engine website 

#### Made Using
- **Bootstrap 4.x** (Latest) - https://getbootstrap.com
- **Font Awesome 4.7.x** (Latest) - https://fontawesome.io
- **jQuery 3.2.1** (Latest) - https://jquery.com

#### Changes
- Bootstrap, Font Awesome, and jQuery now uses CDN URLs. You don't host these files on your server or use bandwidth
- Custom .css and .js for personal customizations
- Added some important META tags (google-site-verification, robots, etc)
- Added FavIcons, tons of them! iOS, Android, Android Chrome, Windows Metro, Safari, IE 10, IE 11, Edge etc etc...
- Added Google Analytics JS Code
- Added "(Smooth) Scroll back to the top of the page" link at the bottom of page
- More to come!

#### Important
- Find google-site-verification meta tag and change content="XXXXX" to your unique number Google gives you
- Find Google Analytics JS code and change ga('create', 'UA-XXXXXXXX-X', 'auto'); to your unique number

#### Requirements
- Nginx or Apache Webserver (Nginx is recommended)
- PHP 7.X

##### Optional
- Composer
- NPM
- NodeJS

#### Howto
**Minify CSS & JS:**
- cd to main root directory
- npm install
- then, **gulp minify-js** to minify your custom.js file
- and **gulp minify-css** to minify your custom.css file
- or just type **gulp** to do both!
- Minified versions are saved as custom.min.js and custom.min.css

---------

##### Credits
Original design and code by [tiagoanleite](https://github.com/tiagoanleite/searchbay)

I only updated it to the latest Bootstrap 4.x and added a few small things... Nothing major!

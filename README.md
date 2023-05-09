# Fetching Data from League of Legends API
***

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
### General Info
***
Before I started this project, there was only one feature that I wished I could access easily inside the game. I just
wanted to be able to see the list of all the champions with which I already got the reward chest. After looking at the
documentation of the API, I saw that it was possible and that much more information were available. So I decided
to take advantages of that by doing this hobby project by using Vue.js which I got to appreciate a lot lately.
## Technologies
***
A list of technologies used within the project:
* [Vue.js](https://vuejs.org/): Version 3.0.0
* [Vuetify](https://vuetifyjs.com/): Version 3.1.5
* [Axios](https://axios-http.com): Version 1.3.2
* [vue-responsive-video-background-player](https://www.npmjs.com/package/vue-responsive-video-background-player): Version 2.3.1
## Installation
***
How to get a valid API key
* [Official Documentation](https://developer.riotgames.com/docs/portal)
* You must log in with your Riot Games account by clicking on the button in the top right corner.  [](https://developer.riotgames.com/)
* Create one if you don't already have one.
* Once you are logged in, you will be provided an API key that you must copy and paste in the appropriate variable in .env file (VUE_APP_API_LEAGUE_OF_LEGENDS_KEY)
* This API key is just a Development key. It has to be regenerated every 24 hours. Requests are also limited to 20 requests every second or 100 requests every 2 minutes
***
How to start this project on your local machine
```
$ git clone the repo
$ cd ../path/to/the/file
$ npm install (then past your API KEY in the variable VUE_APP_API_LEAGUE_OF_LEGENDS_KEY in .env file)
$ npm start
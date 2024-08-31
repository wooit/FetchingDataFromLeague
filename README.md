# Fetching Data from League of Legends API
***
#Demo presentation for each section (after API changes)

[https://github.com/user-attachments/assets/4f961a22-b329-47ec-94be-a5a7fb6ea838](https://private-user-images.githubusercontent.com/67559188/363412717-4f961a22-b329-47ec-94be-a5a7fb6ea838.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjUxMTE3MjYsIm5iZiI6MTcyNTExMTQyNiwicGF0aCI6Ii82NzU1OTE4OC8zNjM0MTI3MTctNGY5NjFhMjItYjMyOS00N2VjLTk0YmUtYTVhN2ZiNmVhODM4Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODMxVDEzMzcwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFiZGQ2MjE5MWJhODM0OTUyOTU1ZmMyMjVjYzIzNjMxNzFiNDMxN2I5ZDNiY2MzMzQyMWE1YTM3ZDI3MzVlYWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5ldkSxzVsRGmBBGFs_n5H9t7mvQJVzqGd_oYA0sKOvo)

https://github.com/user-attachments/assets/97b103ef-966e-42a6-90f7-1cf1494b9473

https://github.com/user-attachments/assets/ce37faa4-fc3e-4c7d-abf1-97260dff73d4

https://github.com/user-attachments/assets/8a03b478-7863-4023-8b90-9cd45f0b943b

https://github.com/user-attachments/assets/47f96a3e-aa9f-4055-add2-4c56613f59aa


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

IMPORTANT: This project is now depreciated. Since January 2024, many routes have changed (for the worst).
Current documentation of the API is out of date. Some information are not provided anymore making some of my features obsolete.
It's not possible to get data from players as easily as before. A deep redesign of my interface is necessary in order to make it 
work as before.
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
$ npm run serve
```
***
### Additional infos for testing purpose
When going to the "Summoner section", you can use the following username **G2 Bane** and select the region **Western-Europe** in order to test this feature if you don't know anyone playing this game.

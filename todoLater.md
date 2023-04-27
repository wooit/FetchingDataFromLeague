Things to fix in the future:

1- All abilities video don't have the same url link. 99% of them end with '.webm' but I found at least one with '.mp4'

2- I need to remove all inline css (especially in DisplaySkins component)

3- I need pagination in ChallengerRanking component if I want to fetch icon summoner (otherwise error 429 too many requests)

4- I need to remove console.log(error) and show error message instead

5- I need to implement spinner ou something similar

6- I need to refactor components ChampionMastery and ChestObtained, they are very similar (just one filter difference + text info)

7- I need to check if i should move my API call to the store??? 

8- I need to implement an authentication system for practicing purpose (plus some features for logged users)


CSS ideas: 

1- On champion page for example, I could have several <a> that redirect to the selected element on the page:
    info / skill / skins

3- I need to implement responsive design (mobile phone only with media query). (check mydevice.io => calculate 'usual' size for mobile device). Then i will set a media query min width to that 'usual' size

4- I want to display the lore of the champions letter by letter (code already implemented in side project), but I still need a nice effect

5- I need to add 4 more animated background image, 1 per section on home page

Documentation:

1- Make a doc file

2- Explain how to get/refresh API key and where to do it

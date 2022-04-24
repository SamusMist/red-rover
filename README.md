# 🚀 Red Rover 🚀
Ever wonder what a day on Mars looks like?
With <strong>[Red Rover]()</strong> you can now do just that. On the landing page, you will see four of NASA's Mars rovers: Spirit, Opportunity, Perseverance, and Curiosity. Once you have selected the rover's images that you would like to see, you will be prompted to select a date. But be careful, rovers take days off to charge, and some  of the rovers missions are complete.

Opportunity was lost in a dust storm in 2018 and its twin Spirit passed away in 2010. Both were launched in 2004. Fun fact, did you know that the missions of Spirit and Opportunity were expect to be 100 sols? Opportunity survived 14 years and 5,110 sols!

Anyway, once you select a rover and a date you can hit that submit button and see all of the groundbreaking images that your rover took on that day! Don't want to see sky shots? Don't like some of the images? Upon hover, each image will display which camera on the rover took the image, and the option to remove the image on click. Enjoy your days on Mars, who knows what you will find? 👽


![redRover](https://user-images.githubusercontent.com/89484102/164996738-c939708f-2c60-4fca-8fe8-ff718ef6721c.gif)

### Technologies
- React.js
- React Router
- CSS
- HTML
- Cypress
- RESTful APIs
- Figma

### Code Architecture
  - __src__
    - __Components__
      - __App__
        - [App.css](src/Components/App/App.css)
        - [App.js](src/Components/App/App.js)
      - __Error__
        - [Error.css](src/Components/Error/Error.css)
        - [Error.js](src/components/Error/Error.js)
        - [ErrorPage.js](src/components/Error/ErrorPage.js)
      - __Header__
        - [Header.css](src/components/Header/Header.css)
        - [Header.js](src/components/Header/Header.js)
      - __RoverCard__
        - [RoverCard.css](src/components/RoverCard/RoverCard.css)
        - [RoverCard.js](src/components/RoverCard/RoverCard.js)
      - __RoverDisplay__
        - [RoverDisplay.css](src/components/RoverDisplay/RoverDisplay.css)
        - [RoverDisplay.js](src/components/RoverDisplay/RoverDisplay.js)
      - __Rovers__
        - [Rovers.css](src/components/Rovers/Rovers.css)
        - [Rovers.js](src/components/Rovers/Rovers.js)
    - [apiCalls.js](src/apiCalls.js)
    - [index.css](src/index.css)
    - [index.js](src/index.js)

To view the code:
- Clone down the Repository
- cd into repository
- run `npm install`
- run `npm start`
- webpage will open in separate browser

### Features
- As a user: 
- you may select one of four Mars rovers
- you may select a specific date
- you may submit your inputs to view photos from the specified rover for that day
- once you reach the images page you may delete images that you do not wish to see
- you can click the home button to go back to the main page
- Error handling

### Future implementation
- An about page that gives the user a wikipedia style description of each rover and their mission
- Add functionality and display for the Ingenuity rover when NASA updates the api

### Created by
- [Sam Mistele](https://github.com/SamusMist)

# Application

## FriendFinder

## Description

Anwser a survey of 10 questions to find someone of similar interests - a new friend

## Getting Started

### Prerequsites

1. Node.js must be installed (https://nodejs.org/en/download/)

### Installation

1. Clone repository friendfinder from https://github.com/remrobem/FriendFinder
1. Open a terminal session for the directory where the application was cloned to
1. run *npm install* to install the dependencies
1. run *node server.js*
1. In a browser, go to localhost:8081 or the port number provided after you run the *node server.js* command

## Using the Application

The application consist of 2 pages:

1. Home
    1. the primary action is to go to the survey by selecting the *Go To Survey* button
    1. Additionally, 
        1. *API Friends List* is available to display the available friends in a JSON format
        1. *GitHub Repo* will go to the GitHub page for this project
![Alt text](/readme_images/home.png?raw=true "Home Page")       

1. Survey
    1. Add your name and a link to a nice iamage of you to be shared
    1. Answers all 10 survey questions
    1. Select the *Submit* button to find a friend that closely matches your survey responses
    1. The friends name and image are presented in a window
![Alt text](/readme_images/survey.png?raw=true "Survey Page")   
![Alt text](/readme_images/modal.png?raw=true "Friend search result")   


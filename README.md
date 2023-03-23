#  Note Taker

## Description

 An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. 

## Installation
To install this application, begin by initiating an npm i to install dependencies that include the express.js package. Next, create a gitignore and be sure to, at the very least, include /node_modules and .DS_Store/. After extracting all other necessary files into your repo, open the integrated terminal and run the command 'node server.js' in order to instantiate a server that listens at the specified port number. From here, you'll be able to use the application after typing in 'localhost:3001' into your browser's search bar. 

## Usage 
Begin by clicking on the 'Get Started' button located towards the center of the landing page. Click on the 'Note Title' section and type a title for this note and make sure to include a description by typing your text in the 'Note Text' section. You can save these notes by clicking on the floppy disk icon in the top right corner of the page. This will add any notes you create to the left-hand side column of the page. To display any of these notes back to the right-hand side of the page, simply click anywhere inside of that note's box. Once you have completed the task from that note, you can delete it from your list by clicking on the trash can icon within that box. 

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Deployment Link 
https://antonios-note-taker.herokuapp.com/

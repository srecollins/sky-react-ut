# Sky Unattended React Test

A solution submitted for the Sky Unattended React Test for the API Search interface scenario.

Please run 

```
yarn add
```

to install or update necessary dependencies before running the app.


# NOTES
* With more time I would have liked to:
    * Add better/more styling
    * Utilise better error handling, especially for API requests (for bad status codes for example)
    * Add timeout to request to prevent hanging requests
    * Implement an active state hook for pagination to highlight the current page that a user is on
    * Implement the feature to naviagte back to a previous query when the user presses their back browser button
        * I would have to decide whether I implemented this by firing off the request again with the previous search query, or to store the results of the previous query and load those results back in. Both arguably have pros and cons, where sending off more requests to fetch from the end-point isn't ideal, but in the case of large result sets it could be a better approach than storing the full result set to re-load in. 
    * Split the request function out into its own component to separate it from App
    * Add accessbility - aria labels etc.
* I chose to delete parts of the create-react-app boilerplate in src folder to uphold folder structure a bit


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



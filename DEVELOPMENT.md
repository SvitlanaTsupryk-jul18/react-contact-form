# Development Guide

This document provides a guide for setting up and developing the React project deployed on GitHub Pages.

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5174/react-contact-form](http://localhost:5174/react-contact-form) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run deploy`

To deploy a React application to GitHub Pages run the deploy script to publish the build to GitHub Pages.

 # You can see page on --> [Contact form](https://svitlanatsupryk-jul18.github.io/react-contact-form/contact)


## Setting Up the Project

1. **Clone the Repository**:

   ```
   git clone https://github.com/SvitlanaTsupryk-jul18/react-contact-form.git
   cd react-contact-form
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Start the Development Server**:

   ```
   npm run dev
   ```

   This will start the development server and open the application in your default web browser. The server runs on `http://localhost:5174/react-contact-form` by default.


## Building the Project

To create a production build of the project, run:

```
npm run build
```

This will create an optimized build in the `build/` directory.

## Deploying to GitHub Pages

The project is set up to deploy to GitHub Pages. Follow these steps to deploy:

1. **Change the `homepage` field to `package.json`**:

   ```json
   {
     "name": "your-app-name",
     "version": "1.0.0",
     "private": true,
     "homepage": "https://yourusername.github.io/your-repo-name",
     ...
   }
   ```

2. **Deploy the Project**:

   ```
   npm run deploy
   ```

This will build the project and deploy it to the `gh-pages` branch of your repository. Your application will be accessible at `https://yourusername.github.io/your-repo-name`.

import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL_STRAPI_RENDER,
});

/**
 * Step1 : add this project to github.
 * Step2: implement features like Auth0 with Profile, Login, Logout, Quantity.
 * Step3: push changes to github, with seperate commits.
 * Step4: host this on render or vercel.
 */

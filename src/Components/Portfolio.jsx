/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Screenshot (108).png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pseudo Blog posts, MERN Stack app",
    description:
      "Made with Next.js, tailwind css, shadcn; for the frontend and express, mongoose, mongoDB; for the backend, in typescript. It is a posts app, similar to twitter/x, where you need to signup/login to write posts, can be updated and deleted, alongwith the like and comments features, available beneath the post.",
    url: "https://github.com/Pancham555/banao-mern-task-2",
  },
  {
    title: "Ecommerce web app with strapi",
    description:
      "Made and e-commerce site with strapi, postgresql, cloudinary in the backend, Next.js, tailwind css in the frontend.",
    url: "https://drip-vault.vercel.app/",
  },
  {
    title: "My Blog Site",
    description:
      "Created with Next.Js, tailwind css and MDX. Here, I post blogs about my current learnings.",
    url: "https://www.zenithstech.com",
  },
  {
    title: "React Native News app",
    description:
      "Developed a React Native news app that fetches data from an API and presents it to users. The app also features an integrated weather viewer and a straightforward note-taking functionality.",
    url: "https://drive.google.com/file/d/1fn0xeTFufhmh5DCpU1_znMSmHoiZe8Ve/view",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

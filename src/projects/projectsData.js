import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";

const projects = {
  1: {
    title: "SNOP Demand Planning & Operations",
    image: projectOne,
    description: (
      <>
        <p>
        As a Developer for S&OP Demand Planning, I design and create the Demand Planning Screen to showcase historical and forecast data metrics from a user's perspective. I utilize Redux for efficient data management, integrate Rest API from .Net using Saga files for backend interaction, implement Apex charts Library for visual representation of data in graph formats, and employ the Mui library for crafting various UI elements.
        </p>
      </>
    ),
  },
  2: {
    title: "Movie Ticket Booking App",
    image: projectTwo,
    description: (
      <>
        <p>
        Developed a Movie Ticket Booking System with the objective of providing users the ability to browse movies, modify profiles, and reserve tickets, while administrators can manage users and control movie details. Utilized Java and Spring Boot for the comprehensive system, ensuring data consistency with MySQL databases. Collaborated with a team to deliver a user-friendly interface through Angular, encompassing admin functionalities such as movie management, user information viewing, and user blocking.
        </p>
      </>
    ),
    github:"https://github.com/Murugan2207/MovieTicketSpring-API",
  },

};

export default projects;

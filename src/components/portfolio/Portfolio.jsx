import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Netflix Clone",
    img: "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
    desc: "Created a Subscription video on-demand over the-top streaming service working in a team of 2.Provides Anime series, films, television shows produced by all companies.Tech used – HTML, CSS, JAVASCRIPT, REACTJS, NODEJS, EXPRESSJS, REDUX, API and MONGODB",
    link:"https://netflix-mern-project.netlify.app/"
  },
  {
    id: 2,
    title: "Daily Doze",
    img: "./public/live.jpg",
    desc: "Application which offer the instant & latest news about public, political, social, sports events.Tech used — HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACTJS, and API",
    link:"https://daily-doze.netlify.app/"
  },
  {
    id: 3,
    title: "I Notebook",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDqghdWbgZSBHvlmo-ZoNpsUvtR3I66rDv1q9lAB5nB6Rlw4455mk8UqjJWZrIUXl2-w&usqp=CAU",
    desc: "A short notes app can be used for quick jottings, to-do lists, shopping lists, meeting notes, bookmarking, brainstorming, journaling, storing passwords, collaboration, and organization. ",
    link:"https://main--my-inotebooks.netlify.app/"
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} alt="" target="_blank">
            <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

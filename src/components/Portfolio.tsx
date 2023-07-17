import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiCodeberg } from 'react-icons/si';
import { FaKaggle } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import styles from './Portfolio.module.css';
import FREEQ from '../FREEQ.png';

const Portfolio: React.FC = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.portfolio} ${isDarkMode ? '' : styles.lightMode}`}>
        
      <button className={styles.toggleButton} onClick={handleToggleMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <header className={styles.header}>My Portfolio</header>
      <section className={styles.nameSection}>
        <div className={styles.name}>Christian Mauro
        </div>

      </section>



        <section className={styles.aboutSection}>
            <h3>
                A collection of some things I've made
            </h3>
        </section>

      <section className={styles.projects}>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Cards AAC</h3>
          <p className={styles.projectDescription}>
            Using React Native, this augmentative alternative communication app allows users to say words based on symbols that they press on.
          </p>
          <a 
          className={styles.link}
          href='https://snack.expo.dev/@christianmauro/067f17'>Try the demo on Snack!
          </a>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>FREEQ</h3>
          <p className={styles.projectDescription}>
            A free multi-band audio equalizer standalone plugin written
            in C++ using the JUCE framework.
          </p>
          <img 
          className= {styles.image}
          src={FREEQ} 
          alt="FREEQ"
          />
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Portfolio Website</h3>
          <p className={styles.projectDescription}>
            The source code for this website written in TypeScript with React.js.
          </p>
          <a 
          className={styles.link}
          href='https://github.com/christian-j-mauro/portfolio'>See the code here.
          </a>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>Rest API</h3>
          <p className={styles.projectDescription}>
            A rest CRUD application that shows a list of ingredients and a simple API that prints text.
          </p>
        </div>

      </section>

              <div>
        <a
        className={styles.github}
        href='https://github.com/christian-j-mauro'
        ><BsGithub/>
        </a>
        <a
        className={styles.codeberg}
        href='https://codeberg.org/christian-j-mauro'
        ><SiCodeberg/>
        </a>
        <a
        className={styles.kaggle}
        href='https://www.kaggle.com/christianmauro'
        ><FaKaggle/>
        </a>
        <a
        className={styles.linkedin}
        href='https://www.linkedin.com/in/christian-mauro-4a733b1b5/'
        ><BsLinkedin/>
        </a>
        </div>
    </div>
  );
};

export default Portfolio;

import { getImageUrl } from "../../util";
import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer className={styles.container} id="Contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email.icon" />
          <a href="mailto:kumarakash7004@gmail.com">kumarakash7004@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email.icon" />
          <a href="https://www.linkedin.com/in/akash-kumar-1b4561255/">
            https://www.linkedin.com/in/akash-kumar-1b4561255/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email.icon" />
          <a href="https://github.com/Ak7061">https://github.com/Ak7061</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

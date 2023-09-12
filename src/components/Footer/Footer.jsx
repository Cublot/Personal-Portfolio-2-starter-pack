import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:tamiloresonusi@gmail.com">Contacting Me</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Lekki, Lagos, NIGERIA</p>
          </div>
          <ul className={css.menu}>
            <li><a href="">LinkedIN</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Github</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

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
            <li><a href="https://www.linkedin.com/in/cublots91b29231/">LinkedIN</a></li>
            <li><a href="https://instagram.com/cublot_designs?igshid=YTQwZjQ0NmI0OA==">Instagram</a></li>
            <li><a href="https://github.com/Cublot">Github</a></li>
            <li><a href="https://twitter.com/_Dhanny07">Twitter</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

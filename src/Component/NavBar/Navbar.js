import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import './Navbar.scss';

const Navbar = () => {

  const navLinks = [ "home", "about", "newblog", "admin" ];
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__nav'>
      <div className='app__nav-logo'>
        <h1>CarBlog</h1>
      </div>
      <ul className='app__nav-lists app__flex'>
        {navLinks.map((link, index) => (
          <li key={link+index} className='app__flex p-text' id='guy'>
            <Link to={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="app__nav-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((list) => (
                <li key={list}>
                  <Link to={`/${list}`} onClick={() => setToggle(false)}>{list}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
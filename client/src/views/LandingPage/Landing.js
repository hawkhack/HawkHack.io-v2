import React, { useContext } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';

import landingPageStyles from '../../assets/jss/landingPageStyles';
import image from '../../assets/img/msubackground-1.png';

import Hero from './Sections/Hero';
import About from './Sections/About';
import Faq from './Sections/Faq';
import Final from './Sections/Final';
import Info from './Sections/Info';
import Sponsors from './Sections/Sponsors';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Parallax from '../../components/Parallax/Parallax';

import { UserContext } from '../../context/store'

const Landing = () => {
  // eslint-disable-next-line
  const [{ user }, handleUser] = useContext(UserContext);
  const classes = landingPageStyles();

  return (
    <>
      <CssBaseline />
      <NavBar
        route={user.loggedIn ? "user" : "home"}
      />
      <Parallax filter image={image}>
        <div className={classes.container}>
          <Hero />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <About />
          <Info />
          <Sponsors />
          <Faq />
          <Final />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;

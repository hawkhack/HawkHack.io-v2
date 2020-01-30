import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import footerStyles from '../../assets/styles/footerStyles';

const Footer = () => {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/msucomputerclub/"
                className={classes.block}
                target=""
              >
                      Facebook
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/msucomputerclub/"
                className={classes.block}
                target=""
              >
                Instagram
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy;
          {' '}
          {1900 + new Date().getYear()}
          {' '}
          <a
            href="https://orgsync.com/160607/chapter"
            className={classes.rightText}
            target=""
          >
            MSU Computer Club
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

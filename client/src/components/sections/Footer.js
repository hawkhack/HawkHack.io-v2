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
                href="www.google.com"
                className={classes.block}
                target="_blank"
              >
                      Facebook
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="www.google.com"
                className={classes.block}
                target="_blank"
              >
                      Instagram
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="www.google.com"
                className={classes.block}
                target="_blank"
              >
                      Twitter
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="www.google.com"
                className={classes.block}
                target="_blank"
              >
                      Website
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
            href="www.google.com"
            className={classes.rightText}
            target="_blank"
          >
            MSU Computer Club
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

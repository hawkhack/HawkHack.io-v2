import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import footerStyles from '../../assets/jss/footerStyles';

const Footer = () => {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/computerclubmsu/"
                className={classes.block}
                rel="noopener noreferrer"
                target="_blank"
              >
                      Facebook
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/msucomputerclub/"
                className={classes.block}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.github.com/hawkhack/"
                className={classes.block}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
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
            MSU ACM Computer Club
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

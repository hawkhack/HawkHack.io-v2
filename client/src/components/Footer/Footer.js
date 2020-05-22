import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import footerStyles from "assets/jss/footerStyles";

const Footer = () => {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Button
            href={"https://www.facebook.com/computerclubmsu/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook
          </Button>
          <Button
            href={"https://www.instagram.com/msucomputerclub/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </Button>
          <Button
            href={"https://www.github.com/hawkhack/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.wrapper}>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://orgsync.com/160607/chapter"
              className={classes.rightText}
              rel="noopener noreferrer"
              target="_blank"
            >
              MSU ACM Computer Club
            </a>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

// <footer className={classes.footer}>
//   <div className={classes.container}>
//     <div className={classes.left}>
//       <List className={classes.list}>
//         <ListItem className={classes.inlineBlock}>
//           <a
//             href="https://www.facebook.com/computerclubmsu/"
//             className={classes.block}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//                   Facebook
//           </a>
//         </ListItem>
//         <ListItem className={classes.inlineBlock}>
//           <a
//             href="https://www.instagram.com/msucomputerclub/"
//             className={classes.block}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Instagram
//           </a>
//         </ListItem>
//         <ListItem className={classes.inlineBlock}>
//           <a
//             href="https://www.github.com/hawkhack/"
//             className={classes.block}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             GitHub
//           </a>
//         </ListItem>
//       </List>
//     </div>
//     <div className={classes.right}>
//       &copy;
//       {' '}
//       {1900 + new Date().getYear()}
//       {' '}
//       <a
//         href="https://orgsync.com/160607/chapter"
//         className={classes.rightText}
//         target=""
//       >
//         MSU ACM Computer Club
//       </a>
//     </div>
//   </div>
// </footer>

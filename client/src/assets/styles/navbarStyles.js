import makeStyles from '@material-ui/core/styles/makeStyles';

const navbarStyles = makeStyles((theme) => ({
  onTop: {
    color: 'white',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s ease-in-out',
  },
  navLink: {
    textDecoration: 'none',
  },
  navBarText: {
    color: theme.palette.primary.main,
  },
  navbarScrolled: {
    color: theme.palette.primary.main,
    fontFamily: 'Dancing script, cursive',
  },
  NotTop: {
    background: 'white',
    transition: 'background-color 0.3s ease-in-out',
    height: '60px',
  },
  aboutButton: {
    padding: 10,
  },
  buttonTop: {
    color: 'white',
  },
  buttonNotTop: {
    color: theme.palette.primary.main,
  },
}));

export default navbarStyles;

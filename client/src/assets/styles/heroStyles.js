import makeStyles from '@material-ui/core/styles/makeStyles';
import image from './pictures/msulanding.jpg';

const heroStyles = makeStyles((theme) => ({
  heroText: {
    color: 'white',
    fontFamily: 'Dancing Script, cursive',
    '@media (min-width: 276px)': {
      fontSize: 'calc(12px + 4em)',
    },
    '@media (min-width: 576px)': {
      fontSize: 'calc(12px + 7em)',
    },
    '@media (min-width: 768px)': {
      fontSize: 'calc(12px + 8em)',
    },
    '@media (min-width: 992px)': {
      fontSize: 'calc(12px + 9em)',
    },
    '@media (min-width: 1200px)': {
      fontSize: 'calc(12px + 10em)',
    },
  },
  buttonGroup: {
    padding: 20,
  },
  Button: {
    padding: "15px 40px",
    minHeight: 'auto',
    minWidth: 'auto',
    boxShadow:
          '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
    fontSize: '1rem',
    '@media (min-width: 276px)': {
      fontSize: '0.8rem',
    },
    '@media (min-width: 576px)': {
      fontSize: '0.9rem',
    },
    '@media (min-width: 768px)': {
      fontSize: '1rem',
    },
    '@media (min-width: 992px)': {
      fontSize: '1rem',
    },
    '@media (min-width: 1200px)': {
      fontSize: '1rem',
    },
  },
  wrapper: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  grad: {
    background: 'linear-gradient(to bottom right, rgba(209, 25, 13, 0.9) 0%, rgba(34, 31, 31, 0.9) 100%)',
    height: 'auto',
    minHeight: '100vh',
  },
  round2: {
    fontFamily: 'Roboto',
    paddingBottom: 20,
    fontWeight: 300,
    '@media (min-width: 276px)': {
      fontSize: '1.375em',
    },
    '@media (min-width: 576px)': {
      fontSize: '1.375em',
    },
    '@media (min-width: 768px)': {
      fontSize: '1.5em',
    },
    '@media (min-width: 992px)': {
      fontSize: '1.75em',
    },
    '@media (min-width: 1200px)': {
      fontSize: '1.75em',
    },
  },
  dates: {
    fontSize: 'calc(13px + .5vw)',
    fontFamily: 'Roboto',
    fontWeight: 300,
  },
  navLink: {
    textDecoration: 'none',
  },
}));

export default heroStyles;

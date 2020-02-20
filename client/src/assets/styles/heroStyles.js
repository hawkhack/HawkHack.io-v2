import makeStyles from '@material-ui/core/styles/makeStyles';

const heroStyles = makeStyles(() => ({
  heroText: {
    color: 'white',
    fontFamily: 'Dancing Script, cursive',
    fontSize: 'calc(56px + (136 - 18) * ((100vw - 300px) / (1600 - 300)))',
    lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
  },
  buttonGroup: {
    padding: 20,
  },
  logoImg: {

  },
  Button: {
    padding: '15px 40px',
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
  round2: {
    fontFamily: 'Roboto',
    paddingBottom: 20,
    fontSize: 'calc(16px + (26 - 18) * ((100vw - 300px) / (1600 - 300)))',
    lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
  },
  dates: {
    fontSize: 'calc(13px + .5vw)',
    fontFamily: 'Roboto',
  },
  navLink: {
    textDecoration: 'none',
  },
}));

export default heroStyles;

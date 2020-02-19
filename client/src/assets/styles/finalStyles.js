import makeStyles from '@material-ui/core/styles/makeStyles';

const finalStyles = makeStyles(() => ({
  heroText: {
    fontFamily: 'Roboto, Dancing Script, cursive',
  },
  buttonGroup: {
    padding: 20,
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
    fontSize: 'calc(12px + 1.5vw)',
    fontFamily: 'Roboto',
    paddingBottom: 20,
    fontWeight: 300,
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

export default finalStyles;

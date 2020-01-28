import makeStyles from '@material-ui/core/styles/makeStyles';

const faqStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    color: theme.palette.secondary.secondary,
  },
  faqText: {
    '@media (min-width: 276px)': {
      padding: '5px',
      fontSize: 'calc(14px + .2vw)',
    },
    '@media (min-width: 576px)': {
      padding: '10px',
      fontSize: 'calc(14px + .2vw)',
    },
    '@media (min-width: 768px)': {
      padding: '15px',
      fontSize: 'calc(12px + .4vw)',
    },
    '@media (min-width: 992px)': {
      padding: '15px',
      fontSize: 'calc(12px + .5vw)',
    },
    '@media (min-width: 1200px)': {
      padding: '15px',
      fontSize: 'calc(12px + .5vw)',
    },
  },
  faqWrapper: {
    padding: 20,
  },
  faqTitleWrapper: {
    padding: 10,
  },
  wrapperExp: {
    '@media (min-width: 276px)': {
      padding: '5px',
    },
    '@media (min-width: 576px)': {
      padding: '5px',
    },
    '@media (min-width: 768px)': {
      padding: '5px',
    },
    '@media (min-width: 992px)': {
      padding: '10px 10px',
    },
    '@media (min-width: 1200px)': {
      padding: '10px 10px',
    },
  },
}));

export default faqStyles;

import makeStyles from '@material-ui/core/styles/makeStyles';

const faqStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    color: theme.palette.secondary.secondary,
  },
  faqText: {
    padding: 10,
    fontSize: "calc(14px + (26 - 18) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))"
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

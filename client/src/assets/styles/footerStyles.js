import makeStyles from '@material-ui/core/styles/makeStyles';

const footerStyles = makeStyles((theme) => ({
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative',
  },
  rightText: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  container: {
    '@media (min-width: 576px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px',
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px',
    },
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
  },
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  left: {
    float: 'left!important',
    display: 'block',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important',
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
}));

export default footerStyles;

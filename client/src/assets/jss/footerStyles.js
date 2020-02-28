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
  wrapper: {
    padding: 20
  }
}));

export default footerStyles;

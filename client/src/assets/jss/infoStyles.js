import makeStyles from '@material-ui/core/styles/makeStyles';

const infoStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 10,
    paddingLeft: 10,
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: '300',
  },
  imageText: {
    color: 'black',
  },
  card: {
    minWidth: '200px',
    width: '100%',
    minHeight: '600px',
  },
  hr: {
    marginTop: 30,
    border: '.8px solid red',
    width: '50%',
  },
}));

export default infoStyles;

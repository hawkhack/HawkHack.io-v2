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
    marginBottom: '70px',
  },
  imageText: {
    color: 'black',
  },
}));

export default infoStyles;

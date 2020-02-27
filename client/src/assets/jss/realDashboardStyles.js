import makeStyles from '@material-ui/core/styles/makeStyles';

const realDashboardStyles = makeStyles((theme) => ({
  dash: {
    minHeight: '90vh',
    width: "100%"
  },
  wrapper: {
    padding: 10,
  },
  status: {
    fontWeight: 300,
    fontSize: 'calc(25px + (46 - 18) * ((100vw - 300px) / (1600 - 300)))',
    lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
    color: theme.palette.primary.main,
  },
  appStatus: {
    color: 'black',
    paddingTop: '20px',
    paddingBottom: 0,
    fontSize: 'calc(20px + (26 - 18) * ((100vw - 300px) / (1600 - 300)))',
    lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
  },
  buttonWrapper: {
    padding: 10,
  },
  panel: {
    cursor: "auto"
  }
}));

export default realDashboardStyles;

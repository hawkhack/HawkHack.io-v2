import makeStyles from '@material-ui/core/styles/makeStyles';

const applicationFormUpdateStyles = makeStyles((theme) => ({
  textWrapper: {
    "@media (min-width: 276px)": {
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    "@media (min-width: 576px)": {
      padding: '10px',
    },
    "@media (min-width: 768px)": {
      padding: '20px',
    },
    "@media (min-width: 992px)": {
      padding: '20px',
    }
  },
  progress: {
    height: 'auto',
    width: 70,
  },
  loadingGrid: {
    height: '100%',
    position: 'absolute',
    zIndex: '100',
  },
  buttonWrapper: {
    padding: '5px 20px 10px 20px',
  },
  terms: {
    color: theme.palette.primary.main,
    cursor: "pointer"
  },
  gridItem: {
    width: "100%"
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "840px"
    }
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  headerWrapper: {
    "@media (min-width: 276px)": {
      paddingTop: '10px',
      paddingBottom: '10px'
    },
    "@media (min-width: 576px)": {
      padding: "10px 20px"
    },
    "@media (min-width: 768px)": {
      padding: "10px 20px"
    },
    "@media (min-width: 992px)": {
      padding: "10px 20px"
    }
  },
  header: {
    fontWeight: 300
  }
}));

export default applicationFormUpdateStyles

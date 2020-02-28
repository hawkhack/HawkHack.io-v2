import makeStyles from '@material-ui/core/styles/makeStyles';
import { green } from '@material-ui/core/colors';

const realDashboardStyles = makeStyles((theme) => ({
  dash: {
    minHeight: '90vh',
    width: "100%"
  },
  status: {
    fontWeight: 300,
    fontSize: 'calc(25px + (46 - 18) * ((100vw - 300px) / (1600 - 300)))',
    lineHeight: 'calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))',
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
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
  },
  paper: {
    zIndex: '12',
    color: '#FFFFFF',
    position: 'relative',
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
      maxWidth: '100%',
    },
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  outer: {
    padding: 20,
  },
  signIn: {
    zIndex: '12',
    fontFamily: 'Dancing Script, cursive',
  },
  card: {
    border: '0',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    width: '100%',
    boxShadow:
          '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    transition: 'all 300ms linear',
  },
  loginText: {
    padding: 20,
    fontWeight: 300,
  },
  container: {
    zIndex: '2',
    position: 'relative',
    color: '#FFFFFF',
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
  gridContainer: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
  gridItem: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    flexBasis: 'auto',
  },
  form: {
    margin: '0',
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginBottom: '15px',
    borderRadius: '3px',
    padding: '1rem 15px',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    border: '0',
    color: '#fff',
    background: 'linear-gradient(60deg, #E9190F, #E9190F)',
    boxShadow:
          '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
  },
  cardBody: {
    flex: '1 1 auto',
  },
  formControl: {
    width: '100%',
    margin: '0 0 17px 0',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#495057',
    },
  },
  textfieldWrapper: {
    paddingTop: 10,
  },
  labelRoot: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#AAAAAA !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    letterSpacing: 'unset',
  },
  inputIconsColor: {
    color: '#495057',
  },
  input: {
    color: '#495057',
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1',
    },
    '&::placeholder': {
      color: '#AAAAAA',
    },
    '&:after': {
      borderColor: theme.palette.primary.main,
    },
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem',
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  button: {
    minHeight: '100%',
    minWidth: '100%',
    padding: 10,
  },
  wrapper: {
    padding: 20,
  },
  loadingGrid: {
    height: '90vh',
    position: 'absolute',
    zIndex: '100',
  },
  progress: {
    height: 'auto',
    width: 70,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default realDashboardStyles;

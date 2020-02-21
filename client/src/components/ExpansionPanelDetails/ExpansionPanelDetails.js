import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import withStyles from '@material-ui/core/styles/withStyles';

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default ExpansionPanelDetails;

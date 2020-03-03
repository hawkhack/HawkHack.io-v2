import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import withStyles from '@material-ui/core/styles/withStyles';

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

export default ExpansionPanel;

import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles'

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

export default ExpansionPanelSummary
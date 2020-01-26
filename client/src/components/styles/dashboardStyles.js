import makeStyles from '@material-ui/core/styles/makeStyles';

const dashboardStyles = makeStyles((theme) => ({
	hr: {
		height: "2px",
		width: "50vw",
		color: theme.palette.primary.main,
		backgroundColor: "black",
		border: "none"
	},
	container: {
		zIndex: "12",
		color: "#FFFFFF",
		"@media (min-width: 576px)": {
			maxWidth: "540px"
		},
		"@media (min-width: 768px)": {
		    maxWidth: "720px"
		},
		"@media (min-width: 992px)": {
		    maxWidth: "960px"
		},
		"@media (min-width: 1200px)": {
		    maxWidth: "100%"
		},
		paddingRight: "15px",
		paddingLeft: "15px",
		marginRight: "auto",
		marginLeft: "auto",
		width: "100%"
	},
	gridContainer: {
		marginRight: "-15px",
		marginLeft: "-15px",
		width: "auto"
	},
	title: {
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
		color: "#3C4858",
		margin: "1.75rem 0 0.875rem",
		fontWeight: "700",
		fontFamily: `"Roboto Slab", "Times New Roman", serif`
	},
	main: {
		background: "#FFFFFF",
	  	position: "relative",
	  	zIndex: "3"
	},
	mainRaised: {
	  	margin: "-600px 30px 0px",
	  	borderRadius: "6px",
	  	boxShadow:
	    	"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
	}
}))

export default dashboardStyles;
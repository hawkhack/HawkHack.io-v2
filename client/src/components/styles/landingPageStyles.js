import makeStyles from '@material-ui/core/styles/makeStyles';

const landingPageStyles = makeStyles((theme) => ({
	hr: {
		height: "2px",
		width: "50vw",
		color: theme.palette.primary.main,
		backgroundColor: "black",
		border: "none"
	}
}))

export default landingPageStyles;
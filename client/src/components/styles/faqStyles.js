import image from './pictures/msulanding.jpg'
import makeStyles from '@material-ui/core/styles/makeStyles';

const faqStyles = makeStyles((theme) => ({
    wrapper: {
    	padding: 40,
    	color: theme.palette.secondary.secondary
    },
    image: {
    	width: "100%",
    	height: "auto",
        minHeight: "100vh",
    	backgroundImage: `url(${image})`,
    	backgroundRepeat: "no-repeat",
    	backgroundSize: "cover",
        backgroundAttachment: "fixed"
    },
    grad: {
    	background: "linear-gradient(to bottom right, rgba(209, 25, 13, 0.9) 0%, rgba(34, 31, 31, 0.9) 100%)",
    	height: "auto",
        minHeight: "100vh"
    },
    faqWrapper: {
        padding: 20
    },
    faqTitleWrapper: {
        padding: 10
    },
    faqText: {
        width: "400px",
        color: "black"
    },
    wrapperExp: {
        padding: "10px 20px"
    }
}))

export default faqStyles
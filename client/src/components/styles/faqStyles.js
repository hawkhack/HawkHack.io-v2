import image from './pictures/msulanding.jpg'
import makeStyles from '@material-ui/core/styles/makeStyles';

const faqStyles = makeStyles((theme) => ({
    wrapper: {
    	padding: 40,
    	color: theme.palette.secondary.secondary
    },
    faqText: {
        "@media (min-width: 276px)": {
           padding: "5px"
        },
        "@media (min-width: 576px)": {
           padding: "10px"
        },
        "@media (min-width: 768px)": {
           padding: "15px"
        },
        "@media (min-width: 992px)": {
           padding: "15px"
        },
        "@media (min-width: 1200px)": {
            padding: "15px"
        },
    },
    faqWrapper: {
        padding: 20
    },
    faqTitleWrapper: {
        padding: 10
    },
    wrapperExp: {
        "@media (min-width: 276px)": {
           padding: "5px"
        },
        "@media (min-width: 576px)": {
           padding: "5px"
        },
        "@media (min-width: 768px)": {
           padding: "5px"
        },
        "@media (min-width: 992px)": {
           padding: "10px 20px"
        },
        "@media (min-width: 1200px)": {
            padding: "10px 20px"
        },
    }
}))

export default faqStyles
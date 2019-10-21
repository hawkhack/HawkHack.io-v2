import image from './pictures/msulanding.jpg'

const faqStyles = theme => ({
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
    }
})

export default faqStyles
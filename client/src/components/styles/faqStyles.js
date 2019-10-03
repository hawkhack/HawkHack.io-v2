import image from './pictures/msulanding.jpg'

const faqStyles = theme => ({
    wrapper: {
    	padding: 40,
    	color: theme.palette.secondary.main
    },
    image: {
    	width: "100%",
    	height: "100vh",
    	backgroundImage: `url(${image})`,
    	backgroundRepeat: "no-repeat",
    	backgroundSize: "cover",
        backgroundAttachment: "fixed"
    },
    grad: {
    	background: "linear-gradient(to bottom right, rgba(209, 25, 13, 0.9) 0%, rgba(34, 31, 31, 0.9) 100%)",
    	height: "100vh"
    }
})

export default faqStyles
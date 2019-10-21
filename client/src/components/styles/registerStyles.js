import image from './pictures/msulanding.jpg'

const registerStyles = theme => ({
	paper: {
		boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	},
	outer: {
		padding: 20
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
})

export default registerStyles
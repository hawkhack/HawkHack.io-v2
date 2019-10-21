import image from './pictures/msulanding.jpg'

const footerStyles = theme => ({
    image: {
        width: "100%",
        height: "auto",
        minHeight: "20vh",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    },
    grad: {
        background: "linear-gradient(to bottom right, rgba(209, 25, 13, 0.9) 0%, rgba(34, 31, 31, 0.9) 100%)",
        height: "auto",
        minHeight: "20vh"
    },
})

export default footerStyles
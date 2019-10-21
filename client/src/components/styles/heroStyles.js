import image from './pictures/msulanding.jpg'

const heroStyles = theme => ({
    heroText: {
        color: "white",
        fontSize: "calc(12px + 8.5vw)",
        fontFamily: "Dancing Script, cursive",
    },
    buttonGroup: {
        padding: 20
    },
    Button: {
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft: "1rem",
        marginRight: "1rem",
        fontSize: "1rem",
        fontFamily: 'Roboto',
        borderRadius: "0",
        color: "white",
        '&:active, &:focus': {
            boxShadow: 'none',
        },
    },
    wrapper: {
        padding: 10
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
    round2: {
       fontSize: "calc(12px + 1.5vw)",
       fontFamily: "Roboto"
    }
})

export default heroStyles

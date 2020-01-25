import image from './pictures/msulanding.jpg'
import makeStyles from '@material-ui/core/styles/makeStyles';

const heroStyles = makeStyles((theme) => ({
    gridContainer: {
        height: "100vh"
    },
    heroText: {
        color: "white",
        fontSize: "calc(12px + 8.5vw)",
        fontFamily: "Dancing Script, cursive",
    },
    buttonGroup: {
        padding: 20
    },
    Button: {
        margin: 0,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 40,
        borderRadius: 10
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
       fontFamily: "Roboto",
       paddingBottom: 20
    },
    navLink: {
        textDecoration: "none"
    }
}))

export default heroStyles

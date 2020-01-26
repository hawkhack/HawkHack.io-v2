import image from './pictures/msulanding.jpg'
import makeStyles from '@material-ui/core/styles/makeStyles';

const heroStyles = makeStyles((theme) => ({
    heroText: {
        color: "white",
        fontFamily: "Dancing Script, cursive",
        "@media (min-width: 276px)": {
           fontSize: "calc(12px + 15.5vw)",
        },
        "@media (min-width: 576px)": {
           fontSize: "calc(12px + 10.5vw)",
        },
        "@media (min-width: 768px)": {
           fontSize: "calc(12px + 20.5vw)",
        },
        "@media (min-width: 992px)": {
           fontSize: "calc(12px + 10.5vw)",
        },
        "@media (min-width: 1200px)": {
           fontSize: "calc(12px + 10.5vw)"
        },
    },
    buttonGroup: {
        padding: 20
    },
    Button: {
        minHeight: "auto",
        minWidth: "auto",
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",
        boxShadow:
          "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        border: "none",
        position: "relative",
        margin: ".3125rem 1px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
          "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
          color: "#FFFFFF",
          backgroundColor: theme.palette.primary.main,
          boxShadow:
            "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
        },
        padding: "1.125rem 2.25rem",
        fontSize: "0.875rem",
        lineHeight: "1.333333",
        borderRadius: "0.2rem"
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

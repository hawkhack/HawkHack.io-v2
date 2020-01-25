import image from './pictures/msubackground-1.png'
import { makeStyles } from '@material-ui/core'

const loginStyles = makeStyles(() => ({
	login: {
        backgroundImage: "url(" + image + ")",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    paper: {
        zIndex: "12",
        color: "#FFFFFF",
        position: "relative",
        "@media (min-width: 576px)": {
           maxWidth: "540px"
        },
        "@media (min-width: 768px)": {
           maxWidth: "720px"
        },
        "@media (min-width: 992px)": {
           maxWidth: "960px"
        },
        "@media (min-width: 1200px)": {
           maxWidth: "100%"
        },
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
		boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	},
	outer: {
		padding: 20
	},
    signIn: {
        zIndex: "12",
    	fontFamily: "Dancing Script, cursive"
    }
}))

export default loginStyles
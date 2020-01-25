import makeStyles from '@material-ui/core/styles/makeStyles';

const aboutStyles = makeStyles((theme) => ({
    section: {
        padding: "20px",
    },
    home: {
        display: 'flex',
        height: "80vh"
    },
    hr: {
        height: "2px",
        width: "200px",
        color: theme.palette.primary.main,
        backgroundColor: "gray",
        border: "none"
    },
    wrapper: {
        padding: "40px"
    },
    img: {
        minWidth: "100px",
        width: "100%",
        margin: 0,
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    border: {
        borderLeft: "5px solid red",
        borderRight: "5px solid red"
    },
    icons: {
        align: "center",
    },
    whatText: {
        fontSize: "1.3em",
        color: "black",
    },
    iframe: {
        border: 0,
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
}))

export default aboutStyles;
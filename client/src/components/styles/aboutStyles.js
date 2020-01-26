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
        "@media (min-width: 276px)": {
           padding: "5px"
        },
        "@media (min-width: 576px)": {
           padding: "20px"
        },
        "@media (min-width: 768px)": {
           padding: "30px"
        },
        "@media (min-width: 992px)": {
           padding: "40px"
        },
        "@media (min-width: 1200px)": {
            padding: "40px"
        },
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
        fontSize: "calc(12px + .5vw)",
        color: "black",
    },
    iframe: {
        border: 0,
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
}))

export default aboutStyles;
import makeStyles from '@material-ui/core/styles/makeStyles';

const lastYearStyles = makeStyles((theme) => ({
    section: {
        padding: "70px 0"
    },
    container: {
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
          maxWidth: "1140px"
        },
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%"
    },
    gridContainer: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto"
    },
    gridItem: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto"
    },
    card: {
        overflow: "hidden",
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        transition: "all 300ms linear"
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
           padding: "15px"
        },
        "@media (min-width: 576px)": {
           padding: "20px"
        },
        "@media (min-width: 768px)": {
           padding: "30px"
        },
        "@media (min-width: 992px)": {
           padding: "30px"
        },
        "@media (min-width: 1200px)": {
            padding: "30px"
        },
    },
    imgWrapper: {
        padding: 10
    },
    img: {
        minWidth: "200px",
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
    whatsHawkhack: {
        "@media (min-width: 276px)": {
           padding: "20px"
        },
        "@media (min-width: 576px)": {
           padding: "20px"
        },
        "@media (min-width: 768px)": {
           padding: "15px"
        },
        "@media (min-width: 992px)": {
           paddingTop: "20px"
        },
        "@media (min-width: 1200px)": {
            marginTop: 20,
            paddingTop: "20px"
        },
    },
    whatText: {
        "@media (min-width: 276px)": {
           fontSize: "1em",
           padding: 10
        },
        "@media (min-width: 576px)": {
           fontSize: "1.5em",
           padding: 10
        },
        "@media (min-width: 768px)": {
           fontSize: "1.5em",
        },
        "@media (min-width: 992px)": {
           fontSize: "1.5em",
        },
        "@media (min-width: 1200px)": {
            fontSize: "1.5em",
        },
        color: "#999",
        alignText: "left"
    },
    iframe: {
        border: 0,
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
}))

export default lastYearStyles;
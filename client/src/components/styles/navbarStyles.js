const navbarStyles = theme => ({
    color: {
        boxShadow: "none",
        backgroundColor: "transparent",
        transition: "background-color 0.3s ease-in-out"
    },
    navBarText: {
        color: theme.palette.primary.secondary
    },
    navbarScrolled: {
        color: theme.palette.primary.main,
        fontFamily: "Dancing script, cursive"
    },
    NotTop: {
        background: "white",
        transition: "background-color 0.3s ease-in-out",
        height: "60px"
    },
    aboutButton: {
        padding: 10
    },
    buttonTop: {
        color: "white",
    },
    buttonNotTop: {
        color: theme.palette.primary.main,
    }
})

export default navbarStyles
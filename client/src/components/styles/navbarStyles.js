const navbarStyles = theme => ({
    color: {
        boxShadow: "none",
        backgroundColor: "transparent",
        transition: "background-color 0.3s ease-in-out"
    },
    navBarText: {
        color: theme.palette.primary.main
    },
    Button: {
        color: theme.palette.primary.main
    },
    NotTop: {
        background: "white",
        transition: "background-color 0.3s ease-in-out",
        height: "60px"
    }
})

export default navbarStyles
const heroStyles = theme => ({
    heroText: {
        color: "white"
    },
    buttonGroup: {
        padding: 20
    },
    Button: {
        padding: 20,
        marginLeft: "1rem",
        marginRight: "1rem",
        fontSize: "1rem",
        borderRadius: "0",
        color: "white",
        '&:active, &:focus': {
            boxShadow: 'none',
        },
    }
})

export default heroStyles

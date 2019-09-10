const heroStyles = theme => ({
    heroText: {
        color: "white",
        fontSize: "calc(12px + 8.5vw);"
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
        borderRadius: "0",
        color: "white",
        '&:active, &:focus': {
            boxShadow: 'none',
        },
    }
})

export default heroStyles

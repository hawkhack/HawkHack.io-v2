
const aboutStyles = theme => ({
    Home: {
        display: 'flex',
        height: "80vh"
    },
    cardWrapper: {
        zIndex: 1,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        padding: 10,
    },
    cardContent: {
        maxWidth: 400,
    },
    textField: {
        width: '100%',
        marginTop: "3rem",
        marginBottom: "2px",
    },
    button: {
        width: '100%',
    },
    imagesWrapper: {
        position: 'relative',
    },
    imageDots: {
        position: 'absolute',
        top: 67,
        left: -67,
        right: 0,
        bottom: 0,
        width: '100%',
        background: 'url(/static/onepirate/productCTAImageDots.png)',
    },
    image: {
        position: 'absolute',
        top: 28,
        left: -28,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: 600,
    },
})

export default aboutStyles
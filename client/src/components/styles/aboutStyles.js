
const aboutStyles = theme => ({
    home: {
        display: 'flex',
        height: "80vh"
    },
    aboutText: {
        width: "80vw"
    },
    hr: {
    	border: 0,
    	height: 0,
    	borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    	borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    	width: "50%"
    },
    wrapper: {
        padding: "40px"
    },
    img: {
        minWidth: "100px",
        width: "100%",
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    border: {
        borderLeft: "5px solid red",
        borderRight: "5px solid red"
    },
    icons: {
        align: "center",
    }
})

export default aboutStyles
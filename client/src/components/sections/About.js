import React, { Component, Fragment } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core"
import aboutStyles from "../styles/aboutStyles"
import Grow from '@material-ui/core/Grow'

class About extends Component {

    state = {
        closed: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ closed: true })
        } else {
            this.setState({ closed: false })
        }
    }

    render() {
        const { classes, mobile } = this.props
        const { closed } = this.state

        console.log(mobile)
        return (
            <Fragment> 
                <div className={classes.wrapper}>
                    <Grid 
                        container 
                        direction="row" 
                        justify="center" 
                        alignItems="center"
                    >
                        {mobile ? 
                            <Grid item sm={12} md={6}>
                               <Grow in={ closed } timeout={1200}>
                                    <img className={classes.img} src="https://picsum.photos/650/500" alt="there should be something really cool here" />
                                </Grow>
                            </Grid> : null
                        }
                        <Grid item sm={12} md={6}>
                            <Grow in={ closed } timeout="auto">
                                <div className={classes.wrapper}>
                                    <Typography
                                        variant="h2"
                                        align="center"
                                        color="primary"
                                    >
                                        Title
                                    </Typography>
                                    <hr className={classes.hr} />
                                    <Typography
                                        variant="body1"
                                        align="center"
                                        gutterBottom
                                        paragraph
                                    >
                                       HawkHack is a 24-hour hackathon event at Montclair State University. Students of any majors are welcome to form a team and build awesome software and hardware projects. Industry experts and mentors will be there to help and guide students and create a learning environment through talks, workshops, and one-on-one guidance. We encourage anyone from beginner to advanced developers to challenge themselves and create something awesome.
                                    </Typography>
                                </div>
                            </Grow>
                        </Grid>
                        {!mobile ? 
                            <Grid item sm={12} md={6}>
                               <Grow in={ closed } timeout={1200}>
                                    <img className={classes.img} src="https://picsum.photos/650/500" alt="there should also be something really cool here" />
                                </Grow>
                            </Grid> : null
                        }
                    </Grid> 
                </div>
                <div className={classes.wrapper}> 
                    <br className={classes.br}/>
                    <Grid 
                        container 
                        direction="row" 
                        justify="center" 
                        alignItems="center"
                    >
                        <Grid item sm={12} md={6}>
                            <Grow in={ closed } timeout="auto">
                                <img className={classes.img} src="https://picsum.photos/650/500" alt="we need to fix our pictures" />
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6}>
                           <Grow in={ closed } timeout={1200}>
                                <div className={classes.wrapper}>
                                    <Typography
                                        variant="h2"
                                        align="center"
                                        color="primary"
                                    >
                                        Title
                                    </Typography>
                                    <hr className={classes.hr} />
                                    <Typography
                                        variant="body1"
                                        align="center"
                                        gutterBottom
                                        paragraph
                                    >
                                       HawkHack is a 24-hour hackathon event at Montclair State University. Students of any majors are welcome to form a team and build awesome software and hardware projects. Industry experts and mentors will be there to help and guide students and create a learning environment through talks, workshops, and one-on-one guidance. We encourage anyone from beginner to advanced developers to challenge themselves and create something awesome.
                                    </Typography>
                                </div>
                            </Grow>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(aboutStyles)(About)
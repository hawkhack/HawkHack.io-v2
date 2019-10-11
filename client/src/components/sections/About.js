import React, { Component, Fragment } from "react";
import { withStyles, Grid, Typography } from "@material-ui/core"
import aboutStyles from "../styles/aboutStyles"

class About extends Component {

    render() {
        const { classes, mobile } = this.props

        return (
            <Fragment> 
                <div className={classes.wrapper}>
                    <Grid 
                        container 
                        direction="row" 
                        justify="center" 
                        alignItems="center"
                    >
                        <Grid item sm={12} md={6}>
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
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <img className={classes.img} src="https://picsum.photos/650/500" alt="there should also be something really cool here" />
                        </Grid>
                    </Grid> 
                </div>
                <div className={classes.wrapper}> 
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item sm={3}>
                            <div className={classes.wrapper}>
                                <Typography variant="h2" align="center">
                                    title
                                </Typography>
                                <Typography variant="h5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item sm={3}>
                            <div className={classes.border}>
                                <div className={classes.wrapper}>
                                    <Typography variant="h2" align="center">
                                        title
                                    </Typography>
                                    <Typography variant="h5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={3}>
                          <div className={classes.wrapper}>
                                <Typography variant="h2" align="center">
                                    title
                                </Typography>
                                <Typography variant="h5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(aboutStyles)(About)
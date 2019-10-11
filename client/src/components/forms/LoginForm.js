import React, { Component } from 'react'
import { Button, InputLabel, Input, FormControl, FormHelperText } from '@material-ui/core'
import Validator from 'validator'
import { withStyles } from '@material-ui/core'

const styles = {
    wrapper: {
        display: "inline-block",
        position: "relative",
        padding: "8.85px 13px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
    },
    textField: {
        width: "100%",
        boxSizing: "border-box",
        fontWeight: "300",
        textOverflow: "ellipsis",
        transition: ".4s all",
    },
    button: {
        position: "relative",
        width: "100%",
        borderRadius: "3px",
        boxSizing: "border-box",
        marginTop: "20px",
    },
}

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        errors: {}
    }

   onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state
        const errors = this.validate(email, password)
        this.setState({ errors })
        if(Object.keys(this.state.errors).length === 0) {
            this.props.submit(email, password)
        }
    }

    validate = (email, password) => {
        const errors = {}
        if(!Validator.isEmail(email)) errors.email = "Invalid Email";
        if(!password) errors.password = "Can't be blank";
        return errors
    }

    render() {
        
        const { classes } = this.props
        return (
            <form
                className={classes.form}
                onSubmit={e => this.onSubmit(e)}
            >
                <span className={classes.wrapper}>
                    <FormControl margin="normal" fullWidth error={!!this.state.errors.email} required>
                            <InputLabel> Email Address </InputLabel>
                            <Input 
                                id="email" 
                                name="email" 
                                value={this.state.email}
                                type="text"
                                autoComplete="email" 
                                autoFocus
                                onChange={this.onChange}
                                className={classes.textField}
                            />
                            {this.state.errors.email ? <FormHelperText>Invalid Email</FormHelperText> : null}
                    </FormControl>
                </span>
                <span className={classes.wrapper}>
                    <FormControl margin="normal" fullWidth error={!!this.state.errors.password} required>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input 
                                id="password" 
                                name="password" 
                                value={this.state.password}
                                type="password"
                                autoComplete="password"
                                onChange={this.onChange}
                                className={classes.textField}
                            />
                    </FormControl>
                </span>
                <span className={classes.wrapper}>
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </span>
            </form>
        )
    }
}

export default withStyles(styles)(LoginForm)
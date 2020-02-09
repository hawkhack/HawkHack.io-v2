import React from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';

const ApplicationUpdateForm = () => (
  <Grid
    container
    justify="center"
    direction="column"
    align="center"
  >
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input
          id="standard-adornment-password"
          type="Email"
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                disabled
              >
                <Email />
              </IconButton>
            </InputAdornment>
            )}
        />
      </FormControl>
    </Grid>
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input
          id="standard-adornment-password"
          type="Email"
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                disabled
              >
                <Email />
              </IconButton>
            </InputAdornment>
            )}
        />
      </FormControl>
    </Grid>
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input
          id="standard-adornment-password"
          type="Email"
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                disabled
              >
                <Email />
              </IconButton>
            </InputAdornment>
            )}
        />
      </FormControl>
    </Grid>
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input
          id="standard-adornment-password"
          type="Email"
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                disabled
              >
                <Email />
              </IconButton>
            </InputAdornment>
            )}
        />
      </FormControl>
    </Grid>
    <Grid item>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input
          id="standard-adornment-password"
          type="Email"
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                disabled
              >
                <Email />
              </IconButton>
            </InputAdornment>
            )}
        />
      </FormControl>
    </Grid>
    <Grid item>
      <Button size="large" color="primary">
          Update
      </Button>
    </Grid>
  </Grid>
);

export default ApplicationUpdateForm;

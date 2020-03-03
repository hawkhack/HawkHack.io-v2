import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const CustomInput = (props) => {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
  } = props;

  return (
    <FormControl {...formControlProps}>
      <InputLabel error={error} htmlFor={id} {...labelProps}>{labelText}</InputLabel>
      <Input
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
};

export default CustomInput;

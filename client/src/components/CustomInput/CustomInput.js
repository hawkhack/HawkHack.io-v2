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
  } = props;

  return (
      <FormControl {...formControlProps}>
        <InputLabel htmlFor={id} {...labelProps} >{labelText}</InputLabel>
        <Input
          id={id}
          {...inputProps}
        />
      </FormControl>
  )
}

export default CustomInput
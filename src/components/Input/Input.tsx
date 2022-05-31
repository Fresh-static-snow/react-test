import React, { FC, forwardRef, InputHTMLAttributes } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Input = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      //margin="normal"
      
      inputRef={ref}
      {...props}
      
    />
  );
});

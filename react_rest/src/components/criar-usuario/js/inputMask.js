import { TextField } from "@mui/material";
import React from "react";

export default function InputMaskCpf({ ...props }) {
  const handleKeyUpCpf = (event) => {
    event.target.maxLength = 14;
    let v = event.target.value;
    v = v.replace(/\D/g,"");
    v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d)/,"$1.$2.$3-$4");
    event.target.value = v;
  }
  return (
      <TextField
        {...props}
        fullWidth
        variant="standard"
        onChange={handleKeyUpCpf}
      />
  );
}
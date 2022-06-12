import { CalendarMonthSharp } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import "./date-picker.scss";

export function InputMaskCpf({ ...props }) {
  const handleKeyUpCpf = (event) => {
    event.target.maxLength = 14;
    let v = event.target.value;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
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

export function InputMaskTelefone({ ...props }) {
  const handleKeyUpTelefone = (event) => {
    event.target.maxLength = 14;
    let v = event.target.value;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    event.target.value = v;
  }
  return (
    <TextField
      {...props}
      fullWidth
      variant="standard"
      onChange={handleKeyUpTelefone}
    />
  );
}

export function InputMaskCelular({ ...props }) {
  const handleKeyUpTelefone = (event) => {
    event.target.maxLength = 14;
    let v = event.target.value;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    event.target.value = v;
  }
  return (
    <TextField
      {...props}
      fullWidth
      variant="standard"
      onChange={handleKeyUpTelefone}
    />
  );
}

export function InputDatePicker({ ...props }) {
  const handleOnChangeDate = (event) => {
    event.target.maxLength = 10;
    let v = event.target.value;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    event.target.value = v;
  }

  window.onload = function () {
    const data_picker_element = document.querySelector('.date-picker');
    const selected_date_element = document.querySelector('.date-picker .selected-date');
    const dates_element = document.querySelector('.date-picker .dates');

    // EVENT LISTENERS
    data_picker_element.addEventListener('click', toggleDatePicker);

    // FUNCTIONS
    function toggleDatePicker(e) {
      if (checkEventPathForClass(e.path)) {
        dates_element.classList.toggle('active');
      }
    }

    // HELPER FUNCTIONS
    function checkEventPathForClass(path) {
      for (let i = 0; i < path.length; i++) {
        if (path[i].classList) {
          if (path[i].classList.contains('date-select')) {
            return true;
          } else if (path[i].classList.contains('dates') ||
            path[i].classList.contains('next-mth') ||
            path[i].classList.contains('month') ||
            path[i].classList.contains('prev-mth')) {
            if (!dates_element.classList.contains("active")) {
              return true;
            }
          }
        }
      }
      return false;
    }
  }

  return (
    <div className="date-picker">
      <TextField
        {...props}
        className="selected-date"
        variant="standard"
        margin="normal"
        placeholder={new Date().toLocaleDateString("pt-BR")}
        onChange={handleOnChangeDate}
        fullWidth
      />
      <CalendarMonthSharp className="date-select" />
      <div className="dates">
        <div className="month">
          <div className="arrows prev-mth">&lt;</div>
          <div className="mth"></div>
          <div className="arrows next-mth">&gt;</div>
          <div className="days"></div>
        </div>
      </div>
    </div>
  );
}

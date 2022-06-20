import { ArrowBackIosNew, ArrowForwardIos, CalendarMonthSharp, Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
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

  function mountDatePicker() {
    const data_picker_element = document.querySelector('.date-picker');
    const selected_date_element = document.querySelector('.date-picker .selected-date #data');
    const dates_element = document.querySelector('.date-picker .dates');
    const mth_element = document.querySelector('.date-picker .dates .month .mth');
    const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
    const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
    const days_element = document.querySelector('.date-picker .dates .days');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let selectedDate = date;
    let selectedDay = day;
    let selectedMonth = month;
    let selectedYear = year;

    mth_element.textContent = months[month] + ' ' + year;
    populateDates();

    // EVENT LISTENERS
    data_picker_element.addEventListener('click', toggleDatePicker);
    next_mth_element.addEventListener('click', goToNextMonth);
    prev_mth_element.addEventListener('click', goToPreviousMonth);

    // FUNCTIONS
    function toggleDatePicker(e) {
      if (checkEventPathForClass(e.path)) {
        if (!dates_element.classList.contains("active")) {
          dates_element.classList.toggle('active');
        }
      } else {
        dates_element.classList.remove('active');
      }
    }

    function goToNextMonth(e) {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      mth_element.textContent = months[month] + ' ' + year;
      populateDates();
    }

    function goToPreviousMonth(e) {
      month--;
      if (month < 0) {
        month = 11;
        year--;
      }
      mth_element.textContent = months[month] + ' ' + year;
      populateDates();
    }

    function populateDates(e) {
      days_element.innerHTML = '';
      let amount_days = new Date(year, (month + 1), 0).getDate();
      let init_day = new Date(year, month, 1).getDay();
      let last_day = new Date(year, (month + 1), 0).getDay();
      let last_day_prev_month = new Date(year, (month), 0).getDate();

      last_day_prev_month = last_day_prev_month - (init_day - 1);
      for (let d = 0; d < init_day; d++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.classList.add('disableDay');
        day_element.textContent = last_day_prev_month;
        days_element.appendChild(day_element);
        last_day_prev_month++;
      }

      for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;

        if (selectedDay === (i + 1) && selectedMonth === month && selectedYear === year) {
          day_element.classList.add('selected');
        }
        let today = new Date();

        if (new Date(year + '-' + (month + 1) + '-' + (i + 1)) > today) {
          day_element.classList.add('disableDay');
        }

        day_element.addEventListener('click', () => {
          selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
          selectedDay = (i + 1);
          selectedMonth = month;
          selectedYear = year;

          selected_date_element.value = formatDate(selectedDate);
          selected_date_element.dataset.value = selectedDate;
          populateDates();
        });

        days_element.appendChild(day_element);

        if ((amount_days - 1) === i) {
          let dias_restantes = 6 - last_day;
          for (let a = 0; a < dias_restantes; a++) {
            const day_element = document.createElement('div');
            day_element.classList.add('day');
            day_element.classList.add('disableDay');
            day_element.textContent = a + 1;
            days_element.appendChild(day_element);
          }
        }
      }
    }

    // HELPER FUNCTIONS
    function checkEventPathForClass(path) {
      for (let i = 0; i < path.length; i++) {
        if (path[i].classList) {
          if (path[i].classList[0] === 'day') {
            return false;
          }
        }
      }
      return true;
    }

    function formatDate(date) {
      let day = date.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      let month = date.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      let year = date.getFullYear();

      return day + '/' + month + '/' + year;
    }
  }

  return (
    <div className="date-picker">
      <TextField
        {...props}
        className="selected-date disabled"
        variant="standard"
        margin="normal"
        onChange={handleOnChangeDate}
        fullWidth
      />
      <CalendarMonthSharp className="date-select" onMouseEnter={mountDatePicker}/>
      <div className="dates">
        <div className="month">
          <div className="arrows prev-mth"><ArrowBackIosNew /></div>
          <div className="mth"></div>
          <div className="arrows next-mth"><ArrowForwardIos /></div>
        </div>
        <div className="week">
          <div className="daysOfWeek">D</div>
          <div className="daysOfWeek">S</div>
          <div className="daysOfWeek">T</div>
          <div className="daysOfWeek">Q</div>
          <div className="daysOfWeek">Q</div>
          <div className="daysOfWeek">S</div>
          <div className="daysOfWeek">S</div>
        </div>
        <div className="days">
        </div>
      </div>
    </div>
  );
}

export function InputCepSearch({ ...props }) {
  const handleKeyUpCep = (event) => {
    event.target.maxLength = 14;
    let v = event.target.value;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{5})(\d{3})/, "$1-$2");
    event.target.value = v;
  }
  return (
    <TextField
      {...props}
      fullWidth
      variant="standard"
      onChange={handleKeyUpCep}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              aria-label="search cep"
              className="btnSearch"
              type="submit"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}
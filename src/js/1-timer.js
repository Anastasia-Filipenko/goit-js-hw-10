import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const daySpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

buttonStart.setAttribute('disabled', 'true');

let userSelectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

input.addEventListener('change', () => {
  const newDate = new Date(input.value);

  if (newDate < new Date()) {
    iziToast.error({
      message: 'Please choose a date in the future',
      timeout: 3000,
      position: 'topRight',
    });
    buttonStart.setAttribute('disabled', 'true');
  } else {
    buttonStart.removeAttribute('disabled');
  }
});

buttonStart.addEventListener('click', () => {
  buttonStart.setAttribute('disabled', 'true');
  input.setAttribute('disabled', 'true');
  intervalId = setInterval(() => {
    const ms = userSelectedDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(ms);

    if (ms <= 0) {
      clearInterval(intervalId);
      return;
    }

    daySpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);
  }, 1000);
});

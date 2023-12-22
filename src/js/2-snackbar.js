import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let isSuccess = false;

  const delayValue = Number(form.elements['delay'].value);
  const radioButtonsValue = form.elements['state'].value;

  if (radioButtonsValue === 'fulfilled') isSuccess = true;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(`Fulfilled promise in ${delayValue}ms`);
      } else {
        reject(`Rejected promise in ${delayValue}ms`);
      }
    }, delayValue);
  });

  promise
    .then(value => {
      iziToast.success({
        title: `Ok`,
        message: `${value}`,
        timeout: 2000,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: `Error`,
        message: `${error}`,
        timeout: 2000,
        position: 'topRight',
      });
    });
});

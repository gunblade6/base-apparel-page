const form = document.getElementById(`form`);
const input = document.getElementById(`email`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let inputValue = input.value;
  if (!validateEmail(inputValue)) {
    form.classList.add(`error`);
  } else {
    form.classList.remove(`error`);
    input.value = ``;
    document.body.innerHTML = `
      <style>
        h1 {
          color: var(--sat-red);
          font-size:6rem;
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
        }
      </style>
      <h1>Thank You!</h1>

    `;
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

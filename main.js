const logins = document.getElementById('logins');
const registers = document.getElementById('registers')
const logInBtn = document.getElementById('logInBtn');
let isVsisble = false;
const show = () => {
  registers.classList.toggle('fade-element');
  logins.classList.toggle('fade-in');
  isVsisble = !isVsisble;
};

logInBtn.addEventListener('click', () => {
    if (logInBtn.textContent == 'Log In') {
        logInBtn.textContent = 'Register';
    } else {
        logInBtn.textContent = 'Log In';
    }
    show();
})


// toggleButtons.forEach((toggleButton) => {
//   toggleButton.addEventListener('click', slide);
// });
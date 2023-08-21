const logins = document.getElementById('logins');
const registers = document.getElementById('registers')
const logInBtn = document.getElementById('logInBtn');
const show = () => {
  registers.classList.toggle('fade-element');
  logins.classList.toggle('fade-in');
};

logInBtn.addEventListener('click', () => {
    if (logInBtn.textContent == 'Log In') {
        logInBtn.textContent = 'Register';
    } else {
        logInBtn.textContent = 'Log In';
    }
    show();
})

const bottomImage = document.querySelector('.arrow');
window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledDistance = window.scrollY;

    // Adjust the value below to determine how close to the bottom the user needs to be to show the image
    const triggerDistance = 100;
    if (scrolledDistance > scrollableHeight - triggerDistance) {
        bottomImage.style.opacity = '1';
    } else {
        bottomImage.style.opacity = '0';
    }
});

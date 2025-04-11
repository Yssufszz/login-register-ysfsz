const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const themeSwitch = document.getElementById("theme-switch");
const toggleSound = new Audio('assets/audio/swoosh-3-323645.mp3');
const body = document.body;

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

themeSwitch.addEventListener('change', () => {
  themeSwitch.disabled = true;

  toggleSound.currentTime = 0;
  toggleSound.play();

  setTimeout(() => {
    body.classList.toggle('dark-mode');
    
    themeSwitch.disabled = false;
  }, 500);
});

document.getElementById('theme-switch').addEventListener('change', () => {
  toggleSound.play();
});

function togglePassword(id, el) {
  const input = document.getElementById(id);
  const icon = el.querySelector('i');

  icon.classList.add("rotate");
  setTimeout(() => {
    icon.classList.remove("rotate");
  }, 500);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
const buttonUp = document.getElementById('button-up');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = 'block';
  } else {
    buttonUp.style.display = 'none';
  }
}

buttonUp.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});

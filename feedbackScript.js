let formFeedback = document.getElementById('formFeedback');
let formFeedbackInput = formFeedback.querySelector('input');
let formFeedbackButton = formFeedback.children[2];

formFeedbackInput.addEventListener('click', function(e) {
  if (this.checked) {
    formFeedbackButton.disabled = false;
  } else {
    formFeedbackButton.disabled = true;
  }
});
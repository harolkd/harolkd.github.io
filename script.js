function copyEmail(emailText, feedbackElementId) {
  navigator.clipboard.writeText(emailText).then(function() {
    const feedback = document.getElementById(feedbackElementId);
    if (feedback) {
      feedback.textContent = 'Copied to clipboard!';
      setTimeout(function() {
        feedback.textContent = '';
      }, 2000);
    }
  }).catch(function(err) {
    console.error('Failed to copy: ', err);
  });
}

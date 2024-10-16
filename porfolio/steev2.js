function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch("YOUR_SCRIPT_URL", {
      method: 'POST',
      body: new URLSearchParams(formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => response.json())
      .then(data => {
        document.getElementById("myForm").reset();
        document.getElementById("success-message").style.display = "block";
      }).catch(error => {
        console.error('Error!', error.message);
      });
  }
const form = document.getElementById('contact-form');
const result = document.getElementById('contact-result');
let contactInputs = document.querySelectorAll('.contact-input')


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."
  result.style.color = "#fdfdfd"

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
        result.innerHTML = json.message;
        result.style.color = "springgreen"
    } else {
        console.log(response);
        result.innerHTML = json.message;
        result.style.color = "#f00000"
    }
  })
  .catch(error => {
    console.log(error);
      result.style.color = "#f00000"
    result.innerHTML = "Error - Something went wrong!";
  })
  .then(function() {
    form.reset();
    contactInputs.forEach(input => input.style.backgroundColor = 'transparent')
    setTimeout(() => {
        result.style.display = "none";
        result.style.color = "#fdfdfd"
    }, 4000);
  });
});
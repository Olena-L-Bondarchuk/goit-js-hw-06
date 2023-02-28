const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    alert("Please fill the fields");
    return
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };
   event.currentTarget.reset();
  console.log(userInfo);
})


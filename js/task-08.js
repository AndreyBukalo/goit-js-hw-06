const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert("Всё поля должны быть заполнены ! ");
    }
    else {
        const dataBase = { email: email.value, password: password.value };
        console.log("Data-base ->", dataBase);
          event.currentTarget.reset();
    }
  
    }

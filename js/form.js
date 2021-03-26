// Validating Name Entry
        const text = document.querySelector('#text');
        const textError = document.querySelector('.text-error');
        text.addEventListener('input', function () {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}([ ][A-Z]{1}[a-z]{2,}){0,}$');
            if (nameRegex.test(text.value))
                textError.textContent = "";
            else textError.textContent = "Name Is Incorrect";
        });

        // Displaying Slider Values
        const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        // output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        });

        // Validating Email Entry
        const email = document.querySelector('#email');
        const emailError = document.querySelector('.email-error');
        email.addEventListener('input', function () {
            let emailRegex = RegExp("^[a-z0-9]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9]+\\.([a-z]{2,4})+((\\.[a-z]{2,4})?)$");
            if (emailRegex.test(email.value))
                emailError.textContent = "";
            else emailError.textContent = "Incorrect Email-Id";
        });

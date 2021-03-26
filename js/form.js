//name entry
        const text = document.querySelector('#text')
        const textError = document.querySelector('.text-error')
        text.addEventListener('input',function() {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
            if(nameRegex.test(text.value))
            textError.textContent = "Name is Incorrect"
        })
//display slider value
        const salary = document.querySelector('#salary')
        const output = document.querySelector('.salary-output')
        output.textContent = salary.value
        salary.addEventListener('input',function() {
            output.textContent = salary.value
        })

        //validate email
        const text = document.querySelector('#text')
        const textError = document.querySelector('.text-error')
        text.addEventListener('input',function() {
            let emailRegex= RegExp("^[a-z0-9]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9]+\\.([a-z]{2,4})+((\\.[a-z]{2,4})?)$")
            if(emailRegex.test(text.value))
            textError.textContent = "Email is Invalid"
        })

        //validate mobile
        const phone = document.querySelector('#tel')
        const phoneError = document.querySelector('.phone-error')
        phone.addEventListener('input' , function() {
            let phoneRegex = RegExp("^[0-9]{2}[\\s][1-9]{1}[0-9]{9}$")
            if(phoneRegex.test(phone.value))
            phoneError.textContent = "Phone is Invalid"
        })

        //validate password

        const pass = document.querySelector('#pwd')
        const passError = document.querySelector('.pass-error')
        pass.addEventListener('input',function() {
            let passRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=\\.~`])(.){8,}$")
            if(passRegex.test(pass.value))
            passError.textContent = "Password is invalid"
        })

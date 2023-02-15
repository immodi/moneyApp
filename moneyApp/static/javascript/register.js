const userNameField = document.querySelector("#userNameField")
const emailField = document.querySelector("#emailField")
const feedBackArea = document.querySelector(".invalid-feedback")
const emailFeedBackArea = document.querySelector(".invalid-email-feedback")


emailField.addEventListener("keydown", (e) => {
    const emailValue = e.target.value
    
    if (emailValue.length > 0) {
        fetch("/authentication/validate-email", {
            body: JSON.stringify({email: emailValue}),
            method: "POST",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data)
            if (data.email_error) {
                emailField.classList.add("is-invalid") 
                emailFeedBackArea.style.display = 'block'
                emailFeedBackArea.innerHTML = `<p>${data.email_error}</p>`
            } else if (!data.email_error) {
                emailField.classList.remove("is-invalid")
                emailFeedBackArea.style.display = 'none'
            }
        })
    }
})  

userNameField.addEventListener("keydown", (e) =>{
    const userNameVal = e.target.value
    
    if (userNameVal.length > 0) {
        fetch("/authentication/validate-username", {
            body: JSON.stringify({username: userNameVal}),
            method: "POST",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data)
            if (data.username_error) {
                userNameField.classList.add("is-invalid") 
                feedBackArea.style.display = 'block'
                feedBackArea.innerHTML = `<p>${data.username_error}</p>`
            } else if (!data.username_error) {
                userNameField.classList.remove("is-invalid")
                feedBackArea.style.display = 'none'
            }
        })
    }
})




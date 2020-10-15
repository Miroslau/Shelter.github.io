let formData = document.getElementById("output").innerText;

let sendData = (event) => {
    event.preventDefault();

    let userName = document.getElementById('username').value;
    let userPassword = document.getElementById('password').value;
    let userEmail = document.getElementById('email').value;

    let user = {
        name: userName,
        email: userEmail,
        password: userPassword
    };
    

    let json = JSON.stringify(user);
    let request = new XMLHttpRequest();

    request.open("POST", "http://localhost:4000/users/register");
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            document.getElementById("output").innerHTML=request.responseText;
        }
    }

    request.send(json);
}

let submit = document.querySelector(".dataForm");
submit.addEventListener("click", sendData);
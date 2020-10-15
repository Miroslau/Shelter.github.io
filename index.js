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

    if(userName !== "" && userEmail !== "" && userPassword !== "") {
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
    } else {
        alert("Введите все данные");
        return false;
    }
}

let submit = document.querySelector(".dataForm");
submit.addEventListener("click", sendData);
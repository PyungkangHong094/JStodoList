const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
//쿼리셀렉터를 사용하면 (<#사용한id> <넣은것들 ex button, input>)
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//기능을 넣어준것이다 (이름은 자유)
// function onLoginBtnClick(){
//     const value = loginInput.value;
//     if(value === ""){
//         alert("Please write your name");
//     }
//     else if(value.length > 15){
//         alert("Your name is too long.");
//     }
//     else if(value.length < 5){
//         alert("Your name is too short.");
//     }
//     console.log(loginInput.value);
//     console.log("click!!");
// }

function onLoginSubmit(event){
    event.preventDefault();    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}` // greeting.innerText = "Hello " + username;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//클릭이라는 이벤트를 넣어줌
// loginButton.addEventListener("click",onLoginBtnClick);

// function handeLink(event){
//     event.preventDefault();
//     console.dir(event);
// }

//summit evern
loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handeLink)

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    // show the greetings 
    // greeting.innerText = `Hello ${savedUserName}`
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUserName);

}
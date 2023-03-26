const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting"); //h1

// 오타로인한 오류방지 , 반복되는 문자,String만 포함된 변수 저장(대문자는 관습이다)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) { //로그인시 진행 (event object 정보를 담은 채로 함수 호출)
    event.preventDefault(); // submit의 기본 동작 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);//form 로그인 화면 숨기기
    const username = loginInput.value; //login시 입력된 값 username 저장
    localStorage.setItem("USERNAME_KEY", username) //웹의 db에 저장
    paintGreetings(username); //입력받은 username 으로 greeting 화면 출력 함수 실행
}


function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);  
    greeting.innerText = `W E L C O M E . ${username}`;
}

// 새로고침시 초기화 되지 않게 db저장시 계속 화면 띄우기
const saveUsername = localStorage.getItem("USERNAME_KEY");
if(saveUsername === null ){ //storage에 사용자 이름의 값이 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인화면 띄우기 
    loginForm.addEventListener("submit", onLoginSubmit); //로그인 submit시 실행되는 함수 실행
}else {
    paintGreetings(saveUsername);
}

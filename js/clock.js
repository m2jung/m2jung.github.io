const clock = document.querySelector("h2#clock"); 

function getClock() {
    const date = new Date(); //날짜 시각 객체 변수로 선언
    //padStart(문자열수,앞에 채울 문자) -> Date는 number타입, String으로 형변환을 해야한다.
    
    const year = date.getFullYear();
    const month = date.getMonth()+1; //0월 부터 시작이므로 
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`; 
}

setInterval(getClock,1000); //밀리초마다 함수 실행

const todoStart = document.querySelector("#main-todo");
const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let toDos = []; //안에 값이 변동이 될 수 있으므로 let
const TODO_KEY = "todos";

//2. 저장하려는 값을 문자열로 배열에 저장한다. (localStorge는 문자열 형태로 저장해야 한다)
function saveTodos() { //value localStorage에 저장
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos)); //배열 형태를 유지하고 문자열로 저장JSON.stringify(),parse()
}

// 삭제 메서드 
function deleteTodo(event) { //event는 해당 객체의 정보를 담고 있음(어떤 버튼을 클릭했느냐를 알 수 있다)
    const li = event.target.parentElement; //클릭된 객체의 부모 태그 
    li.remove();//클릭한 객체는 지우기
    //클릭한 id와 같은 id의 value 제외한 배열 객체 가져오기 
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id)); //li id 는 number타입이라 형변환
    saveTodos();
}

//화면에 보여지는 메서드 
function paintTodo(newTodo) { //Submit해서 얻은 input값을 전달받음
    const li = document.createElement("li"); //li 태그 생성
    li.id = newTodo.id; //html li의 id 적용
    const span = document.createElement("span");// li 안에 span 생성
    const button = document.createElement("button"); // span 옆에 삭제버튼
    button.innerText = "x"; 
    button.addEventListener("click",deleteTodo);
    span.innerText = newTodo.text ;
    //appendChild 는 마지막에 추가되도록 한다.
    li.appendChild(span); //li의 자식 태그 span 
    li.appendChild(button); //li의 자식 태그 button
    todoList.appendChild(li);//index에 있는 ul의 자식 태그 li 지정
}

//1. 맨 처음 실행되는 메서드 
function handleTodoSubmit(event) { 
    event.preventDefault(); //todo li 추가 submit 새로고침 방지 함수
    const newTodo = todoInput.value; //input.value 변수 선언
    todoInput.value = ""; //submit 후 input 은 텍스트 비우기
    const newTodoObj = {  //각각의 id 값을 가져 구별할 수 있는 value를 객체로 초기화
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); //value 는 배열에 저장 
    saveTodos();//문자열로 저장
    paintTodo(newTodoObj); //입력된 value paintTodo 함수로 전달 
}


todoForm.addEventListener("submit",handleTodoSubmit);

//3. 저장된 값들 정리. 각각의 li 에 함수 적용가능  
const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos != null) { // 만약 localStorage에 저장된 todo가 없으면
    const parsedTodos = JSON.parse(savedTodos); //배열 형태 문자열을 다시 깔끔하게 문자열로 저장
    toDos = parsedTodos; //마지막 문자열 형태로 let 배열에 저장 
    parsedTodos.forEach(paintTodo);//forEach : 배열의 item 각각에 함수 적용 가능 , 값의 입력 함수   호출
}


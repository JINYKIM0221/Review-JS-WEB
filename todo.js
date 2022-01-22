const toDoForm = document.getElementById("todo-form");//html에서 todo-form구역 가져옴
const toDoInput = document.querySelector("#todo-form input");//html에서 todo-form구역의 input 가져옴
const toDoList = document.getElementById("todo-list");//html에서 todo-list구역 가져옴
const TODOS_KEY = "todos";

let toDos = [];//const 대신 let을 써서 toDos array에 담긴 내용을 덮어씌우는 것이 아닌 기존에 있던 것을 유지한채 새로운 것을 추가

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}//브라우저에 localStorage.setItem을 통해서 TODOS_KEY(todos)와 toDos array를 저장
//Json.stringify()는 해당되는 모든 것을 string으로 바꿔줌

function deleteToDo(event) {
  const li = event.target.parentElement;//어느 부분에서 행동이 발생되었는지 경로를 알려줌
  li.remove();//액션이 발생된 경로의 li삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//toDos array중 지우려는 toDo.id가 li.id가 다르면 filter를 통해 가려낸 뒤 남긴다
  saveToDos();//li.id는 string toDo.id는 number이므로 타입이 다르다 parseInt를 통해 li.id를 number타입으로 바꿈
}//toDos DB에서 todo를 지운 뒤 saveTodo();를 불러와야 안지워진 나머지가 다시 localstorage에 저장된다

function paintToDo(newTodo) {
  const li = document.createElement("li");//html에 li생성
  li.id = newTodo.id;//li의 아이디를 newTodo의 아이디와 같게함
  const span = document.createElement("span");//html에 span생성
  span.innerText = newTodo.text;//span의 텍스트를 newTodo의 텍스트로 정함
  const button = document.createElement("button");//html에 버튼 생성
  button.innerText = "❌";//버튼에 text생성
  button.addEventListener("click", deleteToDo);//버튼이 클릭되면 deleteTodo발생
  li.appendChild(span);//span을 li의 자식으로 넣음
  li.appendChild(button);//button을 li의 자식으로 넣음
  toDoList.appendChild(li);//li를 toDolist의 자식으로 넣음
}//append는 마지막에 써야함

function handleToDoSubmit(event) {
  event.preventDefault();//submit이 일어났을 때 자동기본행동을 막음
  const newTodo = toDoInput.value;//newTodo는 사용자 입력 값을 넣음
  toDoInput.value = "";//사용자 입력값을 input에서 사라지게함
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };//array에 id:xx,text:형태로 넣어줌 - 원하는 것을 삭제하기 위해선 구분자가 필요하기 때문 (EX)ID
  toDos.push(newTodoObj);//toDos array에 newTodoObj함수를 넣어줌
  paintToDo(newTodoObj);//paintTodo에 newTodoObj를 넣음으로써 화면에 나오게함
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);//저장된 localStorage에서 TODOS_KEY("todos")를 가져옴
if (savedToDos !== null) {//savedToDos가 비어있지 않다면
  const parsedToDos = JSON.parse(savedToDos);//parsedToDos라는 함수에 JSON.Parse로 string을 array형태로 저장
  toDos = parsedToDos;//toDos array에 array형태로 아이템 저장
  parsedToDos.forEach(paintToDo);//toDos[0],toDos[1]...,등 각각의 array요소에 함수가 적용되도록 forEach사용
}






//---------------todolist을 작성하고 화면에 표시하고 버튼을 누르면 삭제되는 것------------

//todo 브라우저 저장 - localstorage를 이용 근데 localstorage는 only text만 저장 array는 저장안됨
//localstorage에 저장하기 위해서는 text형태 - json.stringify씀
//다시 string형태를 array로 저장하고 싶음 - json.parse


//todos는 항상 빈 array로 시작. 다시 input에 값을 쓰면 기존에있던 것은 새걸로 대체됨 우리는 계속 남길 원함 - array변수를 const -> let으로 변경하여 변경될 수 있게 바꿈

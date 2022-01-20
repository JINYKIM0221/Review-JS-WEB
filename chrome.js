const loginform = document.querySelector("#login-form");//html에서 id가 login-form이라는 섹션을 가져옴
const loginInput = document.querySelector("#login-form input");//html에서 id가 login-form 섹션에서 input인자를 가져옴
const greeting = document.querySelector("#greeting");

const HIDDEN_NAME = "hidden";
const USERNAME_KEY = "username";

function loginsubmit(event){
    event.preventDefault();//submit의 기본동작인 정보전달 후 새로고침이 안되게 막음
    const username = loginInput.value;//input에 작성되는 사용자의 내용
    localStorage.setItem(USERNAME_KEY,username);//localstorage에 아이템 저장  {key:value}이런식
    loginform.classList.add(HIDDEN_NAME);//사용자의 아이디를 적으면 로그인 폼이 사라지게함 class = "hidden"
    paintgreeting(username);//우리가 로그인 폼에 작성했던 username을 paintgreeting함수에 넣어 사용하게됨
    

}//event는 loginsubmit에서 일어나는 일의 정보를 담는 "그릇"역할을 한다 target이어디고 경로가 어딘지
//그런 정보에 preventDefault()를 설정해주면 원래는 submit의 기본 행동인 정보를 전달 후 페이지 새로고침이 자동실행되는 것을 막는다

loginform.addEventListener("submit",loginsubmit);//loginform에서 submit이라는 액션이 일어나면 loginsubmit 함수가 일어남
//addEventListener에 loginsubmit()안쓰는 이유는 브라우저 자체가 실행 할 수 있게 하기위함
function paintgreeting(inputusername){
    greeting.innerText = `Welcome! ${inputusername}`;
    greeting.classList.remove(HIDDEN_NAME);

}

const savedusername = localStorage.getItem(USERNAME_KEY);//일전에 저장한 ID의 key를 가져온다
//key를 가져오게되면 key값은 고유값이기 때문에 그에 맞는 value를 가져오게된다

if (savedusername === null){
    loginform.classList.remove(HIDDEN_NAME);//만약 아예 처음 웹페이지에 왔다면 로그인폼은 비어있고 localstorage에 아무것도 없게 된다
    //그래서 숨겨져 있던 로그인 폼을 나오게 하여 아이디를 적을 수 있게한다.
    loginform.addEventListener("submit", loginsubmit);

} else {
    paintgreeting(savedusername);//만약 한번이라도 아이디를 치고 접속했다면 localstorage에서 저장된 key값을 가져와 paintgreeting함수에 넣고 실행한다
    
}

//1.loginform에 사용자가 적을 아이디의 정보를 보내줘야함
//2.하지만 button을 사용하는 대신에 enter와 버튼 두개로 작동할 수 있게 submit을 사용함
//3.submit의 기본은 정보 전달 후 페이지 새로고침이다 우린 이걸 원하지 않음
//4.기본 작동을 멈추기 위해서 preventDefault()를 사용함

//login을 성공하지만 페이지를 새로고침하면 또 다시 리셋됨 우린 이게 귀찮음
//그래서 localstorage를 통해 브라우저 내에 입력값을 저장시키려고함 새로고침해도 계속 사용할 수 있게

//우리는 loginform에 값을 작성하면 로그인 폼이 사라지고 welcome + 입력값이 나오게 하고 싶음
//loginform사라지게 하는 방법 : css에 display:none을 'hidden'으로 저장 이용해서 해당 class에 넣어서 사라지게함
//welcome나오게 하는 방법 : greeting안 class에 hidden을 넣고 로그인 폼이 사라지면 나타날 수 있게하면됨
//그 작동을 밑에 if문을 통해서 작동시킴

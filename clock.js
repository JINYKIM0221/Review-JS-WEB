const clock = document.querySelector("h2#clock");//html에 id=clock이라는 h2를 선택한다는 뜻

function getclock() {
    const date = new Date();//date 에 new Date()입력 - 생성자 함수 규칙 적용
    const hours = String(date.getHours()).padStart(2,"0");//시간을 가져옴 padstart로 "01"이런 식으로 나오게함 padstart는 sting.padstart이런 식이므로 number인 gethours를 숫자로 바꿈
    const minutes = String(date.getMinutes()).padStart(2,"0");//분을 가져옴 padstart로 "01"이런 식으로 나오게함 padstart는 sting.padstart이런 식이므로 number인 getminutes를 숫자로 바꿈
    const seconds = String(date.getSeconds()).padStart(2,"0");//초 가져옴 padstart로 "01"이런 식으로 나오게함 padstart는 sting.padstart이런 식이므로 number인 getminutes를 숫자로 바꿈
    clock.innerText = `${hours}:${minutes}:${seconds}`;//html에서 가져온 clock요소 안에 `${}`를 사용해서 시간:분:초 나오게 만듦

}
getclock();
setInterval(getclock,1000);

//시간을 가져오기 위해서 필요한 것
//오늘 시간 분 초, 시간을 움직이게 만드는 것 처럼 보이는 setInterval("적용할 함수","반복시간(ms)")









// padstart,padend
// string.padstart(최소 글자수, "나머지 채울 글자 수")
// ex) "a".padstart(15,"X") : 만약 15자 미만일시 나머지 앞 자리를 "X"로 채움



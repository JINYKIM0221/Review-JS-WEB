const images = ["01.jpg","02.jpg","03.jpg"];//images array안에 요소를 넣어줌 - 파일 이름이 같아야함

const chosenimage =images[Math.floor(Math.random() * images.length)];//quote와 마찬가지로 랜덤하게 나오게함

const addimage = document.createElement("img");//createElement를 이용해서 body안에 img구역을 만들어줌


addimage.src = `img/${chosenimage}`;//어떤이미지가 들어갈지 이미지 주소를 넣어줌 <img src = "img/${}"

document.body.appendChild(addimage);
//addimage를 html이 img 구역을 만들어주는 함수로 정했으므로 appendchild를 이용해 addimage발동



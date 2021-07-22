const images = ["0.jpg","1.jpg","2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

//bgImage를 생성하고 크리에이트 엘레먼트를 넣어준다음 "이미지태그를 넣는다 "
const bgImage = document.createElement("img");

//이미지를 가져오는 법
bgImage.src = `img/${chosenImage}`;

//appendchild는 창에 띄워주는 역활 
document.body.appendChild(bgImage);
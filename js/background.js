const images = ["universe1.png","universe2.jpg"];
const randomImage = (images[Math.floor(Math.random() * images.length)]);

// js로 html태그 생성 
const backgroundImage = document.createElement("img");
// 태그의 src 지정 (아직 body엔 존재하지 않은 상태)
backgroundImage.src=`image/${randomImage}`; 
document.body.appendChild(backgroundImage);

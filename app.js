const h1 = document.querySelector("div.hello:first-child h1");

// title.innerText="got you!";

//console.log(title.id); //title


//querySelector 는 element를 CSS방식으로 검색할수 있다  (.<CSS> something )
//const title = document.querySelector(".hello h1"); 

//h1 html emelemet mdn (머신 디벨러퍼 머신)

function handleTitleClick() {
    const clickClass = "actived";
    //css랑 이름이 같아야한다
    //h1.className === clickClass
    if(h1.classList.contains(clickClass)){
        // h1.className = "";
        h1.classList.remove(clickClass);
    }
    else{
        // h1.className = clickClass;
        h1.classList.add(clickClass);
    }
}

h1.addEventListener("click", handleTitleClick);

//클릭을 했을때 글자가 바뀌는 현상
// function handleTitleClick_test() {
//     const currentColor = h1.style.color;
//     let  newcolor;
//     console.log(h1.style.color);
//     // h1.style.color ="blue";
//     console.log(h1.style.color);
    
//     if(currentColor === "blue"){
//         newcolor = "tomato";
//     }
//     else{
//         newcolor="blue";
//     }
//     h1.style.color = newcolor;
// }
// h1.addEventListener("click", handleTitleClick_test);

// function handleMouseEnter() {
//     console.log("mouse is here!");    
// };
// //사이즈 바뀌면 바뀌는거 
// function handlewindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// //카피하면 보이는거 
// function handlewindowCopy(){
//     alert("Copier!")
// }

// function handleWindowoffline(){
//     alert("No Wifi");
// }

// function handlewindowonline(){
//     alert("You have Wife Set up");
// }
// title.onclick = handleTitleClick;
// title.addEventListener("mouseenter",handleMouseEnter);

// window.addEventListener("resize", handlewindowResize); //사이즈 바뀌면 바뀌는거 
// window.addEventListener("copy", handlewindowCopy); //카피하면 보이는거 
// window.addEventListener("offline", handleWindowoffline); // 와이파이가 있으면 
// window.addEventListener("online", handlewindowonline); //와이파이가있으면 보여지는거 
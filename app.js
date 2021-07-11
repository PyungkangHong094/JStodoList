// 바뀌지않는거 const
const a = 10;
const b = 2;
const myName = "pk";
//let 은 배뀌는 거 var은 쓰지마라 
let c = 10;


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName + "hi");

//boolean  true false undifine 
const amIFat = false;
console.log(amIFat);


//정리하는거 정말 중요
const mon = "mon";
const tue = "tue";

const daysOfWeek = ["mon","tu","we","thu","fre",];
console.log(daysOfWeek);
//dayofweek 라는 부분에 한군대를 보여줘라는 의미 
//get item from array 
console.log(daysOfWeek[2]);



//daysof week 에 하나를 추가해주는거 
daysOfWeek.push("sun");


console.log(daysOfWeek);

const toBuy = ["potatot"];
toBuy.push("kimbab");



// Objects 중요하다 

//플레이어가 0 가 이름이고 
//플레이어가 1 이 포인트

const player_bad_example = ["pk", 12, false,"what?"] //이런건 안좋다 
const player = {
    // 플레이어를 설정하고 이름,포인트, 그사람의 상태 (fat )인지 설정해준다 
    name : "pk",
    points: 10,
    fat: true,
};

// player.points() 이런건 없다 


console.log(player);
console.log("====");
console.log(player.name);
player.fat =false;  //안에있는건 바꿔짐 플레이어는 바꿀수없음 
console.log(player);
player.lastname = "popo"; //이렇게 넣을수있다 업데이트라는 말이다 
console.log(player);

player.points = player.points+ 1;
console.log(player.points);
console.log("====");




//Function part 
console.log("====Function====");
// 계속 코드를 만들고싶지않음 
// 예를 들어서 헬로우를 만들꺼야 function 없을떄 
console.log("hello"); // 계속 만들고싶다 
// 어떻게 펑션을 만들껀가 

function sayHello_a(){ //()안에 보내고싶은거를 넣어야한다 예시
    console.log("hi say your name ");
}
function sayHello_b(nameOfPerson, age){ //()안에 보내고싶은거를 data 넣어야한다 예시
    console.log("hi my name is "+ nameOfPerson+" and I'm"+age);
}
sayHello_a();
sayHello_a();
sayHello_a();
// 버튼 눌러서 보내려면 리플레이스 하는거다 

sayHello_b("pk", 10);
sayHello_b("pk!!!", 20);
console.log("==== Gamer ====");
const gamer = {
    name : "gamer pk",
    sayHello_a:function(otherPerson) {
        console.log("hello"+ otherPerson);
    },
};

console.log(gamer.name)
gamer.sayHello_a("꼬물");

console.log("====");


// 플러스 펑션 

function plus(a,b){ //이름이 무엇이든 상관없음 
    console.log(a + b);

}
function div(a,b){
    console.log(a / b);
}

plus(1,2)
div(4,2)

// 데이터 타입
/* let을 말해서  */

const number_A = 5; 
let isPKFat = true;

isPKFat = false; // 업데이트 베류어블 

/* 리스트 []
   
 */

const calculator = {
    add: function(a,b){
        console.log("더하기 = " + a+b);
    },
    sub: function(a,b){
        console.log( a - b);
    },
    div: function(a,b){
        console.log("나누기 = " + a/b);
    },
    mul: function(a,b){
        console.log("곲하기 = " + a*b);
    }
};

calculator.add(7,7)
calculator.sub(2,3)
calculator.div(7,7)
calculator.mul(7,7)


// seller.name
// seller.name = "pkhong" //update the name 
// seller.sexy = "soon"  // put it in the object 

function mul(a,b){
    // console.log(a*b);
    console.log("=======")
    console.log("곲하기는? " + a*b);
}

mul(100,987);
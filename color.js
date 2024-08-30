
const randomColor = () =>{    
let color ="#";
let variales =["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
for(let i = 0; i<6; i++){
    let n = Math.floor(Math.random()*16);
    color+= variales[n];
};
const myElement = document.getElementById("demo");
myElement.style.backgroundColor = color;
 return color;
};









let boxes=document.querySelectorAll(".d");
let status=document.querySelector("#status");
let fe=document.querySelector(".f");
let newbtn=document.querySelector("#newgame");
let restbtn=document.querySelector(".e");
let turn=true;
let i=0;
let constant=()=>{
    turn=true;
    i=0;
    allboxes();
    fe.classList.add("hide");

}
let noboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
let allboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let showdraw=()=>{
    status.innerText=`Game is DRAW.Start a new game`;
    fe.classList.remove("hide");
    noboxes();
}
let showwinner=(ok)=>{
    status.innerText=`Congraulations! Winner is PLAYER ${ok}`;
    fe.classList.remove("hide");
    noboxes();
}
let checkwinner=()=>{
    console.log("ok");
    for(let p of win)
    {
        let a1=boxes[p[0]].innerText;
        let a2=boxes[p[1]].innerText;
        let a3=boxes[p[2]].innerText;
       if(a1!="" && a2!="" && a3!="")
       {
        if(a1===a2 && a1===a3)
        {
            console.log("win");
            showwinner(a1);
        }
        if(i==9)
        {
            showdraw();
        }
       }
    }
}

boxes.forEach((d)=>{
    d.addEventListener("click",() =>{
       if(turn)
       {
        d.innerText="O";
        turn=false;
       }
       else
       {
        d.innerText="X";
        turn=true;
       }
       d.disabled=true;
       i++;
       checkwinner();
    });
});
newbtn.addEventListener("click",constant);
restbtn.addEventListener("click",constant);
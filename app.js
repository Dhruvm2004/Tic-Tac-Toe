let boxes=document.querySelectorAll('.box');
let rst=document.querySelector('#reset');
let turn0=true;
let msg=document.querySelector('#msg');
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("clicked")
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
rst.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    msg.innerText="";
    turn0=true;
})
checkWinner=()=>{
    let isdraw=true;
    for(let pattern of winPatterns){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3){
                console.log("winner");
                msg.innerText=pos1+" is the winner";
                boxes.forEach((box)=>{
                    box.disabled=true;});
                    return;

               
                }
            }
        }
        boxes.forEach((box)=>{
            if(box.innerText==""){
                isdraw=false;
            }
        });
        if(isdraw){
            msg.innerText="It's a draw";
    }
}

    


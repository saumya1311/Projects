let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msgs=document.querySelector("#msg");
const userscorepara=document.querySelector("#me");
const compscorepara=document.querySelector("#com");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const plygame=(userChoice)=>{
    console.log("user choice=", userChoice);
    const compchoice=gencompchoice();
    console.log("computer choice=", compchoice);

    if (userChoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userChoice,compchoice);   
    };
};

const drawgame=()=>{
    console.log("You both are friends. Everybody loses/ go home.")
    msgs.innerText="You both are friends. Everybody loses/ go home."
    msgs.style.backgroundColor="#EAB2A0"
};

const showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;

        console.log("You winn ......for now");
        msgs.innerText="You winn ......for now";
        msgs.style.backgroundColor="#5C5470"
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log(" Sheh, you lose.");
        msgs.innerText=" Sheh, you lose.";
        msgs.style.backgroundColor="#9F73AB"

    };
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        plygame(userChoice);
    });
});
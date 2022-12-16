let userName = prompt("Введіть ім'я");
if (userName != null && userName != "") {
   document.getElementById("UserName").innerText = userName;
}
let usernum, botnum, userscore = 0, botscore = 0;

function Generate() {
    

    usernum = Math.floor(Math.random() * 20);
    botnum = Math.floor(Math.random() * 20);
    document.getElementById("UserNumber").innerText =  ("Випадкове число\n" + usernum);
    document.getElementById("BotNumber").innerText =  ("Випадкове число\n" + botnum);
    if ( usernum >  botnum) {
                document.getElementById("UserScore").innerText = ("Кількість балів\n"+(++userscore));
    }
    else if ( usernum<  botnum) {
               document.getElementById("BotScore").innerText = ("Кількість балів\n"+(++botscore));
    }
    else {alert("Випали однакові значення");    }
	
	if (userscore == 3) {
        alert("Ви одержали перемогу!");
        location.href=location.href;       
    }
    else if (botscore == 3) {
        alert("Нажаль ви програли");
        location.href=location.href;
        
    }
}

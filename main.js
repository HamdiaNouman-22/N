const inputemail = document.getElementById("input-email");
const elementid=document.getElementById("input-email");
const getpage=document.getElementById("page2");
 getpage.style.display='none';
function checkinput() {
    console.log(inputemail.value);
    var str=inputemail.value;
var char="@";
    console.log(inputemail.value + "dd");
    var ans=str.indexOf(char);
    if(ans!=-1){
        elementid.id = "input-email";
        showpage(2);
    }
    if (inputemail.value == "") {
        const msg = document.getElementById("error1");
        msg.textContent = "Valid email required";
        elementid.id = "alertmsg";
        showpage(1);
    }
    else if(ans==-1) {
        const msg = document.getElementById("error1");
        msg.textContent = "Valid email required";
        elementid.id = "alertmsg";
        showpage(1);
    }
    console.log("finish");
}

function showpage(pagenum) {
    if (pagenum == 2) {
        console.log(2);
        const page = document.getElementById("page1");
        page.style.display = 'none';
        const pagedisplay = document.getElementById("page2");
        pagedisplay.style.display = 'block';
        output();
    }
    if (pagenum == 1) {
        const page = document.getElementById("page1");
        page.style.display = 'block';
        const pagedisplay = document.getElementById("page2");
        pagedisplay.style.display = 'none';
    }

}
function output() {
    const outputitem = document.getElementById("output");
    console.log(inputemail.value);
    outputitem.textContent = inputemail.value;

}

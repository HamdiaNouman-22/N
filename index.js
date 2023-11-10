const inputemail = document.getElementById("input-email");
const inputvalue = inputemail.value;
const elementid = document.getElementById("input-email");
var count = 0;
var temp = 0;
function checkinput() {
  console.log(inputemail.value);
  for (i = 0; i < inputemail.value.length; i++) {
    console.log(i + "start");
    if (inputemail.value[i] != '@' && i >= inputemail.value.length) {
      console.log(1);
      const msg = document.getElementById("error1");
      msg.textContent = "Valid email required";
      inputemail.id = "alertmsg";
      showpage(1);
      break;
    }
    else if (inputemail.value[i] == '@' && i < inputemail.value.length) {
      console.log(2);
      showpage(2);
      break;
    }

  }
  console.log(inputemail.value + "dd");
  if (inputvalue == "") {
    const msg = document.getElementById("error1");
    msg.textContent = "Valid email required";
    elementid.id = "alertmsg";
    showpage(1);
  }
  else {
    showpage(2);
  }
  console.log("finish");
}


function output() {
  const outputitem = document.getElementById("output");
  console.log(inputemail.value);
  outputitem.textContent = inputemail.value;

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


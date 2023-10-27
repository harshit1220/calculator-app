let string = "";
let buttons = document.querySelectorAll(".btn");
console.log(buttons);
buttons = Array.from(buttons);
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log('e.target.innerHTML', e.target.innerHTML)
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "AC"){
        string = ""
        document.querySelector("input").value = string;
    }
    else {
      console.log("e.target", e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

let btn = document.querySelectorAll(".btn");
let string = "";
// console.log(btn);

btn.forEach((array)=>{
    array.addEventListener("click",(event)=>{

        // console.log(event);
        let result = document.querySelector("input");

        if(event.target.innerHTML == "=")
        {
            string = eval(string);
            result.value = string;
        }
        else if(event.target.innerHTML == "C")
        {
            string = "";
            result.value = string;
        }
        else
        {
        string += event.target.innerHTML;
        result.value = string;
        }
        // console.log(string);

    })
})
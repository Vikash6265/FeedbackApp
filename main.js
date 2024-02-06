
let form = document.querySelector("form");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");
let ul = document.querySelector("ul");

// Save data

let saveData = (e) =>{
      
    e.preventDefault();
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let button = document.createElement("button");
    li.className = "list-group-item";
    button.className = "btn";
    
    h1.innerText = select.value;
    p.innerText = textarea.value;
    button.innerText = "Remove";

    if(h1.innerText >= 3)
    {
        li.style.color = "green"
        li.style.backgroundColor = "yellow";
    }
    else{
        li.style.color = "blue"
        li.style.backgroundColor = "plum";
    }
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(button);
    ul.appendChild(li);
    form.reset();

}
form.addEventListener("submit",saveData)


// Remove data

const removeData = (e) =>{

    if(e.target.className.includes("btn"))
    {
        let li = e.target.parentElement;

        if(window.confirm("Are You sure ?"))
        {
            ul.removeChild(li);
        }
    }
};
ul.addEventListener("click",removeData);
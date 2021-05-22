let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

function deleteTask(e){
    e.currentTarget.remove();
}

// the below written function is a call back function as it initiates an automatic call
input.addEventListener("keypress", function(e) {
    if(e.key == "Enter"){
        let task = input.value;
        console.log(task);

        if(!task){
            alert("Error - Adding empty task");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick", deleteTask);
        ul.appendChild(li);
        //ul.insertBefore(li, ol.firstChild); // This line is used to add items as per fifo
    }
} )






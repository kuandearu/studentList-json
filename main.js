fetch("data.json")
.then(response => response.json())
.then(data => {
    data.students.forEach(s => {
        var node = document.createElement("div");
        var textnode = 
        (`<p>Student Id: ${s.id} </p> 
         <p>Student Name: ${s.firstName}  ${s.lastName} </p>
         <p>Student Birthday:  ${s.birthday}</p>
         <p>Student Address:  ${s.address}</p>`);

        node.innerHTML = textnode;

        node.classList.add("student-container");

        var randomColor = getRandomColor();
        node.style.backgroundColor = "transparent";
        
        node.addEventListener("mouseover", function() { 
            node.style.backgroundColor = randomColor;
          });
     
          node.addEventListener("mouseout", function() {
            node.style.backgroundColor = "transparent";
          });
        document.getElementById("student-data").appendChild(node);
    });
})

function getRandomColor(){
    var letter = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}
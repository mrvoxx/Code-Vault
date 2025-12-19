// Get elements from HTML
const button = document.getElementById("btn");
const box = document.getElementById("box");
const link = document.getElementById("link");

// =============================
// 1️⃣ CLICK EVENT ON BUTTON
// =============================
button.addEventListener("click", function(event){

    // event.type tells which event occurred
    console.log("Event Type:", event.type); // click

    // event.target tells which element triggered the event
    console.log("Event Target:", event.target);

    // event.currentTarget is the element that has the listener
    console.log("Current Target:", event.currentTarget);

    alert("Button clicked!");
});

// =============================
// 2️⃣ MOUSE MOVE EVENT ON BOX
// =============================
box.addEventListener("mousemove", function(event){

    // clientX and clientY give mouse position
    // relative to the viewport (browser window)
    console.log("Mouse X:", event.clientX);
    console.log("Mouse Y:", event.clientY);

    box.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

// =============================
// 3️⃣ CLICK EVENT + preventDefault
// =============================
link.addEventListener("click", function(event){

    // preventDefault stops the default action
    // (here it stops opening Google)
    event.preventDefault();

    alert("Link click prevented!");
});

// =============================
// 4️⃣ EVENT BUBBLING EXAMPLE
// =============================

// Parent element
document.body.addEventListener("click", function(){
    console.log("Body clicked");
});

// Child element
box.addEventListener("click", function(event){
    console.log("Box clicked");

    // stopPropagation stops event bubbling
    event.stopPropagation();
});

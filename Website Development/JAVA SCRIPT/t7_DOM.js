<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>DOM Manipulation Learning File</title>
    <style>
        #box {
            padding: 20px;
            background: lightyellow;
            margin-top: 10px;
        }

        .red {
            color: red;
        }
    </style>
</head>

<body>

    <h1 id="title">DOM Manipulation Tutorial</h1>

    <p class="info">This is a paragraph selected by CLASS.</p>
    <p>This is a paragraph selected by TAG.</p>

    <div id="box">This is a content box.</div>

    <button id="change">Change Text</button>
    <button id="create">Create Element</button>
    <button id="remove">Remove Element</button>

    <script>
        /* 
        ===============================================
        👉 WHAT IS DOM MANIPULATION?
        ===============================================
        DOM Manipulation means changing the webpage using JavaScript.
        
        We can:
        1. Select HTML elements
        2. Change text, HTML, or attributes
        3. Change CSS styles
        4. Insert new elements
        5. Delete elements
        */


        /* 
        ===============================================
        👉 1. SELECTING ELEMENTS
        ===============================================
        Different ways to select elements:
        */

        // 1) SELECT BY ID
        let title = document.getElementById("title");

        // 2) SELECT BY CLASS
        let infoText = document.getElementsByClassName("info")[0];

        // 3) SELECT BY TAG
        let firstParagraph = document.getElementsByTagName("p")[1];

        // 4) SELECT USING querySelector (selects FIRST match)
        let box = document.querySelector("#box");

        // 5) SELECT USING querySelectorAll (selects ALL matches)
        let allParagraphs = document.querySelectorAll("p");



        /* 
        ===============================================
        👉 2. DOM PROPERTIES (READING / CHANGING CONTENT)
        ===============================================
        */

        // ⭐ tagName → returns the element’s tag in UPPERCASE
        console.log(title.tagName); // Output: H1
        console.log(firstParagraph.tagName); // Output: P

        // ⭐ .innerText → shows only visible text
        title.innerText = "DOM Manipulation Tutorial (innerText changed)";

        // ⭐ .textContent → shows ALL text even if hidden
        infoText.textContent = "This text was changed using textContent";

        // ⭐ .innerHTML → allows adding HTML code inside element
        firstParagraph.innerHTML = "<b>This paragraph was modified using innerHTML</b>";


        /* 
        ===============================================
        👉 3. ATTRIBUTE MANIPULATION
        ===============================================
        getAttribute() → get attribute value
        setAttribute() → set/change attribute value
        */

        box.setAttribute("data-info", "This is a custom attribute");
        console.log(box.getAttribute("data-info")); // displays in console



        /* 
        ===============================================
        👉 4. STYLE MANIPULATION (INLINE CSS)
        ===============================================
        We can change CSS using JS
        */

        box.style.backgroundColor = "lightblue";
        box.style.border = "2px solid blue";
        box.style.padding = "15px";



        /* 
        ===============================================
        👉 5. INSERTING ELEMENTS (ADD NEW HTML)
        ===============================================
        append()   → adds inside element at end
        prepend()  → adds inside element at start
        before()   → adds before the element
        after()    → adds after the element
        */

        document.getElementById("create").addEventListener("click", () => {

            // create a new <p> element
            let newPara = document.createElement("p");
            newPara.innerText = "🌟 I am a new element added dynamically!";

            // Append to box
            box.append(newPara);

        });



        /* 
        ===============================================
        👉 6. REMOVING ELEMENTS
        ===============================================
        remove()         → removes element itself
        removeChild()    → removes a child element
        */

        document.getElementById("remove").addEventListener("click", () => {

            // remove "infoText" paragraph
            infoText.remove();

        });



        /* 
        ===============================================
        👉 7. MORE INSERT METHODS (BEFORE/AFTER/PREPEND)
        ===============================================
        */

        title.before("➡️ This text is inserted BEFORE the title.");
        title.after("⬅️ This text is inserted AFTER the title.");
        box.prepend("👋 PREPENDED INSIDE BOX | ");
        box.append(" | APPENDED INSIDE BOX 👋");



        /* 
        ===============================================
        👉 8. EVENT-BASED DOM MANIPULATION (CLICK)
        ===============================================
        */

        document.getElementById("change").addEventListener("click", () => {
            box.innerText = "You clicked the button! Content changed ✔️";
            box.classList.toggle("red"); // adds/removes class
        });

    </script>

</body>

</html>

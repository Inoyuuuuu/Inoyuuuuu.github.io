const allElements = document.querySelectorAll('*');

for (const el of allElements) {
    el.style.border = "1px solid red";
}

for (const el of allElements) {
    console.log(el);  // Prints: <div>, <p>, <span>, etc.
}
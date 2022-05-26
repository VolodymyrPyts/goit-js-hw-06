const amountElementItemEl = document.querySelectorAll(".item");
    console.log(`Number of categories: ${amountElementItemEl.length}`);
    console.log("");
amountElementItemEl.forEach(function (number, index) {
    console.log(`Category: ${number.firstElementChild.textContent}`);
    console.log(`Elements: ${number.lastElementChild.children.length}`);
    console.log("");
})
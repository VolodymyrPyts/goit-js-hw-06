// 1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const amountElementItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${amountElementItemEl.length}`);
console.log("")

// 2) Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const lengthCategorieEl = document.querySelectorAll(".item>ul")

for (const itemsEl of amountElementItemEl) {
    console.log(`Category: ${itemsEl.firstElementChild.textContent}`)
    console.log(`Elements: ${itemsEl.lastElementChild.children.length}`)
    console.log("")
}

;

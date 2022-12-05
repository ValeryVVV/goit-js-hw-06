const arrayEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${arrayEl.length}`);

arrayEl.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})
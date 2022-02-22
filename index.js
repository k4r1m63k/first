const text = document.querySelector('.text');
// let reText = '';

// for (let item of text.textContent) {
//     reText += `<span>${item}</span>` 
// }

// второй способ 
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

// text.innerHTML = reText

const spanText = document.querySelectorAll('.text span')
spanText.forEach(item => item.addEventListener('mousemove', function() {
    this.classList.add('active')
}))
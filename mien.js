
const accordionItems = document.querySelectorAll('.value_accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value_accordion_header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})


const toggleItem = (item) => {
    const accordionConent = item.querySelector('.value_accordion-content');

    if (item.classList.contains('accordion-open')) {
        accordionConent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionConent.style.height = accordionConent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}
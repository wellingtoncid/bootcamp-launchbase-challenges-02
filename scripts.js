const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const courseId = card.getAttribute('id');
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
    modal.classList.remove('maximize')
})

document.querySelector('.maximize').addEventListener('click', function(){
    if(modal.classList.contains('maximize') === false){
        modal.classList.add('maximize')
    } else if (modal.classList.contains('maximize') === true) {
        modal.classList.remove('maximize')
    }
})

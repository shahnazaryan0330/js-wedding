window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const openingBtn = document.querySelector('.opening-btn')

openingBtn.addEventListener('click', () => {
    document.querySelector('.opening')
        .classList.add('openingAnim')

    const audio = new Audio('./aram-asatryan-caxikner.mp3')
    audio.volume = 0.1
    audio.play()

    document.querySelector('#scrollBlock').style.overflow = 'auto'

    document.querySelector('.title').classList.add('headerAnim')
    document.querySelector('.img1').classList.add('imgAnim')
    document.querySelector('.cl').classList.add('clAnim')

    const dates = [...document.querySelector('.wedding-date').children]
    dates.forEach(item => item.classList.add('dateAnim'))

    document.querySelector('.main').style.opacity = 1

    document.querySelectorAll('.anim')
        .forEach(item => observer.observe(item))
})


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentElement = entry.target
            const dataId = currentElement.dataset.id
            currentElement.classList.add(dataId)

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
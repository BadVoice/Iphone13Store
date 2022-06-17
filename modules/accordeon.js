const accordeon = () => {

    const charItem = document.querySelectorAll('.characteristics__item')



    charItem.forEach(item => {

        const charBtn = item.querySelector('.characteristics__title')
        const charDesrc = item.querySelector('.characteristics__description')

        let charArr = [charBtn, charDesrc]

        item.addEventListener('click', () => {


            if (charArr[1].classList.contains('open')) {

                charArr[1].style.height = ''

            } else {

                charArr[1].style.height = charArr[1].scrollHeight + 'px'

            }
            charArr[0].classList.toggle('active')
            charArr[1].classList.toggle('open')

        })
    });






}
accordeon()
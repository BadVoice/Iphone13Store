const tabs = () => {
    const cards = document.querySelectorAll('.card-detail__change')
        // const the_title = document.querySelector("title");




    const changeActiveCards = (indexClickedCard) => {
        cards.forEach((card, index) => {
            if (index === indexClickedCard) {
                card.classList.add('active')
                    // the_title.innerHTML = "";
            } else if (index !== indexClickedCard) {
                card.classList.remove('active')
            }
        })
    }


    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            changeActiveCards(index)
        })
    });

}
tabs()
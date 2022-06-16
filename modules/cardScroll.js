const cardScroll = () => {

    const cardLink = document.querySelectorAll('.card-details__link-characteristics')


    cardLink.forEach(element => {


        element.addEventListener('click', () => {
            const id = element.getAttribute("href").substring(1)
            const section = document.getElementById(id)

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }

        })

    });




}
cardScroll()
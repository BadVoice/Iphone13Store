const scroll = () => {

    const links = document.querySelectorAll('.header-menu__item a')


    links.forEach((element) => {

        element.addEventListener('click', (e) => {
            e.preventDefault()


            const id = element.getAttribute("href").substring(1)
            const section = document.getElementById(id)

            console.log(section)

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }

        })

    })



}

scroll()
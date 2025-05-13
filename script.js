function changeMode() {
    let body = document.querySelector('body')
    let button = document.getElementById('mode-btn')

    button.addEventListener('click', () => {
        // classList / className / childNodes
        let img = button.childNodes[1]
        console.log(img)
        if (
            (body.classList === undefined | null) || (body.classList[0] === 'light')) {
                body.className = 'dark'
                img.src = '/images/Group 2.png'
        }
        else {
            body.className = 'light'
            img.src = '/images/Group 1.png'
        }

        
    })
}

changeMode()
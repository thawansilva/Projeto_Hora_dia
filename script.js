function carregar() {  
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia!'
        img.src = 'manha.jpg'
        document.body.style.background = '#8696AA'
    } else if (hora >= 12 && hora < 18) {  
        msg.innerHTML = 'Boa tarde!'
        img.src = 'tarde.jpg'
        document.body.style.background = '#FDAB07'
    } else {
        msg.innerHTML = 'Boa noite!'
        img.src = 'noite.jpg'
        document.body.style.background = '#254B7E'
    }
}
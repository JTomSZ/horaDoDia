function carregar(){
    var titulo = document.getElementById("titulo");
    var mensagem = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    mensagem.innerText = `Agora são ${hora}:${minutos}.`;
    if (hora >= 5 && hora < 12 ){
        mensagem.innerText = `Agora são ${hora}:${minutos} da manhã!`;
        titulo.innerText = "Bom dia!";
        img.src = "manha.png"
        document.body.style.background.img = "manha.png"
    }
    else if (hora >=12 && hora < 18){
        mensagem.innerText = `Agora são ${hora}:${minutos} da tarde!`;
        titulo.innerText = "Boa tarde!";
        img.src = "tarde.png"
    }
    else {
        mensagem.innerText = `Agora são ${hora}:${minutos} da noite!`;
       titulo.innerText = "Boa noite!";
       img.src = "noite.png"
    }
    }


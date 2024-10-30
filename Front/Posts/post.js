document.addEventListener('DOMContentLoaded', async () => {

    let id_usuario = Number(localStorage.getItem('id_usuario'));

    let data = { id_usuario }

    const response = await fetch('http://localhost:3001/api/buscarPosts', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
        const commentsection = document.getElementById('comments');
        result.data.forEach(dados => {
            console.log(dados)

            const card = document.createElement('div');
            card.className = 'postagem';

            const nomeusuario = document.createElement('h2');
            nomeusuario.className = 'h2-usuario';
            nomeusuario.textContent = dados.nome_usuario;

            
            if(dados.id_user == localStorage.getItem('id_usuario')) {
                const span = document.createElement("span")
                span.textContent = "você"
                nomeusuario.appendChild(span)
                nomeusuario.className = 'h2-usuario logado'

            }

            const textodiv = document.createElement('div');
            textodiv.className = 'texto-post';

            const textopost = document.createElement('p');
            textopost.className = 'p-post';
            textopost.textContent = dados.texto;

            card.appendChild(nomeusuario);
            card.appendChild(textodiv);
            card.appendChild(textopost);

            textodiv.appendChild(textopost);

            commentsection.appendChild(card);
        })
    } else {
        console.log("Erro!", result.sql);
    }
});

let botao_enviar = document.getElementById("botao_post");

botao_enviar.onclick = async function (e) {
    e.preventDefault();

    let id_usuario = Number(localStorage.getItem('id_usuario'));
    let nome_usuario = localStorage.getItem('nome_usuario');
    let commentText = document.getElementById("commentText").value;

    let data = { id_usuario, nome_usuario, commentText }

    const response = await fetch('http://localhost:3001/api/post', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);

    if (content.success) {
        console.log(content);
        window.location.reload();
    } else {
        alert(content.message);
    }
};
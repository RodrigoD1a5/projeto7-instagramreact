export default function Posts() {
    const listaPosts = [
        { usuarioImg: "assets/img/meowed.svg", usuarioNome: "meowed", conteudoImg: "assets/img/gato-telefone.svg" },
        { usuarioImg: "assets/img/barked.svg", usuarioNome: "barked", conteudoImg: "assets/img/dog.svg" }
    ]
    return (
        < div class="posts" >
            {listaPosts.map((post) => <Post usuarioImg={post.usuarioImg} usuarioNome={post.usuarioNome} conteudoImg={post.conteudoImg} />)}
        </div >
    )
}
function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.usuarioImg} />
                    {props.usuarioNome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudoImg} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
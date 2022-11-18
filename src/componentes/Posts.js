import Post from "./Post"

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

import React from "react"

export default function Post(props) {
    const iconSavPadrao = "bookmark-outline"
    const iconSalvo = "bookmark"
    const iconLikePadrao = "heart-outline"
    const iconLike = "heart"

    const [iconSalvar, setIconSave] = React.useState(iconSavPadrao)
    const [iconCurtir, setIconCurtir] = React.useState(iconLikePadrao)
    const [numeroDeLikes, setNumeroDeLikes] = React.useState(101523)
    const [dispararAnimacao, setDispararAnimacao] = React.useState(false)

    function salvarPost() {
        if (iconSalvar === iconSavPadrao) {
            setIconSave(iconSalvo)
        }
        else {
            setIconSave(iconSavPadrao)
        }
    }

    function curtirPost() {
        if (iconCurtir === iconLikePadrao) {
            setIconCurtir(iconLike)
            setNumeroDeLikes(numeroDeLikes + 1)
        }
        else {
            setIconCurtir(iconLikePadrao)
            setNumeroDeLikes(numeroDeLikes - 1)
        }
    }

    function curtirPostImagem() {
        setIconCurtir(iconLike)
        if (iconCurtir === iconLike) {
            setNumeroDeLikes(numeroDeLikes)
        }
        else {
            setNumeroDeLikes(numeroDeLikes + 1)
            setDispararAnimacao(true)
        }

        setTimeout(() => {
            setDispararAnimacao(false)
        }, 500);
    }

    return (
        <div class="post" data-test="post">
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
                <img src={props.conteudoImg} onDoubleClick={curtirPostImagem} data-test="post-image"/>
                <ion-icon name="heart" class={!dispararAnimacao ? "escondido" : "animacao"}></ion-icon>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={`${iconCurtir}`} name={`${iconCurtir}`} onClick={curtirPost} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={`${iconSalvar}`} onClick={salvarPost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras <span data-test="likes-number">{`${numeroDeLikes.toLocaleString('pt')}`}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
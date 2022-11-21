import React from "react"

export default function Post(props) {
    const iconPadrao = "bookmark-outline"
    const iconSalvo= "bookmark"
    const[iconSalvar, setIconSave] = React.useState(iconPadrao)

    function salvarPost(){
        if(iconSalvar === iconPadrao){
            setIconSave(iconSalvo)
        }
        else{
            setIconSave(iconPadrao)
        }
    }

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
                        <ion-icon name={`${iconSalvar}`} onClick={salvarPost}></ion-icon>
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
import React from "react"

export default function Usuario() {
    const imagemPadrao= "assets/img/catanacomics.svg"
    const [nome , setNome]= React.useState("Catana")
    const [imagem, setImagem]= React.useState(imagemPadrao)

    function inserirImagem(){
        setImagem(prompt("Digite a url da imagem"))
    }

    function inserirNome(){
        const resposta = prompt("Qual o seu nome?")
        if (!resposta){
            alert("Digite seu nome corretamente")
            setNome(nome)
        }
        else{
            setNome(resposta)
        }
    }

    return (
        <div className="usuario" data-test="user">
            <img onClick={inserirImagem} src={!imagem ? imagemPadrao : imagem} data-test="profile-image"/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    <span data-test="name">{`${nome}`}</span>
                    <ion-icon name="pencil" onClick={inserirNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}
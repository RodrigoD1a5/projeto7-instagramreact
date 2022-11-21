import React from "react"

export default function Usuario() {
    const [nome , setNome]= React.useState("Catana")

    function nomeUsuario(){
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
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {`${nome}`}
                    <ion-icon name="pencil" onClick={nomeUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}
export default function Sugestoes() {
    const listaSugestoes=[
        { imagem:"assets/img/bad.vibes.memes.svg" , nome:"bad.vibes.memes" , razao:"Segue você"},
        { imagem:"assets/img/chibirdart.svg" , nome:"chibirdart" , razao:"Segue você"},
        { imagem:"assets/img/razoesparaacreditar.svg" , nome:"razoesparaacreditar" , razao:"Novo no Instagram"},
        { imagem:"assets/img/adorable_animals.svg" , nome:"adorable_animals" , razao:"Segue você"},
        { imagem:"assets/img/smallcutecats.svg" , nome:"smallcutecats" , razao:"Segue você"}
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/smallcutecats.svg" />
                    <div class="texto">
                        <div class="nome">smallcutecats</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </div>
    )
}
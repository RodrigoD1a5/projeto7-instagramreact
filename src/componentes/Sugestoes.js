import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const listaSugestoes=[
        { imagem:"assets/img/bad.vibes.memes.svg" , nome:"bad.vibes.memes" , razao:"Segue você"},
        { imagem:"assets/img/chibirdart.svg" , nome:"chibirdart" , razao:"Segue você"},
        { imagem:"assets/img/razoesparaacreditar.svg" , nome:"razoesparaacreditar" , razao:"Novo no Instagram"},
        { imagem:"assets/img/adorable_animals.svg" , nome:"adorable_animals" , razao:"Segue você"},
        { imagem:"assets/img/smallcutecats.svg" , nome:"smallcutecats" , razao:"Segue você"}
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {listaSugestoes.map((sugestao)=> <Sugestao key={sugestao.nome} imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao}/>)}
        </div>
    )
}


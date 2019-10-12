const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    
    
    alunaId = alunas.find(aluna => aluna.id == id)
    if(!alunaId){
        res.redirect(301, "https://www.mercadolivre.com.br/")     
    
    }
    res.send(alunaId)
}
exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    if(!aluna){
        res.send("Não encontrei essa garota")
    }

    const livrosAlunas = aluna.livros
    const livrosLidos = aluna.filter(livro => livro.livrosLidos == "true")
    const tituloLivros = livrosLidos.map(livro => livro.titulo)
    res.send(tituloLivros)  

}

exports.getSp = (req, res) => {
    
    const nascimentoSp = alunas.filter(alunas => alunas.nasceuEmSp == "true")
    const nomeSp = nascimentoSp.map( alunas => alunas.nome)
    res.status(200).send(nomeSp)
}

   
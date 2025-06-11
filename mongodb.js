// use <nome_do_banco>
// Altera o contexto para o banco de dados especificado. Se o banco de dados não existir, será criado ao inserir o primeiro documento.
use ifsp;

// show dbs
// Lista todos os bancos de dados disponíveis na instância do MongoDB.
show dbs;

// db
// Retorna o nome do banco de dados atualmente em uso.
db;

// show collections
// Lista todas as coleções dentro do banco de dados selecionado.
show collections;

// db.<colecao>.insertMany([...])
// Insere múltiplos documentos na coleção especificada.
db.contatos.insertMany([
    {
        "nome": "João da Silva",
        "email": "joao.silva@aluno.ifsp.edu.br"
    },
    {
        "nome": "Carlos Eduardo Souza",
        "email": "souza.eduardo@aluno.ifsp.edu.br"
    }
]);

// db.<colecao>.find()
// Retorna todos os documentos da coleção especificada.
db.contatos.find();

// db.<colecao>.countDocuments()
// Retorna a quantidade total de documentos em uma coleção.
db.contatos.countDocuments();

// db.<colecao>.find(<criterio>)
// Retorna documentos que correspondem a um critério de busca.
db.contatos.find({ "nome": "João da Silva" });

// db.<colecao>.updateOne(<criterio>, { $set: { <campo>: <novo_valor> } })
// Atualiza campos específicos em um único documento que corresponda ao critério fornecido.
 db.contatos.updateOne({ "nome": "João da Silva" }, { $set: { "email": "novo.email@ifsp.edu.br" } });

// db.<colecao>.deleteOne(<criterio>)
// Remove um único documento da coleção que corresponda ao critério fornecido.
 db.contatos.deleteOne({ "nome": "Carlos Eduardo Souza" });

// db.<colecao>.find()
// Verifica os documentos atuais da coleção após inserções, atualizações ou remoções.
db.contatos.find();

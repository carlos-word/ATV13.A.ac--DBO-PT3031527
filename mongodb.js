// Seleciona ou cria o banco de dados
use ifsp;

// Lista todos os bancos de dados existentes
show dbs;

// Mostra o banco de dados atualmente em uso
db;

// Lista as coleções do banco de dados atual
show collections;

// Insere múltiplos documentos na coleção 'contatos'
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

// Retorna todos os documentos da coleção
db.contatos.find();

// Retorna a quantidade total de documentos
db.contatos.countDocuments();

// Retorna documentos que atendem a um critério
db.contatos.find({ "nome": "João da Silva" });

// Retorna o primeiro documento da coleção
db.contatos.findOne();

// Retorna documentos que satisfaçam pelo menos uma condição
db.contatos.find({
  "$or": [
    { "nome": "João da Silva" },
    { "email": "joao.silva@aluno.ifsp.edu.br" }
  ]
});

// Atualiza o email de João da Silva
db.contatos.updateOne(
  { "nome": "João da Silva" },
  { $set: { "email": "novo.email@aluno.ifsp.edu.br" } }
);

// Atualiza ou insere (upsert) um documento
db.contatos.update(
  { "nome": "Luan" },      
  { $set: { "idade": "19" } }, 
  { upsert: true }                       
) 

// Remove o contato de Carlos Eduardo Souza
db.contatos.deleteOne({ "nome": "Carlos Eduardo Souza" });

// Verifica os documentos restantes
db.contatos.find();

// Busca o contato principal
var contatoPrincipal = db.contatos.findOne({ "nome": "João da Silva" });

// Cria o subdocumento de emergência
var emergencia = {
    "nome": "Carlos Eduardo Souza",
    "email": "souza.eduardo@aluno.ifsp.edu.br"
};

// Adiciona o subdocumento
contatoPrincipal.emergencia = emergencia;

// Atualiza o documento com o campo aninhado
db.contatos.update(
  { "_id": contatoPrincipal._id },
  contatoPrincipal
);

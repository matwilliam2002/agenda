class Tabelas{
    // Aqui será a parte que inicia e cria as tabelas. 
    init(conexao){

        // Essa parte inicia e utiliza as partes da conexao vinda neste esquema:  conexao -> index_servidor -> Tabelas
        // Com a conexao estabelecida na parte do index_servidor, então utilizaremos todos os comandos da biblioteca mysql 
        this.conexao = conexao;
         
        // executa os metodos 

        // this.criarTabelaDemonstração() 
        this.criarPerfil()
        this.criarTarefas()

    }
    // nesta parte estou mostrando como criar uma tabela sql somente para demonstração 
    criarTabelaDemonstração(){
        // Nesta parte pode criar uma tabela igual o mysql normalmente ...
        // Não importa se é maiuscula o minuscula a escrita, só coloco para destacar mesmo
        const sql = `CREATE TABLE IF NOT EXISTS Teste (id int AUTO_INCREMENT,nome varchar(255), PRIMARY KEY(id) )`

        // Como eu disse anteriormente a variavel conexao é usada para obter alguns comando do mysql , como query 
        // this.conexao.qury ( o comando do sql , (tipo de dados que podem ser gerado "erro"  e " resultado") )
        this.conexao.query(sql, erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Teste criada ");
            }
        })

    }
    criarPerfil(){
        const sql = `CREATE TABLE IF NOT EXISTS Pessoa (
                        id INT AUTO_INCREMENT,
                        nome VARCHAR(100) NOT NULL,
                        email VARCHAR(100) NOT NULL UNIQUE,
                        senha VARCHAR(255) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        PRIMARY KEY (id)
                    );
                    `

        this.conexao.query(sql, erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Pessoa criada ");
            }
        })
    }
    criarTarefas(){
        const sql = `CREATE TABLE IF NOT EXISTS Tarefas (
                            id INT AUTO_INCREMENT,
                            nome VARCHAR(100) NOT NULL,
                            cor VARCHAR(10) NOT NULL,
                            data DATE,
                            descricao VARCHAR(255),
                            pessoa_id int,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            PRIMARY KEY (id), 
                            FOREIGN KEY (pessoa_id) REFERENCES Pessoa(id)
                    );`
        this.conexao.query(sql, erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Tarefas criada ");
            }
        })
    }
    
}

module.exports = new Tabelas;
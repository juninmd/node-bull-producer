<p align="center">
  <img src="https://raw.githubusercontent.com/OptimalBits/bull/HEAD/support/logo@2x.png" alt="w3tec" width="400" />
  <br>
  <label>Node Bull </label>
</p>

# Producer

<p align="center">
  <b>Projeto para criar tarefas assíncronas</b></br>
  <sub>Feito com ❤️ por <a href="https://github.com/juninmd">juninmd</a></a></sub>
</p>

## Resumo
Neste projeto iremos aprender a utilizar serviços de mensageria para comunicar entre apps.


## Tecnologias
| Nome      | Descrição          |
| ------------- |:-------------:|
| Typescript    | Superset javascript     |
| Express    | Framework http super rápido      |
| Bull    | Lib para tarefas assíncronas      |
| Redis    | Banco não relacional Key Value      |

## Preparando o Ambiente
* Tenha instalado o [Visual Studio Code](https://code.visualstudio.com/)
* Baixe o yarn (se node < 16.10)
  * Ele vai baixar todas a dependências do projeto.
* Baixe as dependências do projeto.
  ```
  yarn install
  ```
* Instale o Docker Desktop
* Configure as variáveis de ambiente dentro da pasta /envs
  * Crie um arquivo .env-development
* Depois é só dar F5 no Visual Studio Code.

## Scripts NPM
| Comando      | Descrição          |
| ------------- |:-------------:|
| start    |Inicia a aplicação   |


## Rotas default
| Comando      | Descrição          |
| ------------- |:-------------:|
| http://localhost:9000/    | Verifica se aplicação está on-line |
| http://localhost:9000/email    | Envia e-mail via notificação |
| http://localhost:9000/candidate    | Cadastra o candidato da nossa votação |
| http://localhost:9000/vote    | Decide o voto para nosso candidato |

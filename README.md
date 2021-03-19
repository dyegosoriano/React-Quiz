![InfinityBase Logo](https://user-images.githubusercontent.com/8636507/111413167-83508d00-86bc-11eb-9ca6-290e63b56d28.png "InfinityBase logo")

# QUIZ - Desafio de código

## Resumo

Seu desafio é criar um QUIZ de 10 questões, resposta possíveis Verdadeiro ou Falso, utilizando React. **Você não deve implementar apenas a solução mais básica. Essa é uma chance para mostrar suas habilidades e impressionar.**

**A maneira como você estrutura o seu código conta muito. A avaliação é feita principalmente de acordo com estes critérios:**

- Funcionalidade
- Formato do código
- Estrutura do projeto
- Escalabilidade
- Manutenabilidade
- Uso de melhores práticas de código

Alguns pontos específicos que procuramos em seu código:

- Typescript, se você souber
- Implementação "correta" de um gerenciador de estado
- Implementação "correta" de navegação (rotas)
- Componentização
- Comunicação no repositório e/ou código
- Melhores práticas com requisições na API e dados
- Separação de responsabilidades entre lógica de negócio e lógica de UI (interface)

## Objetivos

Implementar as telas com base nos esqueletos e API abaixo. Os esqueletos podem não estar tão completos, então use sua criatividade para a parte de UI/UX. Lembre-se que este teste não é para designer, então fique tranquilo e livre para implementar sua UI, não seremos rígidos quanto a isso. **Para este desafio, não use um boilerplate como React Boilerplate, por exemplo.** Queremos entender como você estrutura um projeto do zero e quais ferramentas/padrões você utiliza. **create-react-app** pode ser utilizado sem problemas.

**Importante**: Não deixe de enviar seu código. Sabemos que este teste é complexo, vamos avaliar com carinho!

## Especificações

Crie um novo repositório em sua conta do Github.

Dados:

Para pegar os dados das questões: https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean

Exemplo de JSON retornado:

```javascript
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
```

### Tela inicial:

![A tela Inicial da aplicação](https://user-images.githubusercontent.com/8636507/111412882-fb6a8300-86bb-11eb-999a-1b18956a46e5.png "A tela Inicial da aplicação")

- Texto estático
- Botão START navega para a tela do QUIZ e inicia o QUIZ

### Tela do QUIZ:

![A tela do QUIZ da aplicação](https://user-images.githubusercontent.com/8636507/111412896-fe657380-86bb-11eb-876c-3137c7f13b6e.png "A tela do QUIZ da aplicação")

- O título contém a categoria da questão
- O Card no centro da tela contém a questão atual
- A próxima questão aparece automaticamente após responder "True" ou "False"
- Depois de todas as questões serem respondidas, navegar para a tela de Resultados

### Tela de resultados:

![A tela de Resultados da aplicação](https://user-images.githubusercontent.com/8636507/111412902-002f3700-86bc-11eb-8f39-ce43f3eaa761.png "A tela de Resultados da aplicação")

- O resultado mostra o percentual de acerto
- Mostrar uma lista com todas as questões, e se foi correta ou não
- O botão PLAY AGAIN começa novamente e navega para a tela Inicial da aplicação

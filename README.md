# 🖌️ Mural de Mensagens

Bem-vindo ao projeto Mural de Mensagens! Este repositório foi criado especialmente para ajudar iniciantes a aprender o fluxo básico de contribuição no GitHub.

O objetivo é simples: você vai adicionar seu nome e uma mensagem ao nosso mural (o arquivo `mensagens.json`) e, no processo, aprenderá como usar **Fork**, **Clone**, **Commit**, **Push** e **Pull Request (PR)**.

Assim que possivel, você consiguira ver seu nome no site: [Mural-Mensagens](https://mateus-sm.github.io/mural-mensagens/)


---

## ✨ Como Adicionar sua Mensagem (Guia de Contribuição)

Para adicionar sua mensagem ao mural, siga estes 6 passos. Não se preocupe, vamos guiar você em cada etapa!

### Passo 1: Faça um "Fork" do Repositório

O primeiro passo é criar uma "cópia" deste repositório na sua própria conta do GitHub.

1.  No canto superior direito desta página, clique no botão **"Fork"**.
2.  O GitHub vai perguntar onde você quer criar o fork. Apenas selecione a sua conta pessoal.

Agora você tem uma cópia exata do projeto em `github.com/SEU-USUARIO/mural-mensagens`.

### Passo 2: Clone o Repositório para sua Máquina

Agora, vamos baixar essa "cópia" (o seu fork) para o seu computador.

1.  Na página do **seu fork** (o que você acabou de criar), clique no botão verde **"<> Code"**.
2.  Copie a URL (HTTPS é a mais fácil).
3.  Abra o seu terminal (ou Git Bash no Windows) e digite o comando `git clone`, colando a URL em seguida:

    ```bash
    git clone https://github.com/SEU-USUARIO/mural-mensagens.git
    ```

4.  Ótimo! Agora entre na pasta que foi criada:

    ```bash
    cd mural-mensagens
    ```

### Passo 3: Adicione sua Mensagem

É hora de editar o mural!

1.  Abra o arquivo `mensagens.json` no seu editor de código favorito (como o VS Code, Sublime, Bloco de Notas, etc.).
2.  Você verá uma lista de mensagens em formato JSON. **Com muito cuidado**, adicione seus dados no final da lista.

    > **IMPORTANTE:** Siga o formato exato para não quebrar o arquivo!
    >
    > 1.  Adicione uma vírgula ` , ` depois do último `}` (fechamento de chaves).
    > 2.  Adicione seu novo objeto com `"nome"` e `"mensagem"`.
    >
    > **Exemplo:**
    >
    > *Se o arquivo estava assim:*
    >
    > ```json
    > [
    >   {
    >     "nome": "Mateus",
    >     "mensagem": "Bem-vindo ao mural!"
    >   }
    > ]
    > ```
    >
    > *Ele deve ficar assim (observe a vírgula e o novo bloco):*
    >
    > ```json
    > [
    >   {
    >     "nome": "Mateus",
    >     "mensagem": "Bem-vindo ao mural!"
    >   },
    >   {
    >     "nome": "Seu Nome Aqui",
    >     "mensagem": "Minha primeira contribuição no GitHub! 🚀"
    >   }
    > ]
    > ```

3.  Salve o arquivo `mensagens.json` após a edição.

### Passo 4: Faça o "Commit" das suas Alterações

De volta ao terminal. Agora você precisa "salvar" (fazer o *commit*) dessas alterações no histórico do Git.

1.  Primeiro, adicione o arquivo que você modificou:

    ```bash
    git add mensagens.json
    ```

2.  Agora, crie o "pacote" de alterações com uma mensagem descritiva:

    ```bash
    git commit -m "Adicionando minha mensagem ao mural"
    ```

### Passo 5: Faça o "Push" para seu Fork

Seu *commit* está salvo no seu computador. O próximo passo é enviá-lo para o **seu fork** lá no GitHub.

Use o comando:

```bash
git push
````

(Se o Git pedir, talvez seja necessário usar `git push origin main` ou `git push origin master`, dependendo do nome da sua branch padrão).

### Passo 6: Abra o "Pull Request" (PR)

Parabéns, você está quase lá\! Suas alterações estão no seu fork. O último passo é pedir para que o projeto original (`mateus-sm/mural-mensagens`) puxe (pull) as suas alterações.

1.  Volte para a página do **seu fork** no GitHub (`github.com/SEU-USUARIO/mural-mensagens`).
2.  O GitHub provavelmente mostrará um aviso amarelo dizendo **"This branch is 1 commit ahead of..."** (Esta branch está 1 commit à frente...).
3.  Clique no botão verde **"Contribute"** e depois em **"Open pull request"**.
4.  Revise suas alterações na tela seguinte (você deve ver apenas a linha que adicionou no `mensagens.json`).
5.  Clique no botão **"Create pull request"**.

**Pronto\!** 🥳

Você acabou de fazer sua primeira contribuição\! Agora é só aguardar que o mantenedor do projeto revise e integre (faça o *merge*) sua mensagem no mural principal.

-----

## O que você aprendeu?

Ao seguir este guia, você praticou o fluxo de contribuição mais comum em projetos de código aberto:

  * **Fork:** Criar sua própria cópia de um projeto.
  * **Clone:** Baixar o projeto para sua máquina.
  * **Add/Commit:** Salvar suas alterações localmente.
  * **Push:** Enviar suas alterações para seu fork no GitHub.
  * **Pull Request:** Propor que suas alterações sejam aceitas no projeto original.

Obrigado por contribuir\!

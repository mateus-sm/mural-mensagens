// Verificar se o usuário existe no GitHub e buscar avatar
async function getGitHubAvatar(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.ok) {
      const data = await response.json()
      return data.avatar_url
    }
    return null
  } catch (error) {
    console.error("Erro ao buscar avatar do GitHub:", error)
    return null
  }
}

// Criar o HTML de uma mensagem
function createMessageCard(name, message, avatarUrl) {
  const col = document.createElement("div")
  col.className = "col-md-6 col-lg-4"

  const hasAvatar = avatarUrl !== null

  col.innerHTML = `
        <div class="card message-card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
                <div class="d-flex align-items-center mb-3">
                    ${
                      hasAvatar
                        ? `
                        <img src="${avatarUrl}" alt="${name}" class="github-avatar me-3">
                        <div>
                            <h5 class="card-title mb-0 text-success fw-bold">${name}</h5>
                            <small class="text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                                GitHub User
                            </small>
                        </div>
                    `
                        : `
                        <div class="avatar-placeholder me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </div>
                        <h5 class="card-title mb-0 text-success fw-bold">${name}</h5>
                    `
                    }
                </div>
                <p class="card-text flex-grow-1">${message}</p>
            </div>
        </div>
    `

  return col
}

// Carregar e exibir mensagens
async function loadMessages() {
  const container = document.getElementById("messages-container")

  try {
    const response = await fetch("mensagens.json")
    const messages = await response.json()

    messages.sort((a, b) => a.mensagem.length - b.mensagem.length)

    container.innerHTML = ""

    for (const msg of messages) {
      const avatarUrl = await getGitHubAvatar(msg.nome)

      const messageCard = createMessageCard(msg.nome, msg.mensagem, avatarUrl)
      container.appendChild(messageCard)
    }

    if (messages.length === 0) {
      container.innerHTML = `
                <div class="col-12 text-center">
                    <p class="text-muted">Nenhuma mensagem ainda. Seja o primeiro a compartilhar!</p>
                </div>
            `
    }
  } catch (error) {
    console.error("Erro ao carregar mensagens:", error)
    container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-danger" role="alert">
                    Erro ao carregar mensagens. Por favor, tente novamente.
                </div>
            </div>
        `
  }
}

// Carrega as mensagens quando a página carregar
document.addEventListener("DOMContentLoaded", loadMessages)

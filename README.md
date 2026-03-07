<div align="center">
  
# ✨ ForgeBase
Uma simples base para iniciantes no [Forgescript](https://github.com/tryForge/ForgeScript).<br>
[![Forgescript](https://img.shields.io/github/package-json/v/tryforge/ForgeScript/main?label=@tryforge/forgescript&color=5c16d4)](https://github.com/tryforge/ForgeScript)
[![@tryforge/forge.db](https://img.shields.io/github/package-json/v/tryforge/ForgeDB/main?label=@tryforge/forge.db&color=5c16d4)](https://github.com/tryforge/ForgeDB)

</div>

# 🍂 Instalação
**1. Clone o Repositório:**
```bash
git clone https://github.com/eternalsouza/ForgeBase.git
cd ForgeBase
```
**2. Instale as Dependências:**
```bash
npm install
```
**3. Configure o .env:**
```env
CLIENT_TOKEN=seu_token
```
___

# 🪐 Como Iniciar
**1. Inicie Normalmente:**
```bash
npm run start
```
___

# 🌻 Recomendações
- **Node: v25.8.0**
- **Utilizar: [Discloud](https://discloud.com/)**
___

# ⭐ Estrutura do Projeto

<details>
<summary>📁 Clique para ver a estrutura completa de pastas</summary>

```
ForgeBase/                      # Diretório raiz do projeto
├── .env_default                # Arquivo de exemplo para variáveis de ambiente (credenciais, tokens)
├── README.md                    # Documentação principal do projeto
├── index.js                     # Ponto de entrada principal do bot
├── package.json                 # Gerenciamento de dependências e scripts do Node.js
└── src/                         # Código fonte principal do bot
    ├── commands/                # Comandos que os usuários podem executar
    │   ├── prefix/              # Comandos ativados por prefixo (ex: !ping)
    │   │   ├── Desenvolvedor/   # Comandos restritos para desenvolvedores/admins
    │   │   │   ├── Eval.js      # Comando para executar código JavaScript (avaliação)
    │   │   │   └── Reload.js    # Comando para recarregar módulos do bot sem reiniciar
    │   │   └── Utilidades/      # Comandos úteis para todos os usuários
    │   │       ├── Component.js # Comandos relacionados a componentes de interface (botões, etc)
    │   │       └── Ping.js      # Comando simples para testar latência do bot
    │   └── slash/                # Comandos de barra (/) da nova geração do Discord
    │       ├── bot/              # Comandos relacionados ao funcionamento do bot
    │       │   └── Ping.js       # Versão slash do comando de ping
    │       └── guild/            # Comandos específicos para servidores (guilds)
    │           └── Icone.js      # Comando para ver o ícone do servidor
    └── handler/                   # Gerenciadores de eventos e funcionalidades internas
        ├── Database/              # Configuração e manipulação de banco de dados
        │   └── Variables.js       # Definição de variáveis e schemas do banco
        └── Events/                 # Manipuladores de eventos do Discord
            ├── InteractionCreate/  # Eventos de interação (botões, menus, comandos)
            │   ├── Button/         # Manipuladores específicos para botões
            │   │   └── Reload.js   # Lógica quando botão de reload é clicado
            │   └── Menu/           # Manipuladores para menus de seleção
            │       └── Channel.js  # Lógica para menu de seleção de canais
            └── MessageCreate/       # Eventos quando mensagens são enviadas
                ├── Client/          # Interações relacionadas ao cliente do bot
                │   └── Mention.js   # Lógica quando o bot é mencionado
                └── System/           # Eventos internos do sistema
                    ├── ClientReady/   # Evento quando o bot está pronto/iniciado
                    │   ├── data/      # Dados de configuração iniciais
                    │   │   └── ClientStatus.json  # Status inicial do bot
                    │   └── setCustomStatus.js # Configuração de status personalizado
                    └── GuildMessage/   # Mensagens em servidores específicos
                        └── Ask.js      # Sistema de perguntas/respostas automáticas
```

</details>

### 📂 Visão Geral da Estrutura:

- **Root Directory**: Arquivos de configuração e entrada do projeto
- **commands/**: Separação clara entre comandos de prefixo tradicional e slash commands
- **handler/**: Lógica interna que gerencia eventos e banco de dados
- **Organização por Categoria**: Cada funcionalidade tem seu lugar bem definido
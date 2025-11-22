📦 Gerador de Carteira Bitcoin (Testnet) — Node.js + Frontend

Um projeto simples e didático para geração de carteiras Bitcoin (rede testnet) utilizando Node.js, Express e um front-end leve em HTML/JS.
Ideal para estudos de derivação HD (Hierarchical Deterministic), BIP-32/39/49 e criação de endereços Bitcoin.


🚀 Características do Projeto - 🔑 Geração de Carteiras Bitcoin

Geração de mnemonic (BIP-39)
Derivação HD usando BIP-32
Compatível com caminhos derivação do padrão BIP-49
Criação automática de:
  Endereço Bitcoin (testnet)
  Chave privada WIF
  Palavra-semente (mnemonic)


🖥️ Frontend integrado

Página HTML simples e elegante
Botão “Gerar nova carteira”
Exibe endereço, WIF e mnemonic
Botões para copiar cada campo
Consome uma API REST criada em Node.js


🌐 API Backend

Endpoint: GET /api/create-wallet
Implementado em Express
Responde com JSON contendo todos os dados da carteira


🧩 Arquitetura
/src
  ├─ walletService.js   → lógica principal de criação da carteira
  ├─ createWallet.js    → versão CLI (terminal)
  └─ server.js          → servidor Express + API
/public
  └─ index.html         → frontend estático


🛠️ Tecnologias Utilizadas

Node.js
Express
CORS
bip32
bip39
bitcoinjs-lib
HTML / CSS / JavaScript Vanilla


📥 Como clonar e rodar o projeto
1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
2. Instale as dependências
npm install
3. Inicie o servidor
npm start
4. Acesse o frontend pelo navegador
Abra: http://localhost:3000
A partir daí, basta clicar em “Gerar nova carteira” para visualizar endereço, WIF e mnemonic.


📚 Rodar o gerador via terminal (modo CLI)

Se quiser gerar a carteira sem usar o navegador:
npm run cli

Resultado esperado:

Carteira criada com sucesso!
Rede: testnet
Path: m/49'/1'/0'/0
Endereço BTC: ...
Chave Privada WIF: ...
Mnemonic: ...


⚠️ Aviso importante (segurança)

Este projeto não deve ser usado para armazenar bitcoins reais.
Exibe a chave privada e mnemonic diretamente na tela.
Gera carteiras na testnet, adequadas apenas para fins de aprendizado.
Não implementa criptografia, armazenamento seguro ou proteção contra invasão.
Para uso real em produção, seria necessário implementar:
Criptografia de chave privada
Armazenamento seguro (vault/HSM)
Múltiplos níveis de segurança
Integração com carteira hardware


📌 Possíveis Melhorias Futuras

Alternar entre testnet e mainnet
Criar múltiplos endereços derivados da mesma seed
Painel mais avançado em React/Vue
Integração com APIs de transações testnet (block explorer)
Gerar QR Codes para o endereço da carteira

🤝 Contribuições

Sinta-se à vontade para enviar PRs, melhorias e sugestões.
Este projeto é aberto para estudo, evolução e aprendizado.

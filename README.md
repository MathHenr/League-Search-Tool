# 🔍 League Search Tool - Buscador de Personagens, Jogadores e Ligas de LoL

Bem-vindo ao **League Search Tool**, uma ferramenta criada, primeiramente, para me ajudar a práticar e aprender sobre o framework NextJS (este é meu primeiro contato com a ferramenta), mas também desenvolvida para facilitar buscas por personagens, jogadores profissionais e ligas do universo competitivo de **League of Legends**.

## 🚀 Funcionalidades

- **Busca de Personagens**: Explore o vasto elenco de campeões do League of Legends. Obtenha informações detalhadas sobre habilidades e estatísticas de cada campeão.
  
- **Busca de Jogadores Profissionais**: Encontre informações sobre jogadores de alto nível, suas equipes, estatísticas e desempenho nas competições.

- **Busca de Ligas**: Fique por dentro das principais ligas e torneios do cenário competitivo de LoL, com atualizações sobre rankings, partidas e equipes.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: NextJS + TypeScript
- **Backend**: Clerk, Node, db not defined yet
- **Banco de Dados**: Not defined yet
- **APIs**: PandaScore
- **Estilo**: Tailwind CSS, Shadcn, Lucide

## 📦 Como Instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com/MathHenr/League-Search-Tool.git

2. Acesse a pasta do projeto:
    ```bash
    cd League-Search-Tool

3. Instale as dependências:
    ```bash
    npm install

4. Configure as variáveis de ambiente para ter acesso à PandaScore API e Clerk authentication feature.
    ```bash
    ACCESS_TOKEN=YOUR_PANDASCORE_TOKEN

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLIC_CLERK_KEY
    CLERK_SECRET_KEY=YOUR_SECRET_CLERK_KEY
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    <!-- I could not find any variable names other than SIGN_IN or SIGN_UP to make these URL public -->
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/champions

5. Inicie o projeto:
    ```bash
    npm run dev

## 📚 Documentação

- **Este projeto ainda está em desenvolvimento e suas funcionalidades ainda estão sendo elaboradas, em breve irei atualizar a documentação com todas as features e suas utilidades**

## 🤝🏼 Contribuições e Apoio

- Contribuições e/ou ajudas são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

📄 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

**Todos os direitos reservados a Riot Games**
**Dados coletados de PandaScore API**
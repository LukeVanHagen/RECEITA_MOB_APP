# ReceitasApp

ReceitasApp é um aplicativo móvel desenvolvido em React Native que permite aos usuários compartilhar e descobrir receitas. O aplicativo utiliza Firebase para autenticação, armazenamento de dados e upload de imagens, além de oferecer funcionalidades como geolocalização e um feed em tempo real.

## Funcionalidades

- **Autenticação de Usuário**: Os usuários podem se registrar e fazer login usando email e senha ou autenticação do Google.
- **Postagem de Receitas**: Os usuários podem tirar fotos de suas receitas e postá-las, incluindo título, ingredientes e modo de preparo.
- **Feed de Receitas**: Um feed em tempo real que exibe as receitas postadas por todos os usuários, com a capacidade de curtir as receitas.
- **Filtro por Região**: O aplicativo pode utilizar a localização do usuário para filtrar receitas com base na região.
- **Detalhes da Receita**: Os usuários podem visualizar detalhes completos de cada receita, incluindo ingredientes e modo de preparo.

## Estrutura do Projeto

```
ReceitasApp
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   └── RecipeCard.tsx
│   ├── models
│   │   └── Recipe.ts
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── screens
│   │   ├── FeedScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── PostScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── RecipeDetailScreen.tsx
│   ├── services
│   │   ├── auth.ts
│   │   ├── firestore.ts
│   │   └── storage.ts
│   └── App.tsx
├── android
├── ios
├── package.json
├── tsconfig.json
└── README.md
```

## Configuração do Ambiente

1. **Clone o repositório**:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd ReceitasApp
   ```

2. **Instale as dependências**:
   ```
   npm install
   ```

3. **Configuração do Firebase**:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Siga as instruções para configurar o Firebase para Android e iOS.
   - Baixe os arquivos `google-services.json` e `GoogleService-Info.plist` e coloque-os nas pastas corretas.
   - Habilite os serviços de Authentication, Firestore Database e Storage.

4. **Executar o aplicativo**:
   - Para Android:
     ```
     npx react-native run-android
     ```
   - Para iOS:
     ```
     npx react-native run-ios
     ```

## Ajustes Futuros

- Implementar funcionalidades adicionais, como comentários nas receitas.
- Melhorar a interface do usuário com animações e transições.
- Adicionar suporte a múltiplos idiomas.
- Implementar testes automatizados para garantir a qualidade do código.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
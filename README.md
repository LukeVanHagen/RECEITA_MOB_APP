# RECEITA_MOB_APP
🧱 Estrutura Geral do Projeto
Nome do Projeto (exemplo)
ReceitaFácil – Compartilhe e descubra receitas perto de você!

🔧 Tecnologias Sugeridas
📱 Desenvolvimento Mobile (Cross-Platform)
Framework: Flutter

Por que usar:

Código único para Android e iOS;

Ótima performance (quase nativa);

Fácil integração com plugins nativos (câmera, GPS, etc.);

Comunidade grande, muitos tutoriais e componentes prontos.

Alternativa: React Native

Mais fácil caso equipe tenha mais experiência com JavaScript/React;

Também possui muitos plugins e comunidade ativa.

Recomendação atual: Flutter por simplicidade no UI e robustez do ecossistema.

📦 Estrutura de Funcionalidades
🏠 Tela Inicial
Destaques do dia

Receitas por localização

🔍 Busca de Receitas
Filtro por ingrediente, tempo, categoria, localização

📖 Visualização da Receita
Título, imagem, ingredientes, modo de preparo, tempo, categoria

Localização da receita (se o usuário permitir)

Curtidas/comentários (opcional para versões futuras)

➕ Postar Receita
Formulário: título, descrição, ingredientes, modo de preparo

Upload de imagem via câmera ou galeria (integração com câmera)

Captura de localização atual (GPS)

Salvar receita (opcional: offline e sincronização posterior)

🌐 Backend e Banco de Dados
🔙 Backend (se necessário)
Firebase (recomendado)

Firestore (banco de dados em tempo real)

Firebase Storage (armazenar imagens)

Firebase Authentication (login por email, Google, etc.)

Vantagens:

Gerenciado, gratuito para projetos pequenos;

Fácil integração com Flutter;

Escalável conforme necessidade.

🗺️ APIs Nativas

Função	Plugin/Lib Flutter
Câmera	image_picker, camera
GPS	geolocator, location
Notificações	firebase_messaging, flutter_local_notifications
Armazenamento	cloud_firestore, firebase_storage
🧭 Organização do Projeto
plaintext
Copiar
Editar
/lib
├── main.dart                  // Entry point
├── screens/
│   ├── home_screen.dart
│   ├── recipe_detail_screen.dart
│   ├── add_recipe_screen.dart
│   ├── search_screen.dart
├── widgets/                   // Componentes reutilizáveis
├── models/                    // Definições de dados (ex: Receita)
├── services/                  // GPS, câmera, banco, autenticação
└── providers/                 // Gerenciamento de estado (opcional: Provider, Riverpod)
✅ Roadmap de Desenvolvimento (Semanas)

Semana	Tarefa
1	Definir escopo, telas e funcionalidades principais
2	Criar estrutura básica de navegação e UI
3	Listagem de receitas (mock), tela de detalhes
4	Integração com Firebase (Firestore e Storage)
5	Upload de imagem via câmera/galeria
6	Captura de localização
7	Tela de postagem de receita completa
8	Finalização, testes e ajustes



📱 Wireframes (esboço das telas principais)
1. Tela Inicial (Home)
Objetivo: Mostrar receitas recentes e próximas do usuário

+------------------------------------------------+
| ReceitaFácil [Logo ou Título]                 |
+------------------------------------------------+
| 🔍 Buscar receitas...                         |
+------------------------------------------------+
| 📍 Receitas próximas                          |
| [📸 Receita do Zé - 2km]                      |
| [🥗 Salada da Ana - 5km]                      |
+------------------------------------------------+
| 🧑‍🍳 Destaques do dia                         |
| [🍝 Macarrão ao alho - 4.5⭐️]                 |
| [🍰 Bolo de cenoura - 5⭐️]                    |
+------------------------------------------------+
| ⬇️ Barra de navegação:                        |
| [🏠 Home] [🔍 Buscar] [➕ Postar] [👤 Perfil]   |
+------------------------------------------------+
2. Tela de Visualização de Receita
Objetivo: Ver todos os detalhes de uma receita


+------------------------------------------------+
| < Voltar                                       |
| 📸 [Imagem grande da receita]                  |
+------------------------------------------------+
| 🍰 Título da Receita                           |
| ⭐️ Avaliação (opcional)                        |
| 🧭 Localização (opcional)                      |
| 🧂 Ingredientes:                               |
| - 2 ovos                                       |
| - 1 xícara de açúcar                           |
| 📜 Modo de Preparo:                            |
| - Bata tudo no liquidificador...               |
+------------------------------------------------+
3. Tela de Busca
Objetivo: Buscar receitas por nome, ingrediente ou localização


+------------------------------------------------+
| < Voltar                                       |
| 🔍 [Campo de busca]                            |
+------------------------------------------------+
| Filtros rápidos: [🍝 Massas] [🥗 Saudável]     |
+------------------------------------------------+
| Resultados:                                    |
| [🍕 Pizza fácil - 10km]                        |
| [🥞 Panqueca doce - 1km]                       |
+------------------------------------------------+
4. Tela de Postar Receita
Objetivo: Inserir nova receita com câmera e localização


+------------------------------------------------+
| < Voltar                                       |
| 📝 Nova Receita                                |
+------------------------------------------------+
| 📷 [Tirar foto ou escolher da galeria]         |
| 📌 [Usar localização atual]                    |
| 🧁 Nome da receita                             |
| 🧂 Ingredientes (campo multi-linha)            |
| 📜 Modo de preparo (campo multi-linha)         |
| ⏱️ Tempo de preparo (opcional)                |
| [Salvar Receita]                               |
+------------------------------------------------+
5. Tela de Perfil (opcional para mais tarde)
Objetivo: Ver receitas postadas pelo usuário


+------------------------------------------------+
| 👤 Nome do Usuário                             |
| ✉️ Email                                       |
+------------------------------------------------+
| Minhas Receitas                                |
| [🍳 Omelete rápido]                            |
| [🍪 Cookies crocantes]                         |
+------------------------------------------------+
| [Sair]                                         |
+------------------------------------------------+

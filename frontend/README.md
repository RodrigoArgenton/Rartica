# Rartica

## 📁 Estrutura do Projeto

```
Rartica/
├── src/
│   ├── styles/          # Estilos CSS
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas da aplicação
│   ├── assets/          # Recursos estáticos
│   ├── utils/           # Funções utilitárias
│   ├── lib/             # Configurações e helpers
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # CSS global
├── public/              # Arquivos públicos
├── tailwind.config.js   # Configuração Tailwind
└── vite.config.ts       # Configuração Vite
```

## 📂 Descrição das Pastas

### `src/styles/`
Contém todos os arquivos de estilo CSS do projeto, organizados por camadas.

**Arquivos:**
- `index.css` - Arquivo principal que importa todas as camadas de estilo
- `base.css` - Estilos base, resets customizados e configurações globais
- `components.css` - Classes de componentes reutilizáveis usando `@apply`
- `utilities.css` - Utilitários CSS customizados e helpers

### `src/components/`
Componentes React reutilizáveis da aplicação.

**Possíveis arquivos:**
- `Button.tsx` - Componente de botão
- `Card.tsx` - Componente de cartão
- `Header.tsx` - Cabeçalho da aplicação
- `Footer.tsx` - Rodapé da aplicação
- `Modal.tsx` - Componente de modal
- `Form/` - Subpasta para componentes de formulário

### `src/pages/`
Páginas/views da aplicação, cada arquivo representa uma rota.

**Possíveis arquivos:**
- `Home.tsx` - Página inicial
- `About.tsx` - Página sobre
- `Dashboard.tsx` - Painel de controle
- `NotFound.tsx` - Página 404

### `src/assets/`
Recursos estáticos como imagens, fontes e ícones.

**Possíveis arquivos:**
- `images/` - Imagens do projeto
- `fonts/` - Fontes customizadas
- `icons/` - Ícones SVG
- `logo.svg` - Logo da aplicação

### `src/utils/`
Funções utilitárias e helpers compartilhados.

**Possíveis arquivos:**
- `formatters.ts` - Funções de formatação (datas, moedas, etc)
- `validators.ts` - Validações customizadas
- `constants.ts` - Constantes da aplicação
- `helpers.ts` - Funções auxiliares gerais

### `src/lib/`
Configurações, integrações com bibliotecas externas e setup de serviços.

**Possíveis arquivos:**
- `api.ts` - Configuração de cliente HTTP (axios, fetch)
- `auth.ts` - Configuração de autenticação
- `storage.ts` - Helpers para localStorage/sessionStorage
- `router.ts` - Configuração de rotas

### `public/`
Arquivos públicos servidos diretamente.

**Possíveis arquivos:**
- `favicon.ico` - Ícone do site
- `robots.txt` - Configuração para crawlers
- `manifest.json` - Manifesto PWA

## 🎨 Uso do Tailwind CSS

O projeto utiliza Tailwind CSS v4 com a nova sintaxe de importação. Os estilos são organizados em três camadas:

- **Base**: Estilos fundamentais e reset global
- **Components**: Classes reutilizáveis para componentes comuns
- **Utilities**: Utilitários customizados além dos padrões do Tailwind

Para adicionar estilos customizados, edite os arquivos na pasta `src/styles/` usando as diretivas `@layer`.
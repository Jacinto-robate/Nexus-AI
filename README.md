# Nexus JR AI

![Nexus JR AI Banner](https://jacintorobate.vercel.app/_next/image?url=%2Fprojects%2FnexusAI.png&w=1920&q=75)

## 🚀 Visão Geral

**Nexus JR AI** é uma plataforma inovadora de processamento de documentos com inteligência artificial. Ela permite que você faça upload de documentos (PDF/DOCX) e interaja com uma IA para obter informações e insights a partir do conteúdo desses arquivos.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.0+-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Principais Recursos

- 📁 **Upload inteligente de arquivos** - Suporte para múltiplos documentos PDF e DOCX (até 5 arquivos)
- 💬 **Chat com IA contextual** - Faça perguntas específicas sobre o conteúdo dos seus documentos
- 🎨 **Interface moderna e responsiva** - Experiência de usuário elegante e intuitiva
- 🔍 **Extração de informações** - Obtenha insights importantes rapidamente
- ⚡ **Processamento rápido** - Respostas imediatas às suas perguntas

## 🛠️ Stack Tecnológica

- **Frontend**:

  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - ShadCN UI Components
  - Lucide Icons

- **Recursos**:
  - Sistema de upload de arquivos com feedback visual
  - Interface de chat interativa
  - Validação de arquivos
  - Animações elegantes
  - Design responsivo

## 🚀 Instalação e Uso

### Configuração

1. **Clone o repositório**

```bash
git clone https://github.com/Jacinto-robate/Nexus-AI.git
cd Nexus-AI
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```
NEXT_PUBLIC_API_URL=sua-url-de-api
# Adicione outras variáveis necessárias
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📋 Como Usar

1. Acesse a página inicial
2. Arraste e solte ou clique para selecionar documentos (PDF/DOCX)
3. Clique no botão "Enviar" para processar os documentos
4. Na interface de chat, faça perguntas sobre o conteúdo dos seus documentos
5. Receba respostas inteligentes baseadas nos documentos carregados

## 🧩 Estrutura do Projeto

```
nexus-jr-ai/
├── components/           # Componentes React reutilizáveis
│   ├── core/             # Componentes fundamentais
│   │   └── file-upload/  # Componentes de upload de arquivos
│   ├── ui/               # Componentes de interface
│   └── sparkles.tsx      # Efeito visual especial
├── hooks/                # React hooks personalizados
├── pages/                # Rotas da aplicação
├── public/               # Arquivos estáticos
├── styles/               # Estilos globais
└── ...
```

## 🔍 Recursos e Limitações

- ✅ Suporta arquivos PDF e DOCX até 4MB
- ✅ Suporta até 5 arquivos simultaneamente
- ✅ Interface em português brasileiro
- ✅ Processamento assíncrono de documentos
- ⚠️ Documentos muito grandes podem levar mais tempo para processar

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Siga os passos:

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona recurso incrível'`)
4. Push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga o padrão de estilo existente
- Teste suas mudanças antes de enviar
- Atualize a documentação, se necessário

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**Jacinto Robate** - [LinkedIn](https://www.linkedin.com/in/jacinto-robate-942a62267/)

---

<div align="center">
  <p>Desenvolvido com ❤️ e ☕ por Jacinto Robate</p>
  <p>Se gostou deste projeto, considere ⭐ este repositório!</p>
</div>

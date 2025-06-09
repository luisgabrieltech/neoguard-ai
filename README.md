# 🛡️ NeoGuard - Landing Page Cyberpunk

Uma landing page moderna e responsiva para a NeoGuard, uma plataforma brasileira fictícia de segurança cibernética com IA quântica. Desenvolvida com foco em UX/UI de alta qualidade e conversão otimizada.

![NeoGuard Preview](https://imgur.com/a/oZLvcgQ)

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)

## 🚀 Sobre o Projeto

A NeoGuard é uma solução de segurança digital brasileira que combina inteligência artificial quântica com monitoramento 24/7. Esta landing page foi criada para demonstrar as melhores práticas de desenvolvimento web moderno e design cyberpunk.

## 🎯 Características do Produto

- **IA Brasileira**: Tecnologia 100% nacional com conformidade LGPD
- **Detecção Avançada**: 99.8% de precisão na identificação de ameaças
- **Resposta Instantânea**: Bloqueio automático em menos de 0.3 segundos
- **Criptografia Quântica**: Resistente à computação quântica

## 🎨 Design & UX

### Paleta de Cores Cyberpunk

```css
/* Cores Principais */
--purple-primary: #8B5CF6
--pink-accent: #A855F7
--background: #000000
--text-primary: #FFFFFF
--text-secondary: #9CA3AF
```

### 🏆 Práticas de UX Implementadas

#### ⭐ Hierarquia Visual Clara
- Títulos progressivos com gradientes coloridos
- Espaçamento consistente entre seções
- Contraste otimizado para legibilidade

#### ⭐ Navegação Intuitiva
- Menu fixo com links de ancoragem
- Navegação suave entre seções
- Menu mobile responsivo

#### ⭐ Call-to-Actions Estratégicos
- Botões primários com gradientes
- Múltiplas oportunidades de conversão
- Linguagem persuasiva e clara

#### ⭐ Design Responsivo
- Mobile-first approach
- Breakpoints inteligentes
- Tipografia fluida

#### ⭐ Microinterações
- Hover states em todos elementos
- Transições suaves (300ms)
- Animações de entrada progressivas

#### ⭐ Performance Otimizada
- Carregamento progressivo
- Lazy loading de imagens
- CSS otimizado com Tailwind

## 🛠️ Tecnologias Utilizadas

### Frontend
- Next.js 15 - Framework React com App Router
- TypeScript - Tipagem estática
- Tailwind CSS - Framework CSS utility-first
- Lucide React - Ícones modernos
- shadcn/ui - Componentes reutilizáveis

### Ferramentas de Desenvolvimento
- ESLint - Linting de código
- Prettier - Formatação automática
- PostCSS - Processamento CSS

## 📁 Estrutura do Projeto

```
neoguard-landing/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout principal da aplicação
│   └── page.tsx             # Página principal da landing
├── components/
│   └── ui/                  # Componentes shadcn/ui
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts             # Utilitários (cn function)
├── public/                  # Assets estáticos
├── tailwind.config.ts       # Configuração do Tailwind
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências do projeto
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/luisgabrieltech/neoguard.git
cd neoguard
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Execute o projeto
```bash
npm run dev
# ou
yarn dev
```

4. Acesse no navegador
```
http://localhost:3000
```

## 📱 Seções da Landing Page

### 🏠 Hero Section
- Título impactante com gradientes
- Proposta de valor clara
- CTAs principais
- Estatísticas de credibilidade

### ⚡ Features Section
- 4 recursos principais em cards
- Ícones representativos
- Descrições concisas
- Showcase da IA brasileira

### 💰 Pricing Section
- 3 planos (Starter, Professional, Enterprise)
- Comparação clara de features
- Destaque para plano mais popular
- CTAs de conversão

### 💬 Testimonials Section
- Depoimentos de clientes brasileiros
- Avaliações com estrelas
- Cargos e empresas específicas
- Prova social robusta

### 📞 CTA Final
- Chamada para ação principal
- Múltiplas opções de contato
- Senso de urgência sutil

### 🔗 Footer
- Links organizados por categoria
- Informações de contato
- Compliance (LGPD, Privacidade)
- Identidade brasileira

## 📊 Métricas de UX

### ✅ Pontos Fortes
- Score de UX: 9.5/10
- Design responsivo perfeito
- Carregamento otimizado
- Navegação intuitiva
- Conversão bem estruturada

### 🎯 KPIs Esperados
- Taxa de bounce < 30%
- Tempo na página > 2 minutos
- Taxa de conversão > 5%
- Core Web Vitals excelentes

## 🔧 Customização

### Alterando Cores

Edite o arquivo `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#SUA_COR_AQUI",
      }
    }
  }
}
```

### Adicionando Seções
1. Crie o componente na pasta `components/`
2. Importe e use em `app/page.tsx`
3. Adicione estilos necessários

### Modificando Conteúdo
Todo o conteúdo está centralizado em `app/page.tsx` nas constantes:
- `features` - Recursos do produto
- `stats` - Estatísticas
- `testimonials` - Depoimentos

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta .next para Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Luis Gabriel**

- GitHub: [@luisgabrieltech](https://github.com/luisgabrieltech)
- LinkedIn: [Luis Gabriel](https://linkedin.com/in/luisgabrieltech)
- Email: luisgabrieltech@gmail.com

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Lucide](https://lucide.dev/) - Ícones
- [Vercel](https://vercel.com/) - Plataforma de deploy

⭐ Se este projeto te ajudou, deixe uma estrela!

🇧🇷 Desenvolvido com ❤️ no Brasil

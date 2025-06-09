import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeoGuard - Segurança Digital do Futuro',
  description: 'A primeira plataforma brasileira de segurança cibernética com IA quântica. Proteja sua empresa contra ameaças do presente e do futuro.',
  keywords: 'segurança cibernética, IA quântica, proteção digital, brasil, cybersecurity',
  authors: [{ name: 'luisgabrieltech', url: 'https://github.com/luisgabrieltech' }],
  creator: 'luisgabrieltech',
  publisher: 'NeoGuard',
  openGraph: {
    title: 'NeoGuard - Segurança Digital do Futuro',
    description: 'Tecnologia 100% brasileira de segurança cibernética com IA quântica',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'NeoGuard',
    url: 'https://neoguard.com.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeoGuard - Segurança Digital do Futuro',
    description: 'Tecnologia 100% brasileira de segurança cibernética com IA quântica',
    creator: '@luisgabrieltech',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

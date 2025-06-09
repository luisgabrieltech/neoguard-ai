"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Lock, Eye, CheckCircle, ArrowRight, Menu, X, Star, Globe, Smartphone, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NeoGuardLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Proteção Avançada",
      description: "IA brasileira que detecta ameaças em tempo real com precisão de 99.8%",
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "Bloqueio automático de ataques em menos de 0.3 segundos",
    },
    {
      icon: Lock,
      title: "Criptografia Quântica",
      description: "Tecnologia desenvolvida no Brasil, resistente a computação quântica",
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "Vigilância contínua com alertas inteligentes personalizados",
    },
  ]

  const stats = [
    { number: "2.5M+", label: "Empresas Protegidas" },
    { number: "99.8%", label: "Taxa de Detecção" },
    { number: "0.3s", label: "Tempo de Resposta" },
    { number: "24/7", label: "Monitoramento" },
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CTO, TechBrasil",
      content:
        "NeoGuard revolucionou nossa segurança digital. A tecnologia brasileira que supera soluções internacionais.",
      rating: 5,
    },
    {
      name: "Ana Santos",
      role: "CISO, FinanceiroSP",
      content: "Implementação simples, resultados extraordinários. Nossa empresa nunca esteve tão segura.",
      rating: 5,
    },
    {
      name: "Roberto Lima",
      role: "CEO, StartupRJ",
      content: "Orgulho de usar uma solução 100% brasileira que compete globalmente. Recomendo sem hesitar.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NeoGuard
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                Recursos
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
                Preços
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
                Clientes
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contato
              </Link>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                Começar Agora
              </Button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-500/20">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Recursos
                </Link>
                <Link href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Preços
                </Link>
                <Link href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Clientes
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contato
                </Link>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 w-full">
                  Começar Agora
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30">
                🇧🇷 Tecnologia 100% Brasileira
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Segurança Digital
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  do Futuro
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A primeira plataforma brasileira de segurança cibernética com IA quântica. Proteja sua empresa contra
                ameaças do presente e do futuro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg"
                >
                  Teste Grátis por 30 Dias
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
                >
                  Ver Demonstração
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30">
              Recursos Avançados
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tecnologia que
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Redefine Segurança
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desenvolvido por brasileiros, para o mundo. Nossa IA aprende e evolui constantemente para manter sua
              empresa sempre protegida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                IA Brasileira de
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Última Geração
                </span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Detecção Preditiva</h4>
                    <p className="text-gray-300">Identifica ameaças antes mesmo delas se manifestarem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Aprendizado Contínuo</h4>
                    <p className="text-gray-300">Evolui constantemente com cada nova ameaça detectada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Conformidade LGPD</h4>
                    <p className="text-gray-300">100% adequado à legislação brasileira de proteção de dados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
              <Image
                src="#"
                alt="Finge que tem uma imagem aqui"
                width={600}
                height={400}
                className="relative rounded-2xl border border-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30">
              Planos e Preços
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Escolha o Plano
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ideal para Você
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções flexíveis para empresas de todos os tamanhos. Comece grátis e escale conforme cresce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-gray-300 mb-4">Para pequenas empresas</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    R$ 299
                    <span className="text-lg text-gray-400">/mês</span>
                  </div>
                  <p className="text-sm text-gray-400">Até 50 dispositivos</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Monitoramento 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Detecção de ameaças básica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Suporte por email</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Dashboard básico</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-400 hover:border-purple-300 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Mais Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-gray-300 mb-4">Para médias empresas</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    R$ 899
                    <span className="text-lg text-gray-400">/mês</span>
                  </div>
                  <p className="text-sm text-gray-400">Até 500 dispositivos</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Tudo do plano Starter</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">IA avançada de detecção</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Resposta automática</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Relatórios avançados</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-gray-300 mb-4">Para grandes corporações</p>
                  <div className="text-4xl font-bold text-white mb-2">Customizado</div>
                  <p className="text-sm text-gray-400">Dispositivos ilimitados</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Tudo do plano Professional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">IA personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Integração customizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Suporte dedicado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">SLA garantido</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que Nossos
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Clientes Dizem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas brasileiras confiam na NeoGuard para proteger seus ativos digitais mais valiosos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para o
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Futuro da Segurança?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas brasileiras que já confiam na NeoGuard. Comece seu teste gratuito hoje
              mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg"
              >
                Teste Grátis por 30 Dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 bg-black border-t border-purple-500/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NeoGuard
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                A primeira plataforma brasileira de segurança cibernética com IA quântica.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-purple-400" />
                <Smartphone className="w-5 h-5 text-purple-400" />
                <Server className="w-5 h-5 text-purple-400" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Integrações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NeoGuard. Todos os direitos reservados. Desenvolvido no Brasil 🇧🇷
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

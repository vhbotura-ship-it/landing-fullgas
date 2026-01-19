"use client";

import { Flame, Shield, MessageCircle, MapPin, Clock, CheckCircle, Phone, Circle } from "lucide-react";

export default function Home() {
  const whatsappLink = "https://wa.me/5565999872673";

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f0e41a28-f19b-46aa-a41d-f3852060ee10.png" 
              alt="FullGás Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Gás de Cozinha Perto de Você é na FullGás
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            Entrega rápida de <span className="font-semibold text-purple-700">Gás Copagaz</span> e{" "}
            <span className="font-semibold text-blue-600">Água Lebrinha</span> na sua casa, com segurança, 
            preço justo e atendimento imediato pelo WhatsApp.
          </p>

          <div className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
            <p className="mb-4">Está sem gás agora? Não fique esperando.</p>
            <p className="mb-4">A FullGás entrega onde você estiver, com agilidade e confiança.</p>
            <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-4 md:p-6 mt-6">
              <p className="text-purple-800 font-bold text-lg md:text-xl mb-2">
                Gás de Cozinha a partir de:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                  <p className="text-green-600 font-bold text-xl">R$ 123,00</p>
                  <p className="text-gray-600 text-sm">para retirar</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                  <p className="text-green-600 font-bold text-xl">R$ 135,00</p>
                  <p className="text-gray-600 text-sm">para entrega</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            PEDIR AGORA NO WHATSAPP
          </a>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <Phone className="w-8 h-8 text-purple-600" />
              O que entregamos
            </h3>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                "Gás de Cozinha Copagaz P13 (botijão residencial)",
                "Água Mineral Lebrinha (galão 20 litros)",
                "Gás P20 e P45 para usos industriais",
                "Entrega rápida no seu bairro",
                "Atendimento direto pelo WhatsApp",
                "Empresa local, confiável e com estoque imediato"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-purple-50 p-4 md:p-5 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Procurando "gás de cozinha perto de mim"?
            </h3>
            <p className="text-xl md:text-2xl font-semibold mb-6">
              Você acabou de encontrar.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              A FullGás é referência na sua região em entrega de gás e água, com atendimento 
              humanizado e pedido fácil, sem burocracia.
            </p>
            <p className="text-lg md:text-xl font-medium mb-8">
              Basta clicar no botão abaixo e falar direto com nossa equipe:
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
              PEDIR AGORA NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Por que comprar com a FullGás?
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Clock,
                  title: "Entrega rápida",
                  color: "text-purple-600"
                },
                {
                  icon: Shield,
                  title: "Segurança e procedência (Copagaz)",
                  color: "text-purple-700"
                },
                {
                  icon: Circle,
                  title: "Água Lebrinha de qualidade",
                  color: "text-blue-600"
                },
                {
                  icon: MessageCircle,
                  title: "Pedido simples pelo celular",
                  color: "text-green-500"
                },
                {
                  icon: MapPin,
                  title: "Conforto: entregamos na sua porta",
                  color: "text-purple-600"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center border-2 border-purple-100 hover:border-purple-300"
                  >
                    <Icon className={`w-12 h-12 md:w-14 md:h-14 ${benefit.color} mx-auto mb-4`} />
                    <p className="text-gray-800 font-semibold text-base md:text-lg leading-snug">
                      {benefit.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-purple-600 to-purple-800 py-12 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Flame className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6" />
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Não fique sem gás!
            </h3>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              Faça seu pedido agora e receba com rapidez e segurança.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
              FALAR COM A FULLGÁS AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f0e41a28-f19b-46aa-a41d-f3852060ee10.png" 
              alt="FullGás Logo" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm md:text-base mb-4">
            <strong>FULLGAS COMERCIO DE GAS LTDA</strong>
          </p>
          <p className="text-xs md:text-sm mb-2">
            CNPJ: 33.905.874/0001-47
          </p>
          <p className="text-xs md:text-sm mb-2">
            Endereço: AV ASA BRANCA, LOTE 9 QUADRA 30, RECANTO DOS PÁSSAROS - CEP: 78.075-335
          </p>
          <p className="text-xs md:text-sm mb-4">
            Autorização ANP: GLPMT0448862
          </p>
          <p className="text-sm mt-4">
            Atendimento via WhatsApp: (65) 99987-2673
          </p>
        </div>
      </footer>
    </div>
  );
}

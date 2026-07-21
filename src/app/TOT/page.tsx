"use client";

import { useState } from "react";
import {
  FaLandmark,
  FaDollarSign,
  FaChartLine,
  FaGlobeEurope,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TituloEscolhido from "./Components/TituloEscolhido";

const obrigacoes = [
  {
    codigo: "OTNR",
    titulo: "Obrigação do Tesouro Não Reajustável",
    descricao: "Emitidas em Kwanzas com rendimento definido.",
    icone: FaLandmark,
  },
  {
    codigo: "OTME",
    titulo: "Obrigação do Tesouro em Moeda Estrangeira",
    descricao: "Emitidas em moeda estrangeira (USD).",
    icone: FaDollarSign,
  },
  {
    codigo: "OTX",
    titulo: "Obrigação do Tesouro Indexada",
    descricao: "Cupão indexado a um indicador definido.",
    icone: FaChartLine,
  },
  {
    codigo: "Eurobonds",
    titulo: "Eurobonds",
    descricao: "Títulos emitidos em mercados internacionais.",
    icone: FaGlobeEurope,
  },
];

type TipoObrigacao = "OTNR" | "OTME" | "OTX" | "Eurobonds";

export default function Tot() {
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoObrigacao | null>(
    null
  );

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="flex-1 px-6 py-24 mt-28">
        {!tipoSelecionado ? (
          <div key="grelha" className="mx-auto max-w-6xl text-center animate-fadeUp">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Escolha o tipo de obrigação
            </h1>

            <p className="mt-3 text-gray-600">
              Cada tipo possui características distintas. Selecione a opção
              que pretende simular.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {obrigacoes.map((item, i) => {
                const Icone = item.icone;
                return (
                  <button
                    key={item.codigo}
                    onClick={() =>
                      setTipoSelecionado(item.codigo as TipoObrigacao)
                    }
                    style={{ animationDelay: `${i * 100}ms` }}
                    className="
                      group
                      relative
                      rounded-3xl
                      bg-white
                      border
                      border-gray-200
                      p-6
                      text-left
                      cursor-pointer
                      overflow-hidden
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#091a37]
                      hover:shadow-xl
                      hover:shadow-[#2F5495]/10
                      animate-fadeUp
                      opacity-0
                    "
                  >
                    {/* Tint decorativo que aparece no hover */}
                    <div
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-br from-[#2F5495]/[0.04] to-transparent
                        opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative flex items-start justify-between">
                      <div className="flex  items-center gap-3">
                        <span
                          className="
                            flex  h-11 w-11 shrink-0 items-center justify-center
                            rounded-full bg-[#2F5495]/10 text-[#2F5495]
                            transition-colors duration-300
                            group-hover:bg-[#2F5495] group-hover:text-white
                          "
                        >
                          <Icone size={18} />
                        </span>

                        <span
                          className="
                            inline-block rounded-full text-[#D4AF37]
                            px-4 py-1 text-sm font-semibold
                          "
                        >
                          {item.codigo}
                        </span>
                      </div>

                      
                    </div>

                    <h2 className="relative mt-4 text-xl md:text-2xl font-medium text-[#2F5495]">
                      {item.titulo}
                    </h2>

                    <p className="relative mt-3 text-gray-600 text-sm">
                      {item.descricao}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div key="detalhe" className="mx-auto max-w-6xl animate-fadeUp">
            <button
              onClick={() => setTipoSelecionado(null)}
              className="
                mb-6 rounded-full border px-5 py-2 text-sm
                transition-colors hover:text-gray-100 border-[#2F5495] hover:bg-[#2F5498]
              "
            >
              ← Voltar
            </button>

            <TituloEscolhido tipo={tipoSelecionado} />
          </div>
        )}
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.5s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeUp {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
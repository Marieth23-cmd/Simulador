"use client"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {useRouter} from "next/navigation"
import { useEffect, useState } from "react";
import { Confetti } from "../Components/Confetti";

export default function Resultados() {



const [showConfetti, setShowConfetti] = useState(false);


useEffect(()=>{

    const timer = setTimeout(()=>{

        setShowConfetti(true);

    },500);


    return ()=>clearTimeout(timer);

},[]);




    const router= useRouter()


  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      
      <Header />


      <Confetti show={showConfetti}/>


      <section className="flex-1 px-6 pt-32 pb-14">

        <div className="mx-auto max-w-6xl">

          {/* Cabeçalho */}

          <div className="text-center">

            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              ✓ Simulação concluída
            </span>

            <h1 className="mt-6 text-4xl font-bold text-[#2F5495]">
              Resultado da Simulação
            </h1>

            <p className="mt-3 text-gray-600">
              Simulação para o código <strong>OG13M29A</strong>
            </p>

          </div>

          {/* Cards principais */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border bg-white p-7">
              <p className="text-xs uppercase text-gray-500">
                Investimento
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#2F5495]">
                9 700 Kz
              </h2>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <p className="text-xs uppercase text-gray-500">
                Cupão (6 em 6 meses)
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#2F5495]">
                883 Kz
              </h2>
            </div>

            <div className="rounded-3xl border bg-[#2F5495] p-7 text-white">

              <p className="text-xs uppercase opacity-80">
                Captal investido + todos os cupões .
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                15 298 Kz
              </h2>

            </div>

          </div>

          {/* Informações */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Resumo */}

            <div className="rounded-3xl border bg-white p-8">

              <h2 className="text-2xl font-bold text-[#2F5495]">
                Resumo
              </h2>

              <div className="mt-6 space-y-4">

                <Linha nome="Código" valor="OG13M29A" />

                <Linha nome="ISIN" valor="AOUGDOGM26A9" />

                <Linha nome="Quantidade" valor="10 títulos" />

                <Linha nome="Preço de compra" valor="970 Kz" />

                <Linha nome="Valor nominal" valor="1000 Kz" />

                <Linha nome="Taxa de juros" valor="18,21%" />

                <Linha nome="Cupão" valor="Semestral" />

                <Linha nome="Maturidade" valor="2029" />

              </div>

            </div>

            {/* Calendário */}

            <div className="rounded-3xl border bg-white p-7">

              <h2 className="text-2xl font-bold text-[#2F5495]">
                Calendário de Cupões
              </h2>

              <div className="mt-6 space-y-3">

                <Cupao
                  data="15/03/2027"
                  valor="883 Kz"
                />

                <Cupao
                  data="15/09/2027"
                  valor="883 Kz"
                />

                <Cupao
                  data="15/03/2028"
                  valor="883 Kz"
                />

                <Cupao
                  data="15/09/2028"
                  valor="883 Kz"
                />

                <Cupao
                  data="15/03/2029"
                  valor="883 Kz"
                />

                <Cupao
                  data="15/09/2029"
                  valor="883 Kz"
                />

              </div>

            </div>

          </div>

        
          {/* Botões */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button
              onClick={()=>{router.push("/TOT")}}
              className="rounded-full border border-[#2F5495] px-8 py-4 font-semibold text-[#2F5495]"
            >
              Simular novamente
            </button>

            <button
            
              className="rounded-full bg-[#2F5495] px-8 py-4 font-semibold text-white"
            >
              Falar com Consultor
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}

type LinhaProps = {
  nome: string;
  valor: string;
};

function Linha({ nome, valor }: LinhaProps) {
  return (
    <div className="flex justify-between border-b pb-3">

      <span className="text-gray-500">
        {nome}
      </span>

      <span className="font-semibold">
        {valor}
      </span>

    </div>
  );
}

type CupaoProps = {
  data: string;
  valor: string;
};

function Cupao({ data, valor }: CupaoProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3">

      <span>{data}</span>

      <span className="font-semibold text-[#2F5495]">
        {valor}
      </span>

    </div>
  );
}
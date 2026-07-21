"use client"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {useRouter} from "next/navigation"
import { useEffect, useState } from "react";
import { Confetti } from "../Components/Confetti";

type SimData = {
  codigo: string;
  isin: string;
  quantity: number;
  precoCompra: number;
  nominal: number;
  nominalTotal: number;
  invested: number;
  currency: string;
  cupaoString: string;
  annualRate: number;
  couponPerPeriodTotal: number;
  periods: number;
  totalCoupons: number;
  finalValue: number;
  maturidade: string;
  schedule: { period: number; date: string; amount: number }[];
}

// Contador simples: anima de 0 até `value` quando `start` vira true
function Count({ value, start, duration = 900 }: { value: number; start: boolean; duration?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, value, duration]);

  const formatted = display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return <span aria-live="polite">{formatted}</span>;
}

export default function Resultados() {



const [showConfetti, setShowConfetti] = useState(false);
const [simData, setSimData] = useState<SimData | null>(null);


useEffect(()=>{

    const timer = setTimeout(()=>{

        setShowConfetti(true);

    },500);


    return ()=>clearTimeout(timer);

},[]);

useEffect(()=>{
  // ler dados da simulação salvos em localStorage
  try{
    const raw = localStorage.getItem('simulacaoResult');
    if(raw){
      const parsed = JSON.parse(raw) as SimData;
      setSimData(parsed);
    }
  }catch(e){
    console.error('failed to read sim data', e);
  }
},[])




    const router= useRouter()

  const quantidade = simData?.quantity ?? (simData?.nominal ? Math.round((simData.nominalTotal ?? 0) / (simData.nominal || 1)) : 0);
  const precoCompra = simData?.precoCompra ?? (quantidade ? Math.round((simData?.invested ?? 0) / quantidade) : 0);
  const nominal = simData?.nominal ?? (quantidade ? Math.round((simData?.nominalTotal ?? 0) / quantidade) : 0);
  const nominalTotal = simData?.nominalTotal ?? nominal * quantidade;
  const maturidade = simData?.maturidade ?? `${new Date().getFullYear() + 1}`;
  const cupaoString = simData?.cupaoString ?? `${((simData?.annualRate ?? 0) * 100).toFixed(2)}%`;
  const currency = simData?.currency ?? "Kz";
  const couponPerPeriodTotal = simData?.couponPerPeriodTotal ?? 0;
  const totalCoupons = simData?.totalCoupons ?? 0;
  const invested = simData?.invested ?? 0;
  const finalValue = simData?.finalValue ?? invested + totalCoupons;
  const schedule = simData?.schedule ?? [];

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
              Simulação para o código <strong>{simData?.codigo ?? "sem dados"}</strong>
            </p>

          </div>

          {/* Cards principais */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border bg-white p-7">
              <p className="text-base uppercase text-gray-500">
                Investimento
              </p>

              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F5495]">
                <Count value={Math.round(invested)} start={showConfetti} /> {currency}
              </h2>
            </div>

            <div className="rounded-3xl border bg-white p-7">
              <p className="text-base uppercase text-gray-500">
                Cupão (6 em 6 meses)
              </p>

              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F5495]">
                <Count value={Math.round(couponPerPeriodTotal)} start={showConfetti} /> {currency}
              </h2>
            </div>

            <div className="rounded-3xl border bg-[#2F5495] p-7 text-white">

              <p className="text-base uppercase opacity-80">
                Captal investido + todos os cupões.
              </p>

              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold">
                <Count value={Math.round(finalValue)} start={showConfetti} /> {currency}
              </h2>

            </div>

          </div>

          {/* Informações */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Resumo */}

            <div className="rounded-3xl border bg-white p-8">

              <h2 className="text-2xl md:text-3xl font-bold text-[#2F5495]">
                Resumo
              </h2>

              <div className="mt-6 space-y-4">
                {simData ? (
                  <>
                    <Linha nome="Código" valor={simData.codigo} />
                    <Linha nome="ISIN" valor={simData.isin} />
                    <Linha nome="Quantidade" valor={`${quantidade} títulos`} />
                        <Linha nome="Preço de compra" valor={`${precoCompra} ${currency}`} />
                    <Linha nome="Valor nominal por título" valor={`${nominal} ${currency}`} />
                    <Linha nome="Valor nominal total" valor={`${nominalTotal} ${currency}`} />
                    <Linha nome="Taxa de juros" valor={`${((simData?.annualRate ?? 0) * 100).toFixed(2)}%`} />
                    <Linha nome="Cupão" valor={cupaoString} />
                    <Linha nome="Cupão por período" valor={`${Math.round(couponPerPeriodTotal)} ${currency}`} />
                    <Linha nome="Períodos (semestres)" valor={`${simData?.periods ?? 0}`} />
                    <Linha nome="Total de cupões" valor={`${Math.round(totalCoupons)} ${currency}`} />
                    <Linha nome="Maturidade" valor={maturidade} />
                  </>
                ) : (
                  <p className="text-gray-500">Nenhum resumo disponível para esta simulação.</p>
                )}
              </div>

            </div>

            {/* Calendário */}

            <div className="rounded-3xl border bg-white p-7">

              <h2 className="text-2xl md:text-3xl font-bold text-[#2F5495]">
                Calendário de Cupões
              </h2>

              <div className="mt-6 space-y-3">
                {schedule.length > 0 ? (
                  schedule.map((s) => (
                    <Cupao key={s.period} data={s.date} valor={`${s.amount} ${currency}`} />
                  ))
                ) : (
                  <p className="text-gray-500">Nenhum calendário disponível para esta simulação.</p>
                )}

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
            onClick={()=>{router.push("Obrigado")}}
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
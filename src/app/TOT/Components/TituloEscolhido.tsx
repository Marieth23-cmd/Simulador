"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


type Titulo = {
  codigo: string;
  isin: string;
  nominal: number;
  precoCompra: number;
  maturidade: string;
  cupao?: string;
};

const titulos: Record<string, Titulo[]> = {
  OTNR: [
    { codigo: "OG13M29A", isin: "AOUGDOGM26A9", nominal: 1000, precoCompra: 970, maturidade: "2029" },
    { codigo: "OG15M33A", isin: "AOUGDOGM31A1", nominal: 1000, precoCompra: 950, maturidade: "2031" },
    { codigo: "OG20M34A", isin: "AOUGDOGM34A2", nominal: 1000, precoCompra: 900, maturidade: "2034" },
  ],
  OTME: [
    { codigo: "EG31G26A", isin: "AOUGDEGG23E1", nominal: 1000, precoCompra: 980, maturidade: "2026", cupao: "4,5%" },
    { codigo: "EO15J34A", isin: "AOUGDEOJ23A7", nominal: 1000, precoCompra: 950, maturidade: "2031", cupao: "8,00%" },
    { codigo: "EO15J34A", isin: "AOUGUSD31A2", nominal: 1000, precoCompra: 965, maturidade: "2031" },
  ],
  OTX: [
    { codigo: "OX12M30A", isin: "AOUGIDX30A1", nominal: 1000, precoCompra: 920, maturidade: "2030" },
    { codigo: "OX12M31A", isin: "AOUGIDX30A1", nominal: 1000, precoCompra: 1000, maturidade: "2035" },
    { codigo: "OX12M32A", isin: "AOUGIDX30A1", nominal: 1000, precoCompra: 990, maturidade: "2034" },
  ],
  Eurobonds: [
    { codigo: "EB30", isin: "AOEURO30A1", nominal: 1000, precoCompra: 1000, maturidade: "2035" },
    { codigo: "EB31", isin: "AOEURO30A1", nominal: 1000, precoCompra: 980, maturidade: "2030" },
    { codigo: "EB32", isin: "AOEURO30A1", nominal: 1000, precoCompra: 890, maturidade: "2030" },
  ],
};

type Props = { tipo: "OTNR" | "OTME" | "OTX" | "Eurobonds" };

export default function TituloEscolhido({ tipo }: Props) {
  const router = useRouter();
  const lista = titulos[tipo] || [];

  const [tituloSelecionado, setTituloSelecionado] = useState<Titulo | null>(null);
  const [quantidade, setQuantidade] = useState("");

  // Helpers
  const parseRate = (s?: string, years = 1) => {
    if (!s) {
      const rate = Math.min(0.03 + 0.005 * years, 0.12);
      return rate;
    }
    const cleaned = s.replace("%", "").replace(",", ".").trim();
    const n = parseFloat(cleaned);
    if (Number.isFinite(n)) return n / 100;
    return 0.05;
  };

  // formato simples para números grandes (se precisar, reintroduzir função mais tarde)

  // Computed values
  const quantidadeNum = parseInt(quantidade || "0", 10) || 0;
  const nominalTotal = tituloSelecionado ? tituloSelecionado.nominal * quantidadeNum : 0;
  const precoTotal = tituloSelecionado ? tituloSelecionado.precoCompra * quantidadeNum : 0;
  const currentYear = new Date().getFullYear();
  const anos = tituloSelecionado ? Math.max(parseInt(tituloSelecionado.maturidade, 10) - currentYear, 0) : 0;
  const periods = Math.max(Math.ceil(anos * 2), 0);
  const annualRate = tituloSelecionado ? parseRate(tituloSelecionado.cupao, anos) : 0;
  const couponPerPeriodPerBond = tituloSelecionado ? (tituloSelecionado.nominal * annualRate) / 2 : 0;
  const couponPerPeriodTotal = couponPerPeriodPerBond * quantidadeNum;
  const totalCoupons = couponPerPeriodTotal * periods;
  const finalValue = precoTotal + totalCoupons;

  return (
    <div className="mt-10">
      {!tituloSelecionado ? (
        <>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2F5495]">Escolha o código de negociação</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {lista.map((titulo) => (
              <button
                key={titulo.codigo}
                onClick={() => setTituloSelecionado(titulo)}
                className="rounded-3xl border bg-white p-6 text-left hover:border-[#2F5495] transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{titulo.codigo}</h3>
                <p className="mt-3 text-gray-600">Maturidade: {titulo.maturidade}</p>
                <p className="text-gray-600">Preço: {titulo.precoCompra} Kz</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-xl md:text-2xl font-bold text-[#2F5495]">Código selecionado</h2>

          <div className="mt-5 rounded-3xl border bg-white p-6">
            <h3 className="text-3xl font-bold text-gray-800">{tituloSelecionado.codigo}</h3>

            <div className="mt-4 text-gray-700 space-y-2">
              <p>
                ISIN: <b className="ml-2">{tituloSelecionado.isin}</b>
              </p>
              <p>
                Valor nominal: <b className="ml-2">{tituloSelecionado.nominal} Kz</b>
              </p>
              <p>
                Preço compra: <b className="ml-2">{tituloSelecionado.precoCompra} Kz</b>
              </p>
              <p>
                Maturidade: <b className="ml-2">{tituloSelecionado.maturidade}</b>
              </p>
            </div>

            <div className="mt-8">
              <label className="font-semibold">Quantos títulos deseja comprar ?</label>

              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="mt-3 w-full rounded-xl border p-4 text-center text-xl"
              />

              <div className="mt-4 flex flex-wrap justify-start gap-3">
                {[5, 10, 25, 30, 50].map((valor) => (
                  <button
                    key={valor}
                    onClick={() => setQuantidade(valor.toString())}
                    className={`h-10 w-10 rounded-full border font-semibold transition ${quantidade === valor.toString() ? "bg-[#2F5495] text-white border-[#2F5495]" : "bg-white text-[#2F5495] border-[#2F5495]"} hover:scale-105`}
                  >
                    {valor}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (!quantidadeNum || !tituloSelecionado) return;

                const resultData = {
                  invested: precoTotal,
                  nominalTotal,
                  annualRate,
                  couponPerPeriodTotal,
                  periods,
                  totalCoupons,
                  finalValue,
                  schedule: Array.from({ length: periods }, (_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() + 6 * (i + 1));
                    const day = String(d.getDate()).padStart(2, "0");
                    const month = String(d.getMonth() + 1).padStart(2, "0");
                    const year = d.getFullYear();
                    return {
                      period: i + 1,
                      date: `${day}/${month}/${year}`,
                      amount: Math.round(couponPerPeriodTotal),
                    };
                  }),
                };

                try {
                  localStorage.setItem("simulacaoResult", JSON.stringify(resultData));
                } catch (e) {
                  console.error("localStorage error", e);
                }

                router.push("/Results");
              }}
              disabled={!quantidade}
              className={`mt-6 w-full rounded-full py-4 font-bold text-white ${quantidade ? "bg-[#2F5495]" : "bg-[#2F5495]/40"}`}
            >
              VER SIMULAÇÃO
            </button>

            
          </div>
        </div>
      )}
    </div>
  );
}

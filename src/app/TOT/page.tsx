"use client";

import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TituloEscolhido from "./Components/TituloEscolhido";


const obrigacoes = [
    {
        codigo: "OTNR",
        titulo: "Obrigação do Tesouro Não Reajustável",
        descricao: "Emitidas em Kwanzas com rendimento definido."
    },
    {
        codigo: "OTME",
        titulo: "Obrigação do Tesouro em Moeda Estrangeira",
        descricao: "Emitidas em moeda estrangeira (USD)."
    },
    {
        codigo: "OTX",
        titulo: "Obrigação do Tesouro Indexada",
        descricao: "Cupão indexado a um indicador definido."
    },
    {
        codigo: "Eurobonds",
        titulo: "Eurobonds",
        descricao: "Títulos emitidos em mercados internacionais."
    }
];


type TipoObrigacao = "OTNR" | "OTME" | "OTX" | "Eurobonds";


export default function Tot() {


    const [tipoSelecionado, setTipoSelecionado] = useState<TipoObrigacao | null>(null);



    return (

        <main className="min-h-screen flex flex-col bg-gray-50">


            <Header />


            <section className="flex-1 px-6 py-24 mt-28">


                {!tipoSelecionado ? (

                    <div className="mx-auto max-w-6xl text-center">


                        <h1 className="text-3xl md:text-4xl font-bold text-[#2F5495]">
                            Escolha o tipo de obrigação
                        </h1>


                        <p className="mt-3 text-gray-600">
                            Cada tipo possui características distintas.
                            Selecione a opção que pretende simular.
                        </p>



                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">


                            {obrigacoes.map((item) => (


                                <button

                                    key={item.codigo}

                                    onClick={() => 
                                        setTipoSelecionado(item.codigo as TipoObrigacao)
                                    }

                                    className="
                                    rounded-3xl
                                    bg-white
                                    border
                                    border-gray-200
                                    p-6
                                    text-left
                                    cursor-pointer
                                    transition
                                    hover:border-[#2F5495]
                                    "

                                >


                                    <span
                                        className="
                                        inline-block
                                        rounded-full
                                        bg-[#2F5495]
                                        px-4
                                        py-1
                                        text-sm
                                        font-semibold
                                        text-white
                                        "
                                    >
                                        {item.codigo}
                                    </span>



                                    <h2 className="mt-4 text-xl font-bold text-gray-800">
                                        {item.titulo}
                                    </h2>



                                    <p className="mt-3 text-gray-600 text-sm">
                                        {item.descricao}
                                    </p>


                                </button>


                            ))}


                        </div>


                    </div>



                ) : (


                    <div className="mx-auto max-w-6xl">


                        <button
                            onClick={() => setTipoSelecionado(null)}
                            className="
                            mb-6
                            rounded-full
                            border
                            px-5
                            py-2
                            text-sm
                            hover:bg-gray-100
                            "
                        >
                            ← Voltar
                        </button>



                        <TituloEscolhido 
                            tipo={tipoSelecionado}
                        />


                    </div>


                )}



            </section>



            <Footer />


        </main>

    );
}
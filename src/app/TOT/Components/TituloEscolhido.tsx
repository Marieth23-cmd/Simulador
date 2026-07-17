"use client";

import { useState } from "react";


const titulos = {

    OTNR: [
        {
            codigo: "OG13M29A",
            isin: "AOUGDOGM26A9",
            nominal: 1000,
            precoCompra: 970,
            maturidade: "2029"
        },
        {
            codigo: "OG15M33A",
            isin: "AOUGDOGM31A1",
            nominal: 1000,
            precoCompra: 950,
            maturidade: "2031"
        },
        {
            codigo: "OG20M34A",
            isin: "AOUGDOGM34A2",
            nominal: 1000,
            precoCompra: 900,
            maturidade: "2034"
        },

     
    ],


    OTME: [
        {
            codigo: "OM10M29A",
            isin: "AOUGUSD29A1",
            nominal: 1000,
            precoCompra: 980,
            maturidade: "2029"
        },
        {
            codigo: "OM15M31A",
            isin: "AOUGUSD31A2",
            nominal: 1000,
            precoCompra: 950,
            maturidade: "2031"
        }
        ,
        {
            codigo: "OM15M32A",
            isin: "AOUGUSD31A2",
            nominal: 1000,
            precoCompra: 965,
            maturidade: "2031"
        }
    ],


    OTX: [
        {
            codigo: "OX12M30A",
            isin: "AOUGIDX30A1",
            nominal: 1000,
            precoCompra: 920,
            maturidade: "2030"
        },
         {
            codigo: "OX12M31A",
            isin: "AOUGIDX30A1",
            nominal: 1000,
            precoCompra: 1000,
            maturidade: "2035"
        },
         {
            codigo: "OX12M32A",
            isin: "AOUGIDX30A1",
            nominal: 1000,
            precoCompra: 990,
            maturidade: "2034"
        }
      
    ],


    Eurobonds: [
        {
            codigo: "EB30",
            isin: "AOEURO30A1",
            nominal: 1000,
            precoCompra: 1000,
            maturidade: "2035"
        }, 

         {
            codigo: "EB31",
            isin: "AOEURO30A1",
            nominal: 1000,
            precoCompra: 980,
            maturidade: "2030"
        }, 

         {
            codigo: "EB32",
            isin: "AOEURO30A1",
            nominal: 1000,
            precoCompra: 890,
            maturidade: "2030"
        }, 
       
    ]

};



type Props = {
    tipo: "OTNR" | "OTME" | "OTX" | "Eurobonds";
};


export default function TituloEscolhido({tipo}:Props){


    const lista = titulos[tipo];


    const [tituloSelecionado,setTituloSelecionado] = useState<any>(null);


    const [quantidade,setQuantidade] = useState("");



    return (

        <div className="mt-10">



        {!tituloSelecionado ? (

            <>


            <h2 className="text-xl font-bold text-[#2F5495]">
                Escolha o código de negociação
            </h2>



            <div className="
            mt-6
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            ">


            {lista.map((titulo)=>(


                <button

                key={titulo.codigo}

                onClick={()=>setTituloSelecionado(titulo)}

                className="
                rounded-3xl
                border
                bg-white
                p-6
                text-left
                hover:border-[#2F5495]
                transition
                duration-300
                "

                >


                    <h3 className="
                    text-xl
                    font-bold
                    text-[#2F5495]
                    ">
                        {titulo.codigo}
                    </h3>



                    <p className="mt-3 text-gray-600">
                        Maturidade: {titulo.maturidade}
                    </p>


                    <p className="text-gray-600">
                        Preço: {titulo.precoCompra} Kz
                    </p>


                </button>


            ))}


            </div>


            </>


        ) : (



            <div
            className="
            animate-in
            fade-in
            duration-500
            "
            >



                <h2 className="
                text-xl
                font-bold
                text-[#2F5495]
                ">
                    Código selecionado
                </h2>




                <div className="
                mt-5
                rounded-3xl
                border
                bg-white
                p-6
                "
                >



                    <h3 className="
                    text-3xl
                    font-bold
                    text-[#2F5495]
                    ">
                        {tituloSelecionado.codigo}
                    </h3>



                    <div className="mt-4 text-gray-700 space-y-2">


                        <p>
                            ISIN:
                            <b className="ml-2">
                                {tituloSelecionado.isin}
                            </b>
                        </p>



                        <p>
                            Valor nominal:
                            <b className="ml-2">
                                {tituloSelecionado.nominal} Kz
                            </b>
                        </p>



                        <p>
                            Preço compra:
                            <b className="ml-2">
                                {tituloSelecionado.precoCompra} Kz
                            </b>
                        </p>


                        <p>
                            Maturidade:
                            <b className="ml-2">
                                {tituloSelecionado.maturidade}
                            </b>
                        </p>



                    </div>




                    <div className="mt-8">


                        <label className="
                        font-semibold
                        ">
                            Quantidade de títulos
                        </label>



                        <input

                        type="number"

                        min="1"

                        value={quantidade}

                        onChange={(e)=>setQuantidade(e.target.value)}

                        className="
                        mt-3
                        w-full
                        rounded-xl
                        border
                        p-4
                        text-center
                        text-xl
                        "

                        />



                    </div>




                    <button

                    disabled={!quantidade}

                    className={`
                    mt-6
                    w-full
                    rounded-full
                    py-4
                    font-bold
                    text-white

                    ${
                    quantidade
                    ?
                    "bg-[#2F5495]"
                    :
                    "bg-[#2F5495]/40"
                    }

                    `}

                    >

                    VER SIMULAÇÃO

                    </button>



                </div>


            </div>


        )}



        </div>

    )

}
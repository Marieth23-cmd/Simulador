"use client";

import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function FormularioLead(){

    const [enviado, setEnviado] = useState(false);


    function enviarFormulario(e: React.FormEvent){

        e.preventDefault();

        setEnviado(true);

    }


    if(enviado){

        return(

            <main className="min-h-screen flex flex-col bg-gray-50">

                <Header/>


                <section className="
                flex-1
                flex
                items-center
                justify-center
                px-6
                py-32
                ">


                    <div className="
                    max-w-md
                    text-center
                    bg-white
                    rounded-3xl
                    border
                    p-8
                    ">


                        <h1 className="
                        text-3xl
                        font-bold
                        text-[#2F5495]
                        ">
                            Obrigado por participar!
                        </h1>


                        <p className="
                        mt-5
                        text-gray-600
                        ">
                            O resumo da sua simulação será enviado
                            brevemente.
                        </p>


                        <p className="
                        mt-5
                        text-gray-700
                        font-medium
                        ">
                            Dirija-se ao balcão Lucrum Trust
                            para receber o seu brinde.
                        </p>


                    </div>


                </section>


                <Footer/>

            </main>

        )

    }



    return(

        <main className="
        min-h-screen
        flex
        flex-col
        bg-gray-50
        ">


            <Header/>


            <section className="
            flex-1
            px-6
            py-32
            ">


                <div className="
                max-w-xl
                mx-auto
                ">


                    <div className="text-center">


                        <h1 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-[#2F5495]
                        ">
                            Receba o resumo da sua simulação
                        </h1>


                        <p className="
                        mt-3
                        text-gray-600
                        ">
                            Preencha os seus dados para receber
                            as informações do investimento.
                        </p>


                    </div>



                    <form
                    onSubmit={enviarFormulario}
                    className="
                    mt-10
                    bg-white
                    rounded-3xl
                    border
                    p-8
                    space-y-5
                    ">



                        <div>

                            <label className="text-sm font-semibold">
                                Nome
                            </label>

                            <input
                            required
                            type="text"
                            placeholder="Digite o seu nome"
                            className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            px-4
                            py-3
                            outline-none
                            focus:border-[#2F5495]
                            "
                            />

                        </div>



                        <div>

                            <label className="text-sm font-semibold">
                                Telefone
                            </label>

                            <input
                            required
                            type="tel"
                            placeholder="+244 9xx xxx xxx"
                            className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            px-4
                            py-3
                            outline-none
                            focus:border-[#2F5495]
                            "
                            />

                        </div>




                        <div>

                            <label className="text-sm font-semibold">
                                Email
                            </label>


                            <input
                            required
                            type="email"
                            placeholder="email@exemplo.com"
                            className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            px-4
                            py-3
                            outline-none
                            focus:border-[#2F5495]
                            "
                            />


                        </div>




                        <div>

                            <label className="text-sm font-semibold">
                                Empresa 
                                <span className="text-gray-400">
                                    {" "} (opcional)
                                </span>
                            </label>


                            <input
                            type="text"
                            placeholder="Nome da empresa"
                            className="
                            mt-2
                            w-full
                            rounded-xl
                            border
                            px-4
                            py-3
                            outline-none
                            focus:border-[#2F5495]
                            "
                            />


                        </div>




                        <button

                        type="submit"

                        className="
                        w-full
                        rounded-full
                        bg-[#2F5495]
                        py-4
                        text-white
                        font-bold
                        transition
                        hover:scale-[1.02]
                        "

                        >

                            ENVIAR

                        </button>



                    </form>



                </div>



            </section>


            <Footer/>


        </main>

    )

}
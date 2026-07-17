export default function Hero() {
    return (
        <div className="relative h-[60vh] w-full bg-gradient-to-br from-[#2f5495] via-[#2f5495] to-purple-700 overflow-hidden">
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                    Simulador de Investimento em Obrigações do Tesouro
                </h1>

                <p className="text-white mt-4 max-w-3xl text-lg">
                    As Obrigações do Tesouro são títulos emitidos pelo Estado Angolano.
                    Ao investir, empresta ao Estado por um período definido e recebe cupões
                    (juros) de 6 em 6 meses. No vencimento, o capital investido é devolvido na íntegra.
                </p>

            </div>

        </div>
    )
}
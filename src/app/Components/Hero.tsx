"use client";
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const imagens = [
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1784570418/young-african-american-businessman-reading-newspaper-talking-phone-his-office_xbzksx.jpg",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1784570414/c35aa69f-66a3-441c-9c4c-d633646bbf77_ynv3pl.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1784570414/image_ikyqea.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1784570411/photorealistic-money-with-plant_jcq9we.jpg",
];

const INTERVALO = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reiniciarTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, INTERVALO);
  }, []);

  useEffect(() => {
    reiniciarTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reiniciarTimer]);

  function proxima() {
    setIndex((prev) => (prev + 1) % imagens.length);
    reiniciarTimer();
  }

  function anterior() {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
    reiniciarTimer();
  }

  return (
    <section className="relative h-[80vh] md:h-[85vh] overflow-hidden">
      {/* Slider (crossfade) */}
      <div className="absolute inset-0">
        {imagens.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <Image
              height={100}
              width={100}
              src={img}
              className="h-full w-full object-cover"
              alt={`Imagem ${i + 1} do slider`}
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-5xl">
          Simulador de Investimento em Obrigações do Tesouro
        </h1>

        <p className="mt-5 max-w-3xl text-white text-base">
          As Obrigações do Tesouro são títulos emitidos pelo Estado Angolano.
          Ao investir, empresta ao Estado por um período definido e recebe
          cupões (juros) de 6 em 6 meses. No vencimento, o capital investido é
          devolvido na íntegra.
        </p>
      </div>

      {/* Botões */}
      <div className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button
          onClick={anterior}
          aria-label="Imagem anterior"
          className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition"
        >
          <FaChevronUp className="mx-auto" />
        </button>

        <button
          onClick={proxima}
          aria-label="Próxima imagem"
          className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition"
        >
          <FaChevronDown className="mx-auto" />
        </button>
      </div>
    </section>
  );
}
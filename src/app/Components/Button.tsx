import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BotaoSimular() {
  return (
    <section className="py-10 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto flex justify-center px-4 py-4 md:py-10">
        <Link
          href="/TOT"
          className="
            group
            flex items-center gap-3
            rounded-full
            bg-[#2f5495]
            px-10 py-5
            text-lg font-semibold tracking-wide
            text-white
            shadow-xl shadow-[#2f5495]/60
            transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-[#2f5495]/40
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-white
            motion-safe:animate-pulse-ring
          "
        >
          SIMULAR AGORA
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
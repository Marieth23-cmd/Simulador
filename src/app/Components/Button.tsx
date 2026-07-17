import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Button() {
    return (
        <main className="py-10 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto flex justify-center px-4 py-4 md:py-10">
                <Link
                    href="/TOT"
                    className="
                    group
                    flex items-center gap-3
                    rounded-full
                    bg-[#2f5495]
                    px-10 py-5
                    text-lg font-semibold
                    text-white
                    shadow-xl shadow-[#2F5495]/60
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:shadow-blue-600/40
                    animate-pulse-ring
                "
                >
                SIMULAR AGORA
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </main>
    );
}
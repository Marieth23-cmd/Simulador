import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaHandshake } from "react-icons/fa";

export default function Obrigado() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-lg w-full text-center bg-white border border-gray-200 rounded-3xl p-8 md:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2F5495]/10">
            <FaHandshake className="text-4xl text-[#2F5495]" />
          </div>

          <h1 className="mt-8 text-3xl md:text-4xl font-bold text-[#2F5495]">
            Obrigado pelo interesse
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            A nossa equipa está aqui para si — dirija-se ao balcão
            Lucrum Trust e continue a conversa connosco.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
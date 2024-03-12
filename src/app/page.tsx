import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="background_hero h-screen">
      <Navbar />
      <div>
        <h1 className="font-bold text-white text-5xl p-4">De ahora en <br />adelante, hacés  <br /> más con tu dinero</h1>
        <h2 className="font-medium text-[#0AEB8C] text-4xl p-4">Tu nueva <span className="font-bold">billetera virtual</span></h2>
        </div>
        <div className="flex items-center gap-2 justify-center ">
      <div className="max-w-[20em] bg-white flex flex-col items-center rounded-md p-4">
        <h1 className="text-black font-bold text-4xl border-b border-[#0AEB8C] mx-2">Transferí dinero</h1>
        <h2 className="text-black text-2xl">Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como tambíen recibir transferencias y nuclear tu capital en nuestra billetera virtual</h2>
      </div>
      <div className="max-w-[20em] bg-white flex flex-col items-center rounded-md p-4">
        <h1 className="text-black font-bold text-4xl border-b border-[#0AEB8C] mx-2">Pago de servicios</h1>
        <h2 className="text-black text-2xl">Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel</h2>
      </div>
      </div>
    </main>
  );
}

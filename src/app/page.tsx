import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="background_hero h-screen">
      <Navbar />
      <div>
        <h1 className="font-medium text-white text-[27px] p-4  lg:text-5xl max-w-[50%] tracking-tight leading-6	">De ahora en adelante, hacés  más con tu dinero</h1>
      <div className="border border-[#0AEB8C] w-6 ml-4"></div>
        <h2 className=" text-[#0AEB8C] text-[21px] p-4 max-w-[50%]">Tu nueva <span className="font-bold">billetera virtual</span></h2>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center z-20 ">
      <div className="max-w-[20em] bg-white flex flex-col  rounded-md p-4 z-20 m-2">
        {/* <Image alt="CardLanding" src={"/cardLanding.png"} width={200} height={200} className="w-auto h-auto absolute b-2"/> */}
                <h1 className="text-black font-bold text-[28px] border-b border-[#0AEB8C] ">Transferí dinero</h1>
        <h2 className="text-black text-[16px]">Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como tambíen recibir transferencias y nuclear tu capital en nuestra billetera virtual</h2>
      </div>
      <div className="max-w-[20em]  bg-white flex flex-col  rounded-md p-4 z-20 m-2 ">
        {/* <Image alt="CardLanding" src={"/cardLanding2.png"} width={200} height={200} className="w-auto h-auto absolute b-2"/>  */}
        <h1 className="text-black font-bold text-[28px] border-b border-[#0AEB8C] ">Pago de servicios</h1>
        <h2 className="text-black text-[16px]">Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel</h2>
      </div>
      <div className="bg-[#0AEB8C] w-full absolute h-[148px] bottom-0 rounded-t-xl z-10 "></div>
      </div>
    </main>
  );
}

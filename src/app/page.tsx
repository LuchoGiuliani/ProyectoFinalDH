import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="background_hero relative">
     
      <section className="w-[60%] h-[50%] pt-8 pl-5 md:pl-6 flex flex-col gap-2">
        <h1 className="text-white font-semibold    md:text-[48px] md:leading-10  text-[27px] leading-6 md:font-normal	">De ahora en <br /> adelante, hacés <br className="" />  más con tu dinero</h1>
        <div className="border border-[#0AEB8C] w-6  md:hidden "></div>
        <h2 className="text-[#0AEB8C] md:text-[34px]  leading-8 ">Tu nueva <span className="font-bold text-[22px] md:text-[34px] md:leading-10"><br className="md:hidden" /> billetera virtual</span></h2>
      </section>
      <section className="bg-[#0AEB8C] px-5 bottom-0 absolute flex flex-col w-full h-[40%] md:h-[20%] rounded-t-xl ">
        <div className="bg-white rounded-xl p-6 ">
          <h1>Transferí dinero</h1>
          <h2 className="border border-t-[#0AEB8C]">Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como tambíen recibir transferencias y nuclear tu capital en nuestra billetera virtual</h2>
        </div>
        <div className="bg-white rounded-xl">
          <h1>Pago de servicios</h1>
          <h2 className="border border-t-[#0AEB8C]">Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel</h2>
        </div>
        <div></div>
      </section>
    </main>
  );
}

{
  /* <div>
  <h1 className="font-medium text-white text-[27px] p-4  lg:text-5xl max-w-[50%] tracking-tight leading-6	">De ahora en adelante, hacés  más con tu dinero</h1>
<div className="border border-[#0AEB8C] w-6 ml-4"></div>
  <h2 className=" text-[#0AEB8C] text-[21px] p-4 max-w-[50%]">Tu nueva <span className="font-bold">billetera virtual</span></h2>
  </div>
  <div className="flex flex-col items-center gap-2 justify-center z-20">
<div className="max-w-[20em] bg-white flex flex-col  rounded-md p-4 z-20 m-2">
 
          <h1 className="text-black font-bold text-[28px] border-b border-[#0AEB8C] ">Transferí dinero</h1>
  <h2 className="text-black text-[16px]">Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como tambíen recibir transferencias y nuclear tu capital en nuestra billetera virtual</h2>
</div>
<div className="max-w-[20em]  bg-white flex flex-col  rounded-md p-4 z-20 m-2 ">

  <h1 className="text-black font-bold text-[28px] border-b border-[#0AEB8C] ">Pago de servicios</h1>
  <h2 className="text-black text-[16px]">Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel</h2>
</div>
<div className="bg-[#0AEB8C] w-full absolute h-[148px] bottom-[0px] rounded-t-xl z-10 "></div>
</div> */
}

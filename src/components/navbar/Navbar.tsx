import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#052A2D] flex justify-between px-4 py-2 items-center">
      <section>
        <Link href={"/"}>
          <Image
            className="w-auto h-auto "
            src={"/logo.png"}
            alt="Logo"
            width={96}
            height={43}
            priority
          />
        </Link>
      </section>
      <section className="flex gap-4">
        <Link
          href={"/login"}
          className="border border-[#0AEB8C] p-2 rounded-md text-[#0AEB8C] font-bold"
        >
          Ingresar
        </Link>
        <Link
          href={"/register"}
          className="bg-[#0AEB8C] p-2 rounded-md text-[#052A2D] font-bold"
        >
          Crear Cuenta
        </Link>
      </section>
    </div>
  );
};

export default Navbar;

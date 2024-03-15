"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";


const BASE_URL = "https://digitalmoney.ctd.academy"
// Definimos los tipos para los datos del formulario
interface FormData {
  dni: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
}

// Definimos el tipo para la respuesta de la API
interface ApiResponse {
  account_id: number;
  email: string;
  user_id: number;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dni: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    phone: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://digitalmoney.ctd.academy/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Error al crear la cuenta");
      }
      const data: ApiResponse = await response.json();
      console.log("Usuario creado:", data);
      // Aquí puedes manejar la respuesta, redirigir al usuario, etc.
    } catch (error) {
      console.error("Error:", error.message);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <section className='h-screen bg-[#052A2D]'>
      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <h1 className="text-white text-center">Crear Cuenta</h1>
        <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
          <input className="rounded-md max-w-[300px] p-2 w-full" type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Nombre*" />
          <input className="rounded-md max-w-[300px] p-2 w-full" type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Apellido*"/>
          <input className="rounded-md max-w-[300px] p-2 w-full" type="text" name="dni" value={formData.dni} onChange={handleChange} placeholder="DNI*"/>
          <input className="rounded-md max-w-[300px] p-2 w-full" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico*"/>
          <h3 className="text-[16px] text-white font-light max-w-[300px]">Usa entre 6 y 20 carácteres, debe contener al menos 1 carácter especial, una mayúscula y un número.</h3>
          <input className="rounded-md max-w-[300px] p-2 w-full" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña*"/>
          <input className="rounded-md max-w-[300px] p-2 w-full" type="password" placeholder="Confirmar Contraseña*" />
          <input className="rounded-md max-w-[300px] p-2 w-full" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono*" />
          <button className="bg-[#0AEB8C] rounded-md text-center max-w-[300px] w-full" type="submit">Crear Cuenta</button>
        </form>
      </div>
    </section>
  );
};

export default Page;

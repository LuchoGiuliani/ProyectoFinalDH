"use client"

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import LoginScheme from "@/schemas/login.scheme";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
    username: string;
    password: string;
}

const BASE_URL = "digitalmoney.ctd.academy"

const LoginForm = () => {

    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);
    const methods = useForm<FormData>({
        resolver: yupResolver(LoginScheme)
    });
    const {handleSubmit} = methods;

    const onSubmit = async (data: FormData) => {
        setServerError(null);
        try {
            const loginResponse = await fetch(`${BASE_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.username, // Suponiendo que el campo del formulario para el correo electrónico se llama "username"
                    password: data.password,
                }),
            });
            console.log("loginResponse:" , loginResponse);
            
            if (loginResponse.ok) {
                // Si la respuesta del servidor es exitosa (código de estado 200-299),
                // redirecciona al usuario a la página principal u otra página deseada.
                router.push("/");
              
            } else {
                // Si la respuesta no es exitosa, muestra un mensaje de error al usuario.
                const responseData = await loginResponse.json();
                console.error("Error during login:", responseData.error);
                setServerError("Tus credenciales son inválidas");
            }
        } catch (e) {
            // Si hay algún error durante la solicitud, muestra un mensaje de error genérico.
            console.error("Error during login:", e);
            setServerError("Ha ocurrido un error. Intente más tarde.");
        }
    }
    

    return <FormProvider {...methods}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <InputText  
                fieldName={"Correo"} 
                placeholder="Correo electronico"
                type="text"

             />
             <InputText 
                fieldName={"password"} 
                placeholder="Contraseña"
                type="password"
             />
            <SubmitButton label={"Ingresar"} 
                onSubmit={onSubmit} 
                />
                <div className="border border-[#0AEB8C] text-[#0AEB8C] rounded-md p-2">Continua con google</div>
            {serverError && 
                <div className="text-red-600">{serverError}</div>
            }
        </form>
</FormProvider>
}

export default LoginForm;
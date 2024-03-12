"use client"
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import LoginScheme from "@/schemas/login.scheme";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
    email: string;
    password: string;
}

const BASE_URL = "http://digitalmoney.ctd.academy"

const LoginForm = () => {
    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);
    const methods = useForm<FormData>({
        resolver: yupResolver(LoginScheme)
    });
    const { handleSubmit } = methods;

    const onSubmit = async (data: FormData) => {
        setServerError(null);
        try {
            const loginResponse = await fetch(`${BASE_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (loginResponse.ok) {
                const responseData = await loginResponse.json();
                const token = responseData.token;
                // Guarda el token en el almacenamiento local o en el contexto de tu aplicación
                // Redirige al usuario a la página principal o a otra página deseada
                router.push("/");
            } else {
                const errorData = await loginResponse.json();
                console.error("Error during login:", errorData.error);
                setServerError("Tus credenciales son inválidas");
            }
        } catch (e) {
            console.error("Error during login:", e);
            setServerError("Ha ocurrido un error. Intente más tarde.");
        }
    }

    return (
        <FormProvider {...methods}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <InputText  
                    fieldName={"email"} 
                    placeholder="Correo electrónico"
                    type="email"
                />
                <InputText 
                    fieldName={"password"} 
                    placeholder="Contraseña"
                    type="password"
                />
                <SubmitButton label={"Ingresar"} onSubmit={onSubmit} />
                <div className="border border-[#0AEB8C] text-[#0AEB8C] rounded-md p-2">Continua con Google</div>
                {serverError && <div className="text-red-600">{serverError}</div>}
            </form>
        </FormProvider>
    );
}

export default LoginForm;

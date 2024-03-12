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

const BASE_URL = "https://digitalmoney.ctd.academy"

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
                    type="email" autoComplete={""} />
                <InputText 
                    fieldName={"password"} 
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="current-password"
                />
                <SubmitButton label={"Ingresar"} onSubmit={onSubmit} />
                <div className="border border-[#0AEB8C] text-[#0AEB8C] rounded-md p-2">Continua con Google</div>
                {serverError && <div className="text-red-600">{serverError}</div>}
            </form>
        </FormProvider>
    );
}

export default LoginForm;

// "use client"
// import { redirect } from 'next/dist/server/api-utils';
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const LoginForm: React.FC = () => {
   
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
  
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     try {
//       const response = await fetch('https://digitalmoney.ctd.academy/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
      
//       if (!response.ok) {
//         throw new Error('Invalid credentials');
//       }
      
//       const data = await response.json();
 
//       console.log('Token:', data.token);

      
//       // Aquí podrías hacer algo con el token, como almacenarlo en el estado global de tu aplicación.
//     } catch (error) {
//       setError(error.message);
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input 
//           type="email" 
//           id="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input 
//           type="password" 
//           id="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//       </div>
//       {error && <div>{error}</div>}
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;


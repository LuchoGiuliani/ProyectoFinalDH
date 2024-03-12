import { useFormContext,FieldValues } from "react-hook-form";


type  InputTextProps = {
    fieldName:string;
    placeholder?: string;
    type: "email" | "password";
    autoComplete: string
}


const InputText = ({placeholder,fieldName,type}: InputTextProps) => {
    const {register,formState:{errors}} = useFormContext()

 return  <div className="flex flex-col gap-2  ">

 <input className="text-black p-2 rounded-md" {...register(fieldName)} type={type} placeholder={placeholder} autoComplete="current-password"/>
 {errors && errors[fieldName] && <div>Este campo es incorrecto</div>}
</div>


}

export default InputText
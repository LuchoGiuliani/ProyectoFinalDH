import { useFormContext,FieldValues } from "react-hook-form";


type  InputTextProps = {
    fieldName:string;
  
    placeholder?: string;
    type: "text" | "password"
}


const InputText = ({placeholder,fieldName,type}: InputTextProps) => {
    const {register,formState:{errors}} = useFormContext()

 return  <div className="flex gap-4 justify-between  ">

 <input className="text-black p-2 rounded-md" {...register(fieldName)} type={type} placeholder={placeholder} />
 {errors && errors[fieldName] && <div>Este campo es incorrecto</div>}
</div>


}

export default InputText
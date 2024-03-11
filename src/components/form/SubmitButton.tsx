import {FieldValues, useFormContext} from "react-hook-form"

type  SubmitButtonProps<T> = {
    onSubmit: (data: T) => void;
    label:string;
}


const SubmitButton = <T extends FieldValues,> ({onSubmit,label}:SubmitButtonProps<T>) => {

    const {handleSubmit} = useFormContext<T>()

    return <div className="bg-[#0AEB8C] p-2  text-[#052A2D]  flex  items-center justify-center rounded-md">
        <button className="hover:text-black" onClick={handleSubmit(onSubmit)}>{label}</button>
    </div>
}

export default SubmitButton
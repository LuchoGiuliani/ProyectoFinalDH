
import LoginForm from '@/components/auth/LoginForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const page = () => {


  return (
    <div className='h-screen bg-[#052A2D]'>
      <section className='bg-[#0AEB8C] flex justify-between px-4 py-2 items-center'>
      <Link href={"/"}>
          <Image
            className="w-auto h-auto "
            src={"/logo2.png"}
            alt="Logo"
            width={96}
            height={43}
            priority
          />
        </Link>
      </section>
      <section className='flex flex-col h-screen items-center justify-center p-4 gap-4'>
         <div className=''>
          <h1 className='text-center'>Iniciar sesión</h1>
          <div>
          <LoginForm />
          </div>
         </div>
      </section>
    </div>
  )
}

export default page
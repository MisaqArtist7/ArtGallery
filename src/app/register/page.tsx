"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
    fullname: z.string().min(8, "Name must be at least 8 characters").max(100, "Name must be at most 100 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters")
})
type FormData = z.infer<typeof schema>

export default function RegisterPage() {
    const [permission, setPermission] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('/api/register', {
                method:'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
            if(!response.ok){
                const errorText = await response.text();
                throw new Error(errorText || "Something went wrong")
            }
            const result = await response.json()
            localStorage.setItem('token', result.token)
            console.log(result)
        }
        catch(error) {
            console.log(error)
        }
    }

  return (
    <main className='bg-[#F7F7F7]'>
        <section className='flex-row-center min-h-screen'>
            <div className='flex flex-col gap-3 bg-white shadow p-6 rounded-lg w-sm'>
                <div className='flex justify-between items-center'>   
                    <h1 className='font-semibold text-xl'>Sign up</h1>
                    <span className='hover:cursor-pointer'>
                        <svg className='w-6 h-6 hover:text-[var(--primaryBlue)]'>
                            <use href="#backspace" />
                        </svg>
                    </span>
                </div>

                <Link href="#" className='flex justify-center items-center gap-2 border-2 border-gray-300 hover:border-[var(--primaryBlue)]/40 px-7 py-2 rounded-md'>
                    <Image src="/images/google.svg" alt="Description" width={17} height={17} />
                    Sign up with Google
                </Link>

                <span className='border-1 border-gray-200 mb-3 my-2 w-[calc(95%-1rem)] mx-auto'></span>

                <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Full name:</label>
                        <input {...register("fullname")}
                        type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='Enter your name'/>
                        {errors.fullname && <span className='text-red-500'>{errors.fullname.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email:</label>
                        <input {...register("email")}
                        type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='example@email.com'/>
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Password:</label>
                        <input {...register("password")}
                        type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='at least 8 characters'/>
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>

                    <div className='flex items-center gap-1 my-3'>
                        <input onClick={() => setPermission(!permission)}
                        type="checkbox" id="terms" />
                        <label className='text-gray-600'>I agree with <span className='text-[var(--primaryBlue)]'>Terms</span> and <span className='text-[var(--primaryBlue)]'>Privacy</span></label>
                    </div>

                    <button disabled={permission} className={`${permission ? 'cursor-not-allowed opacity-50 bg-[var(--primaryBlue)]' : ''} authBtn `}>Sign up</button>
                </form>

                <span className='border-1 border-gray-200 mb-3 my-2 w-[calc(95%-1rem)] mx-auto'></span>

                <div className='flex-col-center text-gray-700'>
                    <span className='text-md'>Already have an account?</span>
                    <Link href="/login  " className='text-[var(--primaryBlue)] hover:underline'>Log in</Link>
                </div>
            </div>
        </section>
    </main>
  )
}

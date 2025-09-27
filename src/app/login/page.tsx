"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters").max(32, "Must be a maximum of 32 characters"),
})
type formData = z.infer<typeof schema>

export default function LoginPage() {
    const [permission, setPermission] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: formData) => {
        console.log(data)
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(data) ,
                headers: {
                    'content-type': 'application/json'
                }
            })
            if(!response.ok) {
                const errorText = await response.text()
                throw new Error(errorText || "Something went wrong")
            }
            const result = await response.json()
            localStorage.setItem('token', result.token)
            console.log(result)
        } catch(error) {
            console.log("Fetching went wrong: ", error)
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
                    Log in with Google
                </Link>

                <span className='border-1 border-gray-200 mb-3 my-2 w-[calc(95%-1rem)] mx-auto'></span>

                <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input {...register("email")}
                         type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='example@email.com'/>
                         {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <input {...register("password")}
                        type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='at least 8 characters'/>
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>

                    <div className='flex items-center gap-1 my-3'>
                        <input type="checkbox" id="terms" onClick={() => setPermission(!permission)} />
                        <label className='text-gray-600'> Remember me</label>
                    </div>

                    <button disabled={permission} className={`${permission ? 'cursor-not-allowed opacity-50 bg-[var(--primaryBlue)]' : ''} authBtn`}>Sign in</button>
                </form>

                <span className='border-1 border-gray-200 mb-3 my-2 w-[calc(95%-1rem)] mx-auto'></span>

                <div className='flex-col-center text-gray-700'>
                    <span className='text-md'>haven&apos;t an account yet?</span>
                    <Link href="/register" className='text-[var(--primaryBlue)] hover:underline'>Sign up</Link>
                </div>
            </div>
        </section>
    </main>
  )
}

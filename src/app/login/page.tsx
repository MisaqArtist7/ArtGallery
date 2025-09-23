import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
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

                <form action="" className='flex flex-col gap-3'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='example@email.com'/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <input type="text" className='flex justify-center items-center gap-2 border-2 border-gray-300 focus:outline-[var(--primaryBlue)] px-3 py-2 rounded-md' placeholder='at least 8 characters'/>
                    </div>

                    <div className='flex items-center gap-1 my-3'>
                        <input type="checkbox" id="terms" />
                        <label className='text-gray-600'> Remember me</label>
                    </div>

                    <button className='authBtn'>Sign up</button>
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

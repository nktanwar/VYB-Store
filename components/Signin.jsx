'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the validation schema
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export default function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div 
      className="flex flex-col items-center justify-evenly h-[500px] md:w-[840px] md:h-[377px] md:flex-row md:justify-evenly md:items-center rounded-2xl" 
      style={{ backgroundColor: '#A94949' }}  // Corrected to use quotes
    >
      <div  >
        <img src="text.png" alt="Logo" />
      </div>

      <div className="bg-black md:w-[280px] md:h-[350px] rounded-2xl flex items-center flex-col text-white p-2 relative mt-6 ">

       <div className=" w-[180px] h-[50px]  flex justify-center  text-xl rounded-2xl font-semibold " style={{ borderImage: 'linear-gradient(to right, #FF5D5D, #4794FF) 1' }}>
                        <button className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5D5D] to-[#4794FF] rounded-lg">
                            Login with Google
                        </button>
                    </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mt-4 gap-3">
        <div className="mb-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-black  text-white"
            {...register('email')}
          />
          {errors.email && <span className="text-red-400">{errors.email.message}</span>}
        </div>
        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-black text-white"
            {...register('password')}
          />
          {errors.password && <span className="text-red-400">{errors.password.message}</span>}
        </div>
        <div className="mt-2">
          <button type="submit" className="w-full bg-green-500 py-2 rounded">Login</button>
        </div>
      </form>
      <div className=" text-center">
        <span>
          Don’t have an account? <button className="text-blue-400">Get Started</button>
        </span>
      </div>
    </div>
       
      </div>
   
  );
}

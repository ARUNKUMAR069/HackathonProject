import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-screen h-[87.7vh] flex items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className="h-[32em] w-[90%] md:w-[30em] bg-[#111] p-8 neon-border rounded-lg">
            <h2 className="text-center text-2xl font-bold text-white mb-6">Login</h2>
            <div className="mb-4">
                <label className="block text-white">Adhhar No:</label>
                <input
                    type="text"
                    {...register('name', { required: true })}
                    className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>
            <div className="mb-4">
                <label className="block text-white">Email</label>
                <input
                    type="email"
                    {...register('email', { 
                        required: "Email is required", 
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address"
                        }
                    })}
                    className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="mb-4">
                <label className="block text-white">Password</label>
                <input
                    type="password"
                    {...register('password', { 
                        required: "Password is required", 
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <button type="submit" className="w-full p-3 mt-4 text-white bg-[#03AED2] rounded-md hover:bg-[#68D2E8] transition-all">
                Submit
            </button>
        </form>
    </div>
    );
}

export default Login;

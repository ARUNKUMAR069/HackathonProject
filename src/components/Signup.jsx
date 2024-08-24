import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-screen  h-auto mt-7   flex items-center justify-center  '>
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="w-[90%] md:w-[75vw] bg-[#111] p-6  neon-border rounded-lg flex flex-col gap-6   "
            >
                <h2 className="text-center text-2xl font-bold text-white mb-6">New User Registration</h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="block text-white">Full Name</label>
                        <input
                            type="text"
                            {...register('fullName', { required: "Full name is required" })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="block text-white">Date of Birth</label>
                        <input
                            type="date"
                            {...register('dob', { required: "Date of birth is required" })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
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

                    <div className="flex flex-col w-full">
                        <label className="block text-white">Mobile Number</label>
                        <input
                            type="tel"
                            {...register('mobile', { 
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid mobile number"
                                }
                            })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
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

                    <div className="flex flex-col w-full">
                        <label className="block text-white">Confirm Password</label>
                        <input
                            type="password"
                            {...register('confirmPassword', { 
                                required: "Confirm Password is required", 
                                validate: (value) => value === watch('password') || "Passwords do not match"
                            })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="block text-white">Identification Number</label>
                        <input
                            type="text"
                            {...register('idNumber', { required: "Identification number is required" })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.idNumber && <span className="text-red-500 text-sm">{errors.idNumber.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="block text-white">Upload Profile Picture</label>
                        <input
                            type="file"
                            {...register('profilePic', { required: "Profile picture is required" })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.profilePic && <span className="text-red-500 text-sm">{errors.profilePic.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col w-full">
                        <label className="block text-white">Upload ID Proof</label>
                        <input
                            type="file"
                            {...register('idProof', { required: "ID proof is required" })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.idProof && <span className="text-red-500 text-sm">{errors.idProof.message}</span>}
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="block text-white">Upload Academic Records</label>
                        <input
                            type="file"
                            {...register('academicRecords', { required: "Academic records are required" })}
                            className="w-full p-2 rounded-md bg-[#222] text-white border-none outline-none"
                        />
                        {errors.academicRecords && <span className="text-red-500 text-sm">{errors.academicRecords.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <button type="submit" className="w-full p-3 mt-4 text-white bg-[#03AED2] rounded-md hover:bg-[#68D2E8] transition-all">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;

'use client';

import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { Key, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { validationSchema } from './validationSchema';
import { Button } from '@/components/ui/button';

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden h-full items-center justify-center rounded-r-2xl border border-r-2  bg-white md:flex">
        <h1 className="text-lg font-bold text-[#393e41]">
          EVENT<span className="text-lg text-[#e94f37]">IFY</span>
        </h1>
      </div>
      <div className="h-[600px] max-w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto flex h-full max-w-[500px] flex-col justify-center space-y-5 px-10"
        >
          <h1 className="text-xl font-bold md:py-5">Register</h1>

          <div className="space-y-2">
            <h1 className="text-[15px] font-semibold">Username</h1>
            <label className="input input-bordered flex h-[40px] items-center gap-2 rounded-lg">
              <User color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h1 className="text-[15px] font-semibold">Email</h1>
            <label className="input input-bordered flex h-[40px] items-center gap-2 rounded-lg">
              <Mail color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h1 className="text-[15px] font-semibold">Password</h1>
            <label className="input input-bordered flex h-[40px] items-center gap-2 rounded-lg">
              <Key color="gray" size={20} />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <Button className=" bg-[#e94f37] text-black font-bold rounded-ful w-full">
            Register
          </Button>
          <p className="text-[#393e41]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#e94f37]">
              Login
            </Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

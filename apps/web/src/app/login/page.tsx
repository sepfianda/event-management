'use client';

import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { Key, Mail } from 'lucide-react';
import Link from 'next/link';
import { validationSchema } from './validationSchema';
import useLogin from '@/hooks/api/auth/useLogin';

const Login = () => {
  const {login} = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
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
          onSubmit={handleSubmit}
          className="mx-auto flex h-full max-w-[500px] flex-col justify-center space-y-5 px-10"
        >
          <h1 className="text-xl font-bold md:py-5">Login</h1>

          <div className="space-y-2">
            <h1 className="text-[15px] font-semibold">Email</h1>
            <label className="input input-bordered flex h-[40px] items-center gap-2 rounded-lg">
              <Mail color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
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
                value={values.password}
                onChange={handleChange}
              />
            </label>
          </div>

          <Button className=" bg-[#e94f37] text-black font-bold rounded-ful w-full">
            Login 
          </Button>
          <p className="text-[#393e41]">
            Don't have an account yet?{' '}
            <Link href="/register" className="text-[#e94f37]">
              Register
            </Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

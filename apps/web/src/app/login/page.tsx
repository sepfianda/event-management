"use client";

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';

const Login = () => {
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //validationSchema,
    onSubmit: (values) => {
    //register(values);
    },
  });

  return (
    <main className="container mx-auto h-[90vh] px-4">
    <div className="mt-0 pt-40 flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-primary">
            Welcome to Eventify
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <Forminput
                name="email"
                type="text"
                label="Email"
                placeholder="Email"
                value={values.email}
                error={errors.email}
                isError={!!touched.email && !!errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />

              <Forminput
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={values.password}
                error={errors.password}
                isError={
                  !!touched.password && !!errors.password
                }
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <Button className="mt-6 w-full bg-[#ED7D31] font-extrabold text-black">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </main>
  )
}

export default Login
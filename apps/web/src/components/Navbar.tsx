'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const router = useRouter();

  const dispatch = useAppDispatch();

  const {id} = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  }

  return (
    <nav>
      <div className="fixed w-full h-10 bg-[#ED7D31] z-10">
        <div className="flex items-center w-full h-10 justify-between">
          <Image
            src="/images/logoEventify.png"
            alt="logo"
            className="cursor-pointer p-3"
            width={170}
            height={170}
          />
          {Boolean(id) ? (
            <div className="hidden md:block">
            <div className="flex font-extrabold cursor-pointer items-center gap-8 text-white p-5">
              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3 onClick={() => router.push("/create")}>Create Event</h3>
              <h3 onClick={() => router.push("/profile")}>Profile</h3>
              <h3 onClick={logout}>Log Out</h3>
            </div>
          </div>
          ) : (
            <div className="hidden md:block">
            <div className="flex font-extrabold cursor-pointer items-center gap-8 text-white p-5">
              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3 onClick={() => router.push("/login")}>Log In</h3>
              <h3 onClick={() => router.push("/register")}>Register</h3>
            </div>
          </div>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="block md:hidden text-gray-900"
            >
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Home</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log In</DropdownMenuItem>
              <DropdownMenuItem>Register</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

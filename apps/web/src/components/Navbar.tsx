'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
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
          <div className="hidden md:block">
            <div className="flex font-extrabold cursor-pointer items-center gap-8 text-white p-5">
              <h3>Event</h3>
              <h3>Log In</h3>
            </div>
          </div>
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
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Event</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

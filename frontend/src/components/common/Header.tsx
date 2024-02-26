
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';



const Header = () => {

  const { loginWithRedirect, user, isAuthenticated ,logout} = useAuth0();
  console.log(user)
  return (
    <div className=' py-6 w-[85%] mx-auto  '>
      <div className='mx-auto flex justify-between items-center'>
        <Link to={"/"}
          className='text-3xl font-semibold tracking-tight text-orange-500'>
          MernEats.com
        </Link>

        <div className='md:hidden'>
          <MobileNav />
        </div>

        <div className='hidden md:block  lg:flex  items-center justify-center'>
          {
            isAuthenticated
              ? <div className='flex flex-row items-center gap-2  text-2xl font-semibold cursor-pointer'>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className='flex flex-row gap-2'>
                      <CircleUserRound className='text-4xl text-orange-500' />
                      <p className='text-xl font-semibold text-blue-800'>{user?.email}</p>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=''>
                    <DropdownMenuItem>
                      <Link
                        to="/manage-restaurant"
                        className="font-bold hover:text-orange-500"
                      >
                        Manage Restaurant
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/user-profile" className="font-bold hover:text-orange-500">
                        User Profile
                      </Link>
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem>
                      <Button
                        onClick={() => logout()}
                        className="flex flex-1 font-bold bg-orange-500">
                        Logout
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
              : <p onClick={() => loginWithRedirect()}
                className=' hover:text-orange-500 text-black font-semibold cursor-pointer'>
                Log In
              </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Header

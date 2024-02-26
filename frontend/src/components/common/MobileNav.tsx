import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { CircleUserRound, Menu } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

  

const MobileNav = () => {
   
  const {isAuthenticated,user,loginWithRedirect,logout,handleRedirectCallback} = useAuth0();

  return (
    <Sheet>
  <SheetTrigger>
    <Menu className="text-orange-500"/>
</SheetTrigger>

  <SheetContent className="space-y-3">
    <SheetHeader>
      <SheetTitle className="text-start text-xl border-black border-b p-2">
      {
        isAuthenticated 
        ? <div className='flex flex-row gap-2'>
        <CircleUserRound className='text-4xl text-orange-500' />
        <p className='text-xl font-semibold text-blue-800'>{user?.email}</p>
      </div>
        : "Welcome to MernEats.com!"
      } 
      </SheetTitle>
      <SheetDescription>
       {
        isAuthenticated 
        ? <div className="w-full flex flex-col gap-2 text-sm">
          <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button
      onClick={() => logout()}
        className="flex w-full items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
        </div> 
        : <Button onClick={() => loginWithRedirect()}
        variant={"outline"} className="bg-orange-500 text-white font-semibold w-full hover:bg-orange-400">
        Log In
       </Button>
       }
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav

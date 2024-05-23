"use client"
import Link from "next/link";
import MaxWitdhWrapper from "../Wrapper/MaxWitdhWrapper";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Navbar = () => {
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState();
    const [userInfo, setUserInfo] = useState(); 
  
    useEffect(() => {
      let isAuth : any= localStorage.getItem('isAuthenticated');
      isAuth = isAuth === "true"; 
      let userInfo : any = localStorage.getItem("userInfo"); 
      if(userInfo)
          setUserInfo(JSON.parse(userInfo));
      
      setIsAuthenticated(isAuth);
    },[]); 


    const handleLogout = async() => {
      try {
  
        const {data} = await axios.post("/api/auth/logout");
        localStorage.setItem("userInfo", "");
        localStorage.setItem("isAuthenticated", "");
  
        if (data?.success) {
          router.push("/")
      
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      } catch (error: any) {
        return new Error(error.message);
      }    
    }

  return (
    <nav className="h-14 w-full sticky z-[100] inset-x-0 top-0 border-b border-gray-500/40 bg-white/50 backdrop-blur-md">
      <MaxWitdhWrapper className="">
        <div className=" h-full flex justify-between items-center">
          <Link href={"/"} className="text-sm md:text-lg font-bold flex">
            Aestheticifier  <span>🎨</span>
          </Link>

          <div className="flex justify-center gap-3 md:gap-6 items-center">
            <Link href={"/"} className=" hover:border-b hover:border-black/25">
              home
            </Link>

            <Link
              href={"/design"}
              className=" hover:border-b hover:border-black/25"
            >
              design
            </Link>

            {/* {isAdmin && (
              <Link
                href={"/dashboard"}
                className=" hover:border-b hover:border-black/25"
              >
                dashboard
              </Link>
            )} */}

            {isAuthenticated ? (
              <button
                className="px-3 py-1 bg-black text-white rounded-lg hover:bg-black/75 active:ring-1 active:ring-gray-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <Link
                  className="px-2 py-1 bg-black text-white rounded-lg hover:bg-black/75 active:ring-1 active:ring-gray-700"
                  href={"/login"}
                >
                  Login
                </Link>

                <Link
                  className="px-2 py-1 bg-black text-white rounded-lg hover:bg-black/75 active:ring-1 active:ring-gray-700"
                  href={"/register"}
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </MaxWitdhWrapper>
    </nav>
  );
};

export default Navbar;

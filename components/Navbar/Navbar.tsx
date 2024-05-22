import Link from "next/link";
import MaxWitdhWrapper from "../Wrapper/MaxWitdhWrapper";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="h-14 w-full sticky z-[100] inset-x-0 top-0 border-b border-gray-500/40 bg-white/50 backdrop-blur-md">
      <MaxWitdhWrapper className="">
        <div className=" h-full flex justify-between items-center">
          <Link href={"/"} className="text-lg font-bold">
            Aestheticifier 🎨
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

            {isAdmin && (
              <Link
                href={"/dashboard"}
                className=" hover:border-b hover:border-black/25"
              >
                dashboard
              </Link>
            )}

            {user ? (
              <Link
                className="px-3 py-1 bg-black text-white rounded-lg hover:bg-black/75 active:ring-1 active:ring-gray-700"
                href={"/api/auth/logout"}
              >
                Logout
              </Link>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <Link
                  className="px-3 py-1 bg-black text-white rounded-lg hover:bg-black/75 active:ring-1 active:ring-gray-700"
                  href={"/api/auth/login"}
                >
                  Login
                </Link>

                <Link
                  className="px-3 py-1 bg-black text-white rounded-lg hover:bg-black/75 active:ring-1 active:ring-gray-700"
                  href={"/api/auth/register"}
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

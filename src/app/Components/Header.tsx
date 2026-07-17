import Image from "next/image"
import Link from "next/link";


export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-20">
            <div className=" px-4 md:px-6 bg-white backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto flex  items-center justify-between">
               
               <Link href="/">
                <Image
                 alt=""
                 src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1784229370/empresalucrum_2_u8mplr.png"
                 height={50}
                 width={100}
                 className=""
                />
            </Link>

                <h1>Admin</h1>

                </div>
            </div>
        </div>
    )
}
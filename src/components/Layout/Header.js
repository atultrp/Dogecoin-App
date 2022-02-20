import Image from "next/image"
import dogeLogo from "../../Assets/dogeLogo.png"

const Header = () => {
    return (
        <header className="p-5 bg-[#1f1e29] text-white ">
            <nav className="flex items-center justify-between mx-9">
                <div className="flex items-center space-x-4">
                    <Image src={dogeLogo} width={50} height={50}></Image>
                    <h1 className="text-2xl font-extrabold uppercase hover:text-[#ecbc42] cursor-pointer">
                        Dogecoin
                    </h1>
                </div>
                <ul className="flex space-x-8 font-light text-lg">
                    <li className="hover:text-[#ecbc42]">
                        <a href="/">What is Dogecoin?</a>
                    </li>
                    <li className="hover:text-[#ecbc42]">
                        <a href="/">Get Started Now</a>
                    </li>
                    <li className="hover:text-[#ecbc42]">
                        <a href="/">Wallets</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
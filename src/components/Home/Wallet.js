import Image from "next/image"
import doge300 from "../../Assets/dogecoin-300.png"
import multidoge from "../../Assets/multidoge.png"

const Wallet = () => {
    return (
        <div className='bg-[#1c1b24] p-12 mt-12 rounded-2xl shadow-black shadow-2xl flex '>
            <div className='pb-8 w-1/3 ml-12'>
                <h1 className='text-5xl font-extrabold leading-normal'>
                    Choose your Wallet
                </h1>

                <div className='text-lg text-[#bbbbbe]'>
                    You have to sync with the blockchain to use Dogecoin. MultiDoge is a "light" wallet. It syncs with the blockchain by "skimming" through the blockchain, providing fast sync times. Dogecoin Core, on the other hand, is a "full" wallet. It syncs by downloading it, providing a solid-working Dogecoin wallet.
                </div>
            </div>
            <div className="ml-4">
                <div className="flex space-x-4">
                    <div className="mx-40 text-center">
                        <Image src={multidoge} width={150} height={150}/>
                        <button className='p-3 bg-white text-[#1f1e29] font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] transition ease-in hover:-translate-y-1 hover:scale-110 duration-200'>
                            <a href="https://dogecoin.com/#start">
                                Get Started Now
                            </a>
                        </button>
                        <button className='p-3 bg-white text-[#1f1e29] font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] transition ease-in hover:-translate-y-1 hover:scale-110 duration-200'>
                            <a href="https://dogecoin.com/#start">
                                Get Started Now
                            </a>
                        </button>
                        <button className='p-3 bg-white text-[#1f1e29] font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] transition ease-in hover:-translate-y-1 hover:scale-110 duration-200'>
                            <a href="https://dogecoin.com/#start">
                                Get Started Now
                            </a>
                        </button>
                    </div>
                    <div className="mx-40 text-center">
                    <Image src={doge300} width={150} height={150}/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Wallet
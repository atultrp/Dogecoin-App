import Image from 'next/image'
import doge from "../../Assets/doge.png"
import dogeMobileWallet from "../../Assets/dogecoin_mobilewallet.png"
import GetStarted from './GetStarted'
import Wallet from './Wallet'
import WhatIsDoge from './WhatIsDoge'

const Homepage = () => {
    return (
        <div className='px-12 bg-[#1f1e29] text-white mb-10'>

            {/* UpperSection */}
            <div className='flex items-center pb-20'>
                <div className='w-2/3 pl-1'>
                    <h1 className='text-5xl font-extrabold leading-normal'>
                        Dogecoin is a peer-to-peer, open-source cryptocurrency.
                    </h1>
                    <h2 className='text-lg text-[#bbbbbe] my-3'>
                        - Created by software engineers <strong>Billy Markus</strong> and <strong>Jackson Palmer</strong>
                    </h2>
                    <div className='flex space-x-6 mt-8'>
                        <button className='p-3 bg-white text-[#1f1e29] font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] transition ease-in hover:-translate-y-1 hover:scale-110 duration-200'>
                            <a href="https://dogecoin.com/#start">
                                Get Started Now
                            </a>
                        </button>

                        <button className='bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29] transition ease-in hover:-translate-y-1 hover:scale-110 duration-200'>
                            <a href="https://github.com/dogecoin/dogecoin">
                                Source
                            </a>
                        </button>
                    </div>
                </div>
                <div>
                    <Image src={doge} />
                </div>
            </div>

            <WhatIsDoge />

            <GetStarted />

            <Wallet />

            {/*  */}
        </div>
    )
}

export default Homepage
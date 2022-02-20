import Image from 'next/image'
import dogeMobileWallet from "../../Assets/dogecoin_mobilewallet.png"

const GetStarted = () => {
    return (
        <div className='bg-[#1f1e29] p-12 mt-12 flex items-center '>
            <div>
                <Image src={dogeMobileWallet} />
            </div>
            <div className='pb-8 w-3/4 ml-12'>
                <h1 className='text-5xl font-extrabold leading-normal'>
                    How to get started with Dogecoin
                </h1>

                <div className='text-lg text-[#bbbbbe]'>
                    <div>
                        <h2 className='mt-2 text-xl font-bold'>
                            1. Choose your Wallet
                        </h2>
                        <p className='ml-5'>
                            Pick a Wallet from our <button className='bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 ml-2'>
                                <a href="#wallets">
                                    Wallet Section
                                </a>
                            </button>
                            <br />
                            A Wallet is used for holding your Dogecoins directly on your Computer/Smartphone.
                        </p>
                    </div>

                    <div>
                        <h2 className='mt-2 text-xl font-bold'>
                            2. Configure your Wallet
                        </h2>
                        <p className='ml-5'>
                            After downloading, you can configure your Wallet according to our <button className='bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 ml-2'>
                                <a href="/guide">
                                    Guide
                                </a>
                            </button>
                        </p>
                    </div>

                    <div>
                        <h2 className='mt-2 text-xl font-bold'>
                            3. Get Some Dogecoin

                        </h2>
                        <p className='ml-5'>

                            There are numerous amounts of ways to get Dogecoin. You can buy them, trade for them, get tipped, "mine" them, and more. They are surprisingly endless!
                        </p>
                    </div>


                    <p className='my-3'>
                        You can get tipped Dogecoin by participating in <button className='bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 mx-2'>
                            <a href="http://www.reddit.com/r/dogecoin">
                                Our Community
                            </a>
                        </button>  If that's not your style, another way to have your first Dogecoin is to participate at <a href="https://www.dogecoinfah.com/" className='text-[#ecbc42]' >Dogecoin Folding@Home</a>.
                        <br />
                        <p className='my-3'>

                            <button className='bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 mx-2'>
                                <a href="https://www.dogecoinfah.com/">
                                    Folding@Home (FaH)
                                </a>
                            </button> is a distributed computing project. You can join team dogefolders, bring in your computing power, help to find cures for diseases and receive some Doges for your efforts.
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
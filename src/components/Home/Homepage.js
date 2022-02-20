import Image from 'next/image'
import doge from "../../Assets/doge.png"

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

            {/* What is Dogecoin */}
            <div className='bg-[#1c1b24] p-12 pt-20 rounded-2xl shadow-black shadow-2xl'>
                <div className='flex items-center '>
                    <div className='pb-8 w-3/4 mr-8'>
                        <h1 className='text-5xl font-extrabold leading-normal'>
                            What is Dogecoin?
                        </h1>

                        <div className='text-lg text-[#bbbbbe]'>
                            Dogecoin is a community-driven cryptocurrency that was inspired by a Shiba Inu meme. The Dogecoin Core software allows anyone to operate a node in the Dogecoin blockchain networks and uses the Scrypt hashing method for Proof of Work. It is adapted from Bitcoin Core and other cryptocurrencies.
                            <p className='my-3'>
                                For information about the default fees used on the Dogecoin network, please refer to the <a href="https://github.com/dogecoin/dogecoin/blob/master/doc/fee-recommendation.md" className='text-[#ecbc42]' > fee recommendation </a>.
                            </p>
                        </div>

                    </div>

                    <div>
                        <iframe width="624" height="312" src="https://www.youtube.com/embed/_KVZmS_UO5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='flex justify-between pt-5'>
                    <div className='mr-16 w-1/2'>
                        <h2 className='text-3xl font-extrabold'>THE FUN AND FRIENDLY INTERNET CURRENCY.</h2>
                        <div className='text-lg text-[#bbbbbe] mt-3'>
                            Dogecoin sets itself apart from other digital currencies with an amazing, vibrant community made up of friendly folks just like you.
                        </div>
                        <div className='space-x-6 mt-8'>
                            <button className='p-3 bg-white text-[#1f1e29] font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 '>
                                <a href="https://discord.gg/dogecoin">
                                    Reddit Community
                                </a>
                            </button>
                            <button className='bg-transparent text-white font-semibold py-3 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 '>
                                <a href="https://discord.gg/dogecoin">
                                    Discord Community
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className='w-1/2'>
                        <h2 className='text-3xl font-extrabold'>WHAT'S WITH DOGECOIN AND THE DOG?</h2>
                        <div className='text-lg text-[#bbbbbe] mt-3'>
                            "Doge" is our fun, friendly mascot! The Shiba Inu is a Japanese breed of dog that was popularized as an online meme and represents Dogecoin.
                        </div>
                        <div className='space-x-6 mt-8'>
                            <button className='p-3 bg-white text-[#1f1e29] font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 '>
                                <a href="https://knowyourmeme.com/memes/doge">
                                    Learn more about Doge
                                </a>
                            </button>
                            <button className='bg-transparent text-white font-semibold py-3 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 '>
                                <a href="https://en.wikipedia.org/wiki/Shiba_Inu">
                                    Shiba Inu
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            {/* Get Started */}
            <div className='bg-[#1c1b24] pt-5 mt-5 rounded-2xl shadow-black shadow-2xl'>
                hey there!
        
            </div>


            {/*  */}
        </div>
    )
}

export default Homepage
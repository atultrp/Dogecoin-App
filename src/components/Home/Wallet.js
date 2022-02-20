import Image from "next/image"
import doge300 from "../../Assets/dogecoin-300.png"
import multidoge from "../../Assets/multidoge.png"
import windows from "../../Assets/svg/windows.svg"
import linux from "../../Assets/svg/linux.svg"
import macos from "../../Assets/svg/macos.svg"
import Button from "../ReusableComponents/Button"


const Wallet = () => {
    return (
        <div className='bg-[#1c1b24] p-12 mt-12 rounded-2xl shadow-black shadow-2xl  '>
            <div className='pb-8 ml-12'>
                <h1 className='text-5xl font-extrabold leading-normal text-center'>
                    Choose your Wallet
                </h1>

                <div className='text-lg text-[#bbbbbe]'>
                    You have to sync with the blockchain to use Dogecoin. MultiDoge is a "light" wallet. It syncs with the blockchain by "skimming" through the blockchain, providing fast sync times. Dogecoin Core, on the other hand, is a "full" wallet. It syncs by downloading it, providing a solid-working Dogecoin wallet.
                </div>
            </div>
            <div className="flex space-x-1">
                <div className="mx-40 text-center ">
                    <h2 className='text-2xl font-bold mb-3 uppercase'>Multidoge</h2>
                    <Image src={multidoge} width={120} height={120} />
                    <div className="space-x-4">
                        <Button imageSrc={windows} label="Windows" bgColor="bg-green-500" />
                        <Button imageSrc={linux} label="Linux" />
                        <Button imageSrc={macos} label="MacOS" />
                    </div>
                </div>

                <div className="mx-40 text-center">
                    <h2 className='text-2xl font-bold mb-3 uppercase'>Dogecoin Core</h2>
                    <Image src={doge300} width={120} height={120} />
                    <div className="space-x-4">
                        <Button imageSrc={windows} label="Windows 32-bit"/>
                        <Button imageSrc={windows} label="Windows 64-bit" />
                        <Button imageSrc={linux} label="Linux 32-bit" />
                        <Button imageSrc={linux} label="Linux 64-bit" />
                        <Button imageSrc={macos} label="MacOS" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Wallet
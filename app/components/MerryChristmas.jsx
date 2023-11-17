import Image from "next/image"
import Chair from '@/public/chair.png'

export default function MerryChristmas()
{
    return (
        <div className="flex flex-col md:flex-row">

            <div className="w-full h-[calc(100vh-300px)] md:h-screen flex justify-center items-center bg-slate-400 order-1 md:order-2">
                <Image src={Chair} alt="" width={800} height={800} />
            </div>

            <div className="w-full h-[calc(100vh-300px)] md:h-screen flex flex-col justify-center items-center order-2 md:order-1">
                <h1 className="text-3xl md:text-6xl text-red-600 text-center">Merry Christmas</h1>
                <h3 className="text-1xl my-3 line-through text-slate-300">$100, 00 </h3>
                <span className="text-3xl">$70,99</span>
                <button className="mt-10 uppercase rounded-xl bg-red-600 text-white px-10 py-3 font-bold">add to cart</button>
            </div>

        </div>
    )
}

import '../../../../src/app/globals.css'

export default function details() {
    return <div>


        <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-4 ">
            <div>
                <div>
                    <div className="flex justify-between my-2">
                        <h1 className="  text-[22px] font-semibold">Europe jewels with Versailles</h1>
                        <div className="flex items-center justify-center border rounded-full w-6 h-6">
                            <img className=" p-1 " src="https://www.svgrepo.com/show/13666/heart.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-5 ">
                            <p className="text-sm flex gap-1 items-center"> <span>
                                <img className="w-4" src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-1439790-1214120.png?f=webp&w=256" alt="" />
                            </span> 15 Days</p>
                            <p className="text-sm flex gap-1 items-center"> <span>
                                <img className="w-4" src="https://www.svgrepo.com/show/229132/internet.svg" alt="" />
                            </span> 15 Days</p>
                            <p className="text-sm flex gap-1 items-center"> <span>
                                <img className="w-4" src="https://www.svgrepo.com/show/38705/location-pin.svg" alt="" />
                            </span> 23 Cities</p>

                        </div>
                        <div className="flex justify-between mt-2">
                            <div className="flex flex-wrap gap-1 items-center">
                                <p className="text-[12px]"> <span>London</span> 15 Days ---</p>
                                <p className="text-[12px]"> <span>Paris</span> 15 Days ---</p>
                                <p className="text-[12px]"> <span>Brussels</span> 15 Days</p>
                                <p className="text-[12px] underline"> +20 more cities</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <div>
                                    <img className="w-5"
                                        src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
                                        alt="" />
                                </div>
                                <div>
                                    <img className="w-5"
                                        src="https://www.svgrepo.com/show/522439/printer.svg"
                                        alt="" />
                                </div>
                                <div>
                                    <img className="w-5"
                                        src="https://www.svgrepo.com/show/522399/envelope-closed.svg"
                                        alt="" />
                                </div>
                                <div>
                                    <img className="w-5"
                                        src="https://www.svgrepo.com/show/527876/share.svg"
                                        alt="" />
                                </div>
                                <div>
                                    <p className="text-sm underline text-blue-800 font-medium">View Iternery Page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="hidden min-[1200px]:flex gap-1">
                    <div className="text-right flex flex-col items-end justify-center ">
                        <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p>
                        <p className="text-[12px] leading-5">Starts From <span className="text-[22px] font-medium">₹ 3,50,000</span></p>
                        <p className="text-[10px] leading-5">per person on twin sharing</p>
                        <p className="text-[14px] leading-5 font-medium underline text-blue-900">from ₹ 19,423/months</p>
                    </div>
                    <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                        <p className="bg-orange-400 px-5 py-2 rounded-sm"><a>Date & Price</a></p>
                        <p className="border px-5 py-2 rounded-sm"><a>View Price</a></p>
                    </div>
                </div>
            </div>
            <div className="">
                <img className="rounded-md h-[350px] object-cover"
                    src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
            </div>
            <div className="justify-end flex md:justify-center">
                <div className="flex flex-col gap-2 ">
                    <div className="border 2xl:max-w-[350px] md:grow rounded-md p-3 bg-slate-100">
                        <div className="flex gap-3">
                            <p className="text-[13px]"><span>5</span></p>
                            <p className="text-[13px]">9,589 Guests already travelled</p>
                        </div>
                        <hr />
                        <p className="text-[14px] line-clamp-3 text-neutral-500  py-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quod, deleniti optio obcaecati saepe facilis est facere aut dolorum ea dolor vel aspernatur,
                            reiciendis vero!</p>
                        <div>
                            <div>
                                <p className="text-[13px] font-semibold text-neutral-700">Aman Kharwar</p>
                                <p className="text-[12px] text-neutral-500">Travelled Aug 17,2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:block sm:flex justify-between">
                        <div className="">
                            <p className="my-3 text-[16px] font-semibold">Tour Includes</p>
                            <div className="flex gap-4 max-w-[350px]">
                                <div className="flex flex-col items-center ">
                                    <img className="w-5" src="https://www.svgrepo.com/show/13776/building.svg" alt="" />
                                    <p className="text-[10px] text-neutral-600">Hotel</p>
                                </div>

                                <div className="flex flex-col items-center ">
                                    <img className="w-5" src="https://www.svgrepo.com/show/6379/french-fries-on-container.svg" alt="" />
                                    <p className="text-[10px] text-neutral-600">Meals</p>
                                </div>

                                <div className="flex flex-col items-center ">
                                    <img className="w-5" src="https://www.svgrepo.com/show/447874/transport.svg" alt="" />
                                    <p className="text-[10px] text-neutral-600">Transport</p>
                                </div>

                                <div className="flex flex-col items-center ">
                                    <img className="w-5" src="https://www.svgrepo.com/show/438545/flight.svg" alt="" />
                                    <p className="text-[10px] text-neutral-600">Flight</p>
                                </div>

                                <div className="flex flex-col items-center ">
                                    <img className="w-5" src="https://www.svgrepo.com/show/533057/camera-alt-1.svg" alt="" />
                                    <p className="text-[10px] text-neutral-600">Sightseeing</p>
                                </div>

                                <div className="flex flex-col items-center ">
                                    <img className="w-5" src="https://www.svgrepo.com/show/394547/visa.svg" alt="" />
                                    <p className="text-[10px] text-neutral-600">Visa</p>
                                </div>

                            </div>
                        </div>

                        <div className=" max-w-[350px]">
                            <div className="">
                                <div className="flex justify-between my-1">
                                    <p className="text-[16px] font-semibold">Key Highlights</p>
                                    <p className=" text-[14px] underline text-blue-800 font-medium">View all</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[14px] leading-6 text-neutral-700">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[14px] leading-6 text-neutral-700">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-[10px] h-[10px] bg-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-[8px] h-[8px] bg-white rounded-full flex items-center justify-center">
                                                <div className="w-[4px] h-[4px] bg-cyan-500 rounded-full ">
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[14px] leading-6 text-neutral-700">Lorem ipsum dolor sit amet.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}
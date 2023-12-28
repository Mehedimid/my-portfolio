import { FaAddressBook, FaAddressCard } from "react-icons/fa";
import { TbHomeSearch, TbMail, TbPhoneCall } from "react-icons/tb";

function HomeContact(props) {
    return (
        <div  className="py-16  common-bg2 border-b-2 border-slate-500  p-5 shadow shadow-[#52D3D8]">
          <div className="size md:flex gap-5 justify-between flex-wrap">

            {/* address div  */}
          <div className="text-[#52D3D8] flex gap-4  ">
           <div className='p-2 md:p-5 rounded-full mb-9 bg-[#52D3D8]'>
           <TbHomeSearch className="text-4xl  rounded-full text-black "  />
           </div>
            <div>
                <h1 className="text-xl font-bold mb-2">Address</h1>
                <p className="text-slate-300 text-sm mb-1">Brahmanbaria, Chattogaram</p>
                <p className="text-slate-300 text-sm">Bangladesh</p>
            </div>
          </div>

        {/* phone div  */}
          <div className="text-[#52D3D8] flex gap-4  ">
           <div className='p-2 md:p-5 rounded-full mb-9 bg-[#52D3D8]'>
           <TbPhoneCall className="text-4xl  rounded-full text-black "  />
           </div>
            <div>
                <h1 className="text-xl font-bold mb-2">Let's Talk Us</h1>
                <p className="text-slate-300 text-sm mb-1">01857683573</p>
                <p className="text-slate-300 text-sm">01303871541</p>
            </div>
          </div>
       
        {/* email div  */}
          <div className="text-[#52D3D8] flex gap-4  ">
           <div className='p-2 md:p-5 rounded-full mb-9 bg-[#52D3D8]'>
           <TbMail className="text-4xl  rounded-full text-black "  />
           </div>
            <div>
                <h1 className="text-xl font-bold mb-2">Send Me Email</h1>
                <p className="text-slate-300 text-xs md:text-sm mb-1">mehedihasan25276@gmail.com</p>
                <p className="text-slate-300 text-sm">mhasana2022@gmail.com</p>
            </div>
          </div>

          </div>
        </div>
    );
}

export default HomeContact;
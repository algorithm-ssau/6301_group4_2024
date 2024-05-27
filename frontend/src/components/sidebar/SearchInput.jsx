import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

    const handleSubmit = (e) => {}
    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder='Поиск...' className='input input-bordered rounded-full'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>

        </form>
    );
};
export default SearchInput;


// STARTER CODE SNIPPET
/*const LogoutButton =() =>{
    return <div className='mt-auto'>Icon</div>;
};*/

//import { IoSearchSharp } from "react-icons/io5";
//
//const SearchInput = () =>{
//   return(
//       <form className='flex items-center gap-2'>
//           <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
//           <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//               <IoSearchSharp className='w-6 h-6 outline-none'/>
//          </button>
//
//       </form>
//    );
//};
//export default SearchInput;
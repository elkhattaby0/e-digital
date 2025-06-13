import { CheckIcon } from 'lucide-react';

const ListCheck = ({ children}) => {
    return (
        <li
            className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-normal leading-relaxed flex items-center my-2 text-[#14213D] dark:text-[#E5E5E5]"
        >
             <CheckIcon size="1em" className="mr-3 h-full" />
            <p className="w-[95%]">{ children }.</p>
        </li>
    )
}

export default ListCheck;
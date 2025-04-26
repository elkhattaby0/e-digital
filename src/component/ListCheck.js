import { CheckIcon } from 'lucide-react';
import React from 'react';

const ListCheck = ({ children}) => {
    return (
        <li
            className="flex items-center  text-[#14213D] text-xl my-2 dark:text-[#E5E5E5]"
        >
             <CheckIcon size="1em" className="mr-3 h-full" />
            <p className="w-[95%]">{ children }.</p>
        </li>
    )
}

export default ListCheck;
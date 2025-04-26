import React from 'react';
import HeaderTwo from '../../component/HeaderTwo';
import { CheckIcon } from 'lucide-react';

const info = [
    { 
        "title": "Who We Are ?",
        "data": [
            "We are a digital agency that builds websites, mobile apps, and designs",
            "Our team is small but full of talent",
            "We love helping businesses grow online"
        ]
    },
    { 
        "title": "Our Mission",
        "data": [
            "Our mission is to make the web better",
            "We create digital solutions that are easy to use, fast, and beautiful"
        ]
    },
    { 
        "title": "What Makes Us Different",
        "data": [
            "We listen to our clients",
            "We work with care and passion",
            "We always deliver on time",
            "We support you even after the project is done"
        ]
    }
]

const Whoweare = () => {
    return (
        <section className={Style.containre}>
            {
                info.map(n=> (
                    <div className={Style.section} key={n.title}> 
                        <HeaderTwo>{n.title}</HeaderTwo>
                        {
                            n.data.map(n=> (
                                <div key={n} className="flex items-center text-[#14213D] text-xl my-2 dark:text-[#E5E5E5]">
                                    <CheckIcon size="1em" className="mr-3" />
                                    <p>{n}.</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </section>
    )
}

const Style = {
    "containre": "w-full flex flex-col items-center justify-center ",
    "section": "w-10/12 max-md:w-11/12 py-10",
}

export default Whoweare;
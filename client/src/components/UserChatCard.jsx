import React, { useState, useEffect } from 'react';
import { UserIcon1 } from '../assets';

const borderColorList = ["border-pink-600", "border-fuchsia-500", "border-blue-400", "border-sky-400", "border-teal-500", "border-lime-300", "border-yellow-700", "border-orange-600", "border-rose-700"];

const UserChatCard = ({ placeholder, value, handleChange, handleSubmit }) => {
    const [borderColorValue, setBorderColorValue] = useState("");

    useEffect(() => {
        const len = borderColorList.length;
        const id = Math.floor(Math.random() * len);

        setBorderColorValue(borderColorList[id]);
    });

    return (
        <>
            <div className='w-full py-1 rounded-full  sticky bottom-0'>
                <form className='flex my-2'>
                    <div
                        className={`rounded-full bg-slate-50 border ${borderColorValue} w-12 h-10 pb-0.5 px-0.5 mx-2`}
                    >
                        <img src={UserIcon1} alt="" />
                    </div>

                    <input
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        required

                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block mx-2 px-6 py-1 w-full'
                    />

                    <div
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full hover:border-[#6469ff] outline-none block w-auto px-2 py-2 mx-1`}
                    >
                        <button
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default UserChatCard
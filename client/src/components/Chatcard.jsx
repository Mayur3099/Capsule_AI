import React, { useState, useEffect } from 'react';
import { chatIcon, UserIcon1 } from '../assets';

const limit = 30;
const ColorList = ["bg-fuchsia-500", "bg-red-400", "bg-pink-500", "bg-purple-600", , "bg-blue-600", "bg-sky-400", "bg-amber-400", "bg-slate-50"];

const Chatcard = ({ role, message }) => {
	const [currentColor, setCurrentColor] = useState("bg-slate-50");

	// useEffect(() => {
	// 	// const len = ColorList.length;
	// 	// const id = Math.floor(Math.random() * len);

	// 	// setCurrentColor(ColorList[id]);
	// }, []);

	return (
		<>
			<div className='flex my-3'>

				{
					role === "assistant" ?
						<>
							<div
								className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm ${message.length <= 30 ? "rounded-full" : "rounded-xl"} focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block mx-2 px-6 py-1 w-full`}
							>
								{message}
							</div>

							{/* border-neutral-100 */}

							<div className={`rounded-full bg-slate-50 border border-neutral-100 w-8 h-8 py-1 px-1 mx-2`}>
								<img src={chatIcon} alt="" />
							</div>
						</>
						:
						<>
							<div className={`rounded-full ${currentColor} border border-orange-400 w-9 h-8 pb-1 px-0.5 mx-2`}>
								<img src={UserIcon1} alt="" />
							</div>

							<div
								className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm ${message.length <= 30 ? "rounded-full" : "rounded-xl"} focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block mx-2 px-6 py-1 w-full`}
							>
								{message}
							</div>
						</>
				}
			</div>
		</>
	)
}

export default Chatcard


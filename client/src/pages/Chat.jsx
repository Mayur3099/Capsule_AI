import React, { useState, useEffect, useRef } from 'react'

import { coolCat } from "../assets";
import { Chatcard, UserChatCard } from '../components';

const Chat = () => {
    const [chatLog, setChatLog] = useState([
        {
            role: "assistant",
            content: "Hi, How may I assist you!",
        },
    ]);

    const [userText, setUserText] = useState("");

    const scrollableRef = useRef(null);

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
        }
    }, [chatLog]);

    const handleChange = (e) => {
        setUserText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newChatLog = [...chatLog, { role: "user", content: `${userText}` }];
        setUserText("");

        setChatLog(newChatLog);

        const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: newChatLog
            }),
        });

        const data = await response.json();

        setChatLog([...newChatLog, {
            role: "assistant",
            content: `${data.message}`,
        }]);
    };

    return (
        <>
            <div className='max-w-7xl mx-auto flex-col justify-center p-5'>

                <div className='mb-10'>
                    <h1 className="font-extrabold text-[#222328] text-[32px]">Explore Infinite Conversations with AI-Powered Chat</h1>
                    <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Welcome to our innovative AI-powered chat platform! Engage in conversations like never before as you interact with our cutting-edge AI chat model.</p>
                </div>

                {/* <div className='flex justify-center m-4'>
                    <img src={coolCat} alt="Cat Image" className='rounded-full w-28 bg-white' />
                </div> */}

                <div className='overflow-auto flex-col justify-center bg-slate-200 rounded-lg w-3/4 h-screen/55 m-auto px-6 py-5'
                    ref={scrollableRef}
                    id='chat-main-body'
                >

                    {chatLog.map(({ role, content }, index) =>
                        <Chatcard
                            key={index}
                            role={role}
                            message={content}
                        />
                    )}

                    <UserChatCard
                        value={userText}
                        placeholder="Chat Here"
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />

                </div>
            </div>
        </>
    )
}

export default Chat
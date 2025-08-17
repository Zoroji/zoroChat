import React, { useEffect, useRef } from 'react';
import assets, { messagesDummyData } from '../assets/assets';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef(null);

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesDummyData]); // scroll every time messages change

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* HEADER */}
      <div className="flex items-center gap-3 py-4 mx-4 border-b border-stone-500">
        <img
          src={assets.profile_martin}
          className="w-8 rounded-full"
          alt="Profile"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Martin Johnson
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          className="md:hidden max-w-7 cursor-pointer"
          alt="Back"
        />
        <img
          src={assets.help_icon}
          className="max-md:hidden max-w-5 cursor-pointer"
          alt="Help"
        />
      </div>

      {/* CHAT */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((msg, index) => {
          const isSender = msg.senderId === '680f50aaf10f3cd28382ecf2';
          return (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                isSender ? 'justify-end' : 'flex-row-reverse'
              }`}
            >
              {/* MESSAGE CONTENT */}
              {msg.image ? (
                <img
                  src={msg.image}
                  alt=""
                  className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
                />
              ) : (
                <p
                  className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg break-all bg-violet-500/30 text-white mb-8 ${
                    isSender ? 'rounded-br-none' : 'rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </p>
              )}

              {/* AVATAR + TIME */}
              <div className="flex flex-col items-center text-xs">
                <img
                  className="w-7 rounded-full"
                  src={isSender ? assets.avatar_icon : assets.profile_martin}
                  alt=""
                />
                <p className="text-gray-500">{formatMessageTime(msg.createdAt)}</p>
              </div>
            </div>
          );
        })}
        <div ref={scrollEnd}></div>
      </div>

          {/* BOTTOM AREA */}
        <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3 '>
          <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
            <input className='flex-1 p-3 border-none rounded-lg outline-none text-white placeholder:gray-400'
             type="text" placeholder='Send a Message'/>
            <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
            <label htmlFor="image">
              <img className='w-5 mr-2 cursor-pointer' src={assets.gallery_icon} alt="" />
            </label>
          </div>
          <img className='w-7 cursor-pointer' src={assets.send_button} alt="" />
        </div>

    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} className="max-w-16" alt="Logo" />
      <p className="text-lg font-medium text-white">Chat With Friends !!</p>
    </div>
  );
};

export default ChatContainer;

import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import {TiMessages} from "react-icons/ti";

function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className='md:min-w-[450 px] flex flex-col'>
      {noChatSelected? (<NoChatSelected/>) :(
        <>
        {/*Header*/}
        <div className='bg-stale-500 px-4 py-2 mb-2'>
            {/* <span className='label-text'>Кому:</span>{" "} */}
            <span className='text-gray-900 font-bold'> Имя Фамилия</span>
        </div>

        <Messages />
        <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;


const NoChatSelected =() =>{
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-long md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p>Добро пожаловать, Имя Фамилия</p>
          <p>Выберите чат, чтобы начать общение</p>
          <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
};
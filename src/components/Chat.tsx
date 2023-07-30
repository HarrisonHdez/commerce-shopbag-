import Image from 'next/image'
import React from 'react'

const Chat = () => {
    return (
        <div>
            <Image
                className='header__chat header__float '
                width={80}
                height={80}
                src="/svg/chat.svg"
                alt="icono del chat" />
        </div>
    )
}

export default Chat
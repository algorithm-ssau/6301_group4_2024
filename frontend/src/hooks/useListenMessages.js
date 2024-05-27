import React from 'react';
import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

}

export default useListenMessages
import React, { createContext, useState } from 'react';

export const FriendContext=createContext();

const Context = ({children}) => {

let [call, setCall]=useState([]);
let [text, setText]=useState([]);
let [video, setVideo]=useState([]);

    return (
        <FriendContext.Provider  value={{call, setCall, text, setText, video, setVideo}}>
            {children}
        </FriendContext.Provider>
    );
};

export default Context;
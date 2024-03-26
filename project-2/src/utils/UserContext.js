

import React,{createContext} from 'react';



const UserContext = createContext({
    currUser:"default user",
});


export default UserContext;
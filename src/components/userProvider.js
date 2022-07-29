import React, {useState, useContext} from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggleContext(){
    return useContext(userToggleContext);
}



export function UserProvider(props){
    const [save, setSave] = useState("");
    
    const handleSubmit = (ev) => {ev.preventDefault();
        setSave(ev.target.save.value);
        }


    return(
        <userContext.Provider value={save}>
            <userToggleContext.Provider value={handleSubmit}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>

    );
}
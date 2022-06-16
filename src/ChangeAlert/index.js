import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
    if(show){
        return(
            <div>
                <p>Changes detected</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                Reload info
                </button>
            </div>
        );
    } else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }
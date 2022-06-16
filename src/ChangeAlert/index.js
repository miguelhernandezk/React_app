import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({show, toggleShow}){
    if(show){
        return(
            <div class="ChangeAlert-container">
                <div className="ChangeAlert">
                    <p>Changes detected</p>
                    <button
                        onClick={() => toggleShow(false)}
                    >
                    Reload info
                    </button>
                </div>
            </div>
        );
    } else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }
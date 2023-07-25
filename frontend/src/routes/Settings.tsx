import {useState, useContext, ChangeEvent, MouseEvent} from 'react'

export default function Settings() {
    return(
        <section>
            <p className="text-center font-medium text-md">settings menu going here
            <div>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
            </div></p>
        </section>
    )

}
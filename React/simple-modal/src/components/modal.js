import React from 'react';
import './modal.css';

const Modal = (props) => {
    let showClass = "hidden";
    if (props.showmodal) {
        showClass = "";
    }
    const onClose = e => {
        props.onClose();
      };
    return (
         <div> 
            <div className={`modal ${showClass}`}>
                <button className="close-modal" onClick={onClose}>&times;</button>
                <h1>I'm a modal window 😍</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
            </div>
            <div className={`overlay ${showClass}`} onClick={onClose}></div>
        </div>
    );
};

export default Modal;
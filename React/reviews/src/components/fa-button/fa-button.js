import './fa-button.css';

const Fabutton = ({buttonClass, iClass, onClick}) => {            
    const handleClick = (e) => {
        e.preventDefault();        
        onClick();
    };
    return(
        <button className={`${buttonClass}-btn`} onClick={handleClick}>
            <i className={`fas fa-chevron-${iClass}`}></i>
        </button>             
    )
};

export default Fabutton;
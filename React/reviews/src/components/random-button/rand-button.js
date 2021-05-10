import './rand-button.css';

const Randbutton = ({onClick}) => {
    const handleClick = () => {
        onClick();
    };
    return(
        <button className="random-btn" onClick={handleClick}>surprise me</button>
    );
};

export default Randbutton;
import { useState } from 'react';
import './main.css';

const Main = ({flipper}) => {
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const [color, setColor] = useState('#f1f5f8');   

    const btnClick = (e) => {
        const randomColor = flipper ==='simple' ? colors[getRandomNumber(colors.length)] : getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
        setColor(randomColor);
    };

    const getRandomNumber = (len) => {
        return Math.floor(Math.random() * len);
    };

    const getRandomHexColor = () => {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {   
            hexColor += hex[getRandomNumber(hex.length)];
        }
        return hexColor;
    };

    return (
        <main>
            <div className="container">
                <h2>
                    background color : <span className="color">{color}</span>
                </h2>
                <button onClick={btnClick} className="btn btn-hero" id="btn">click me</button>
            </div>
        </main>
    )
}

export default Main;
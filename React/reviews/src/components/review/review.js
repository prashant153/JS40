import { useState } from 'react';
import Fabutton from '../fa-button/fa-button';
import Randbutton from '../random-button/rand-button';
import './review.css';

const Review = ({reviews}) => {

    const [currentItem, setCurrentItem] = useState(0);    
    const [review, setReview] = useState(reviews[currentItem]);

    let selectedValue = currentItem;

    const onPrevClick =() =>{
        selectedValue--;
        if(selectedValue < 0)
        {
            selectedValue = (reviews.length -1);
        }
        setCurrentItem(selectedValue);
        setReview(reviews[selectedValue]);
    };

    const onNextClick =() =>{
        selectedValue++;
        if(selectedValue >= reviews.length){
            selectedValue =0;
        }
        setCurrentItem(selectedValue);
        setReview(reviews[selectedValue]);
    };

    const onRandomClick = () => {
        selectedValue = Math.floor(Math.random() * reviews.length);
        setCurrentItem(selectedValue);
        setReview(reviews[selectedValue]);
    };

    return(
        <div>
            <main>
                <section className="container">
                    <div className="title">
                        <h2>our reviews</h2>
                        <div className="underline"></div>
                    </div>
                    {/* Review  */}
                    <article className="review">
                        <div className="img-container">
                            <img src={review.img} id="person-img" alt=""/>
                        </div>
                        <h4 id="author">{review.name}</h4>
                        <p id="job">{review.job}</p>
                        <p id="info">
                        {review.text}
                        </p>
                        {/* prev and next buttons */}
                        <div className="btn-container">
                            <Fabutton buttonClass="prev" iClass="left" onClick={onPrevClick}/>
                            <Fabutton buttonClass="next" iClass="right" onClick={onNextClick}/>
                        </div>
                        {/* random button */}
                        <Randbutton onClick={onRandomClick}/>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default Review;
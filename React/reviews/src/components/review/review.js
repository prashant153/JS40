import Fabutton from '../fa-button/fa-button';
import Randbutton from '../random-button/rand-button';
import './review.css';

const Review = () => {
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
                            <img src="person-1.jpeg" id="person-img" alt=""/>
                        </div>
                        <h4 id="author">sara jones</h4>
                        <p id="job">ux designer</p>
                        <p id="info">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ea omnis unde harum labore velit delectus dicta vel quis optio enim voluptatibus in consequatur perferendis animi, cupiditate quidem obcaecati deleniti?
                        </p>
                        {/* prev and next buttons */}
                        <Fabutton/>
                        {/* random button */}
                        <Randbutton/>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default Review;
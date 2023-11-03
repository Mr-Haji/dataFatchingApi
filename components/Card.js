import "./Card.css"
import reviewPic from ".././pic/reviewPic.png";

const Card = ({ image, title, category, description, price, rating, lastButton, id }) => {
    return (
        <div className="card" key={id}>
            <div className="cardImage">
                <img width="200px" src={image}>
                </img>

            </div>
            <div className="cardTitle">
                {title}
            </div>
            <div className="cardCategory">
                {category}
            </div>
            <div className="cardDescription">
                {description}.....<span>See more</span>
            </div>
            <div className="cardPrice">
                {price} $
            </div>
            <div className="cardRatingStar">
                <img src={reviewPic} width={100} alt="Pic" />
            </div>
            <div className="cardRatingCount">
                {rating}
            </div>
            <div className="cardAddToCart">
                <span>
                    {lastButton}
                </span>
            </div>
        </div>
    )
}

export default Card;
import { Link } from 'react-router-dom';

let TopArticle = ({
    title,
    image,
    id,
    category
}) => {

    return (
        <div className="top-article">
            <div className="top-article-photo">
                <Link to={`/${category}/${id}`}><img src={image}/></Link>
                <h2 className="top-article-title">
                    <Link to={`/${category}/${id}`}>{title}</Link>
                </h2>
            </div>
            {/* <div className="top-article-info">
                <span className="top-article-date">Date info</span>
            </div> */}
        </div>
    );
}

export default TopArticle;
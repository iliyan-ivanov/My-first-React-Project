import { Link } from 'react-router-dom';

const TopArticle = ({
    title,
    image,
    id,
    category
}) => {
    return (
        <div className="sub-article">
            <div className="sub-article-photo">
                <Link to={`/${category}/${id}`}><img src={image}/></Link>
                <h2 className="sub-article-title">
                    <Link to={`/${category}/${id}`}>{title}</Link>
                </h2>
            </div>
        </div>
    );
}

export default TopArticle;
import { Link } from 'react-router-dom';

const TopArticle = ({
    title,
    image,
    id
}) => {
    return (
        <div className="sub-article">
            <div className="sub-article-photo">
                <Link to={`/${id}`}><img src={image}/></Link>
                <h2 className="sub-article-title">
                    <Link to={`/${id}`}>{title}</Link>
                </h2>
            </div>
        </div>
    );
}

export default TopArticle;
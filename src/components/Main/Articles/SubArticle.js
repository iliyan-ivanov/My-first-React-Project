import { Link } from 'react-router-dom';

const TopArticle = ({
    title,
    image
}) => {
    return (
        <div className="sub-article">
            <div className="sub-article-photo">
                <Link to="/articleinfo"><img src={image}/></Link>
                <h2 className="sub-article-title">
                    <Link to="/articleinfo">{title}</Link>
                </h2>
            </div>
        </div>
    );
}

export default TopArticle;
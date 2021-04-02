import { Link } from 'react-router-dom';

let LongArticle = ({
    title,
    image
}) => {
    return (
        <ul className="long-articles">
            <li className="li-article">
                <div className="article-img">
                    <Link to="/articleinfo"><img src={image} /></Link>
                </div>
                <div>
                    <h2>
                        <Link className="long-article-title" to="/articleinfo">{title}</Link>
                    </h2>
                </div>
            </li>
        </ul>
    );
}

export default LongArticle;
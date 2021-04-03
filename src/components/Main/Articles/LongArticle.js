import { Link } from 'react-router-dom';

let LongArticle = ({
    title,
    image,
    id
}) => {
    return (
        <ul className="long-articles">
            <li className="li-article">
                <div className="article-img">
                    <Link to={`/${id}`}><img src={image} /></Link>
                </div>
                <div>
                    <h2>
                        <Link className="long-article-title" to={`/${id}`}>{title}</Link>
                    </h2>
                </div>
            </li>
        </ul>
    );
}

export default LongArticle;
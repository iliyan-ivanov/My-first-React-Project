import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlePage = ({
    match
}) => {
    let url = 'https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles';

    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch(`${url}/${match.params.articleId}.json`)
            .then(res => res.json())
            .then(res => setArticle(res))
            .catch(err => console.log(err))
    }, []);

    return (
      
            <section className="info-part">
                <div className="details-title">
                    <h1>{article.title}</h1>
                </div>
                <div className="details-img">
                    <img src={article.imageURL} />
                </div>
                <div className="details-description">
                    <p>{article.description}</p>
                </div>
            </section>
            
    );
}

export default ArticlePage;
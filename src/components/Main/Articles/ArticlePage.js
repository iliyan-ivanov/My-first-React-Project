import { useEffect, useState } from 'react';

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
        
        console.log(`${url}/${match.params.articleId}.json`);
    }, [])
    
    
    console.log(article);

    
    return (
        <div className="article-page">
            <div>
                <h1>{article.title}</h1>
            </div>
            <div>
            <img src={article.imageURL}/>
            </div>
            <div>
                <p>{article.description}</p>
            </div>

        </div>
    );
}

export default ArticlePage;
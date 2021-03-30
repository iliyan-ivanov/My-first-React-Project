import TopArticle from './Articles/TopArticle';
import LongArticle from './Articles/LongArticle';

let EuFootballPage = () => {
    return (
        <div>
            <h1 className="h1-heading">Europian Football</h1>
            <TopArticle />
            <TopArticle />
            <TopArticle />
            <LongArticle />
            <LongArticle />
            <LongArticle />
            <LongArticle />
        </div>
    );
}

export default EuFootballPage;
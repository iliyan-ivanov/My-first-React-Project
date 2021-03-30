import TopArticle from './Articles/TopArticle';
import LongArticle from './Articles/LongArticle';

let BGFootballPage = () => {
    return (
        <div>
            <h1 className="h1-heading">Bulgarian Football</h1>
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

export default BGFootballPage;
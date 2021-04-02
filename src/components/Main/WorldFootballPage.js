import TopArticles from './Articles/TopArticles';
import LongArticles from './Articles/LongArticles';

let WorldFootballPage = () => {
    return (
        <div>
            <h1 className="h1-heading">World Football</h1>

            <TopArticles />
            
            <LongArticles />
            
        </div>
    );
}

export default WorldFootballPage;
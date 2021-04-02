import TopArticles from './Articles/TopArticles';
import LongArticles from './Articles/LongArticles';

let BGFootballPage = () => {
    return (
        <div>
            <h1 className="h1-heading">Bulgarian Football</h1>

            <TopArticles />
           
            <LongArticles />
            
        </div>
    );
}

export default BGFootballPage;
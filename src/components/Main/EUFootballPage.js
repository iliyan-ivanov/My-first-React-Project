import TopArticles from './Articles/TopArticles';
import LongArticles from './Articles/LongArticles';

let EuFootballPage = () => {
    return (
        <div>
            <h1 className="h1-heading">Europian Football</h1>

            <TopArticles />
            
            <LongArticles />
            
        </div>
    );
}

export default EuFootballPage;
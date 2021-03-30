import { Link } from 'react-router-dom';

let TopArticle = () => {
    return (
        <div className="top-article">
            <div className="top-article-photo">
                <Link to="/articleinfo"><img src="https://news.cgtn.com/news/2020-09-25/Milan-striker-Zlatan-Ibrahimovic-tests-positive-for-COVID-19-U46xoRZWb6/img/accba50a7ddf4045a66a8a3f9c4fc57d/accba50a7ddf4045a66a8a3f9c4fc57d.jpeg"/></Link>
                <h2 className="top-article-title">
                    <Link to="/articleinfo">Ibrahimovic leads Milan to Scudeto with a hat trick</Link>
                </h2>
            </div>
            {/* <div className="top-article-info">
                <span className="top-article-date">Date info</span>
            </div> */}
        </div>
    );
}

export default TopArticle;
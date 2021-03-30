import { Link } from 'react-router-dom';

let TopArticle = () => {
    return (
        <div className="sub-article">
            <div className="sub-article-photo">
                <Link to="/articleinfo"><img src="https://news.cgtn.com/news/2020-09-25/Milan-striker-Zlatan-Ibrahimovic-tests-positive-for-COVID-19-U46xoRZWb6/img/accba50a7ddf4045a66a8a3f9c4fc57d/accba50a7ddf4045a66a8a3f9c4fc57d.jpeg"/></Link>
                <h2 className="sub-article-title">
                    <Link to="/articleinfo">Ibrahimovic leads Milan to Scudeto with a hat trick</Link>
                </h2>
            </div>
        </div>
    );
}

export default TopArticle;
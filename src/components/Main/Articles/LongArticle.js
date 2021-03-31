import { Link } from 'react-router-dom';

let LongArticle = () => {
    return (
        <ul className="long-articles">
            <li className="li-article">
                <div className="article-img">
                    <Link to="/articleinfo"><img src="https://news.cgtn.com/news/2020-09-25/Milan-striker-Zlatan-Ibrahimovic-tests-positive-for-COVID-19-U46xoRZWb6/img/accba50a7ddf4045a66a8a3f9c4fc57d/accba50a7ddf4045a66a8a3f9c4fc57d.jpeg" /></Link>
                </div>
                <div>
                    <h2>
                        <Link className="long-article-title" to="/articleinfo">Ibrahimovic leads Milan to Scudeto</Link>
                    </h2>
                </div>
            </li>
        </ul>
    );
}

export default LongArticle;
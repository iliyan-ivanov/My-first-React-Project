import { Component } from 'react';
import TopArticle from './TopArticle';

class TopArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles.json')
            .then(res => res.json())
            .then(res => {

                let data = [];

                Object.keys(res).reverse().map(x => {
                    res[x]['id'] = x;
                    data.push(res[x])
                })

                this.setState({ articles: data })
            })
            .catch(error => console.log(error))
    };


    render() {
        return (
            <div>
                {this.state.articles.slice(0, 3).map(x => <TopArticle
                    key={x.id}
                    title={x.title}
                    description={x.description}
                    image={x.imageURL}
                    id={x.id}
                    category={x.category}
                />)}
            </div>
        );
    }
}

export default TopArticles;
import { Component } from 'react';
import LongArticle from './LongArticle';

class LongArticles extends Component {
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
                let data = Object.values(res);

                this.setState({ articles: data })
            })
            .catch(error => console.log(error))
    };

    render() {

        return (
            <div>
                {this.state.articles.map(x => <LongArticle
                    key={x.id}
                    title={x.title}
                    description={x.description}
                    image={x.imageURL}
                />)}
            </div>
        );
    }
}

export default LongArticles;
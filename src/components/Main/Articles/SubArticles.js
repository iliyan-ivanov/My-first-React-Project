import { Component } from 'react';
import SubArticle from './SubArticle';

class SubArticles extends Component {
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
                {this.state.articles.slice(3,11).map(x => <SubArticle
                    key={x.id}
                    title={x.title}
                    description={x.description}
                    image={x.imageURL}
                />)}
            </div>
        );
    }
}

export default SubArticles;
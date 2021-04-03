import { Component } from 'react';
import TopArticle from '../Main/Articles/TopArticle';
import LongArticle from '../Main/Articles/LongArticle';

class BGFootballPage extends Component {
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
                <h1 className="h1-heading">Bulgarian Football</h1>

                {this.state.articles.filter(x => x.category == "Bulgarian Football").slice(0, 3).map(x => <TopArticle
                    key={x.id}
                    title={x.title}
                    description={x.description}
                    image={x.imageURL}
                    id={x.id}
                />)}

                {this.state.articles.filter(x => x.category == "Bulgarian Football").slice(3).map(x => <LongArticle
                    key={x.id}
                    title={x.title}
                    description={x.description}
                    image={x.imageURL}
                    id={x.id}
                />)}

            </div>
        );
    }
}

export default BGFootballPage;
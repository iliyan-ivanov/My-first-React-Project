
let Create = () => {
    let url = "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles.json";

    let createArticle = (category, title, description, imageURL) => {
        let article = {
            category,
            title,
            description,
            imageURL,
            date: new Date().toJSON().slice(0,10)
        }

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
    }


    let onCreateHandler = (e) => {
        e.preventDefault();

        const { category, title, description, imageURL } = e.target;

        createArticle(category.value, title.value, description.value, imageURL.value);

        title.value = '';
        description.value = '';
        imageURL.value = '';
           }

    return (
        <form className="create-form" onSubmit={onCreateHandler}>
            <h1>Create Article</h1>
            <div className="create-div">
                <div>
                    <label htmlFor="category">Choose Category</label>
                    <select className="category-select" type="text" name="category">
                        <option value="Europian Football">Europian Football</option>
                        <option value="Bulgarian Football">Bulgarian Football</option>
                        <option value="National Teams">National Teams</option>
                    </select>
                </div>

                <label htmlFor="title">Article Title</label>
                <input type="text" className="create-title" id="title" placeholder="Article Title" name="title" />

                <label htmlFor="description">Article Description</label>
                <textarea className="create-description" id="description" placeholder="Article Description..." name="description"></textarea>

                <label htmlFor="imageURL">Image url</label>
                <input type="text" className="create-img" id="imageURL" placeholder="Image Url" name="imageURL" />
            </div>
            <button type="submit" className="create-btn">Submit</button>
        </form>
    );
}

export default Create;
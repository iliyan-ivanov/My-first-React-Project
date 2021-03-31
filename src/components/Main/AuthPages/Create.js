let Create = () => {
    return (
        <form className="create-form">
            <h1>Create Article</h1>
            <div className="create-div">
                <div>
                    <label for="category">Choose Category</label>
                    <select className="category-select" type="text" name="category">
                        <option value="Europian Football">Europian Football</option>
                        <option value="Bulgarian Football">Bulgarian Football</option>
                        <option value="World Football">World Football</option>
                    </select>
                </div>

                <label for="title">Article Title</label>
                <input type="text" className="create-title" placeholder="Article Title" name="title" />

                <label for="description">Article Description</label>
                <textarea className="create-description" placeholder="Article Description..." name="description"></textarea>

                <label for="imageUrl">Image url</label>
                <input type="text" className="create-img" placeholder="Image Url" name="imageUrl" />
            </div>
            <button type="submit" className="create-btn">Submit</button>
        </form>
    );
}

export default Create;
import { useState } from 'react';
import ErrorDiv from '../ErrorDiv/ErrorDiv';
import './Create.css';

const Create = () => {
    const url = "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles.json";

    const [titleErrorMessage, setTitleErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [imgErrorMessage, setImgErrorMessage] = useState('');

    const createArticle = (category, title, description, imageURL) => {
        let article = {
            category,
            title,
            description,
            imageURL,
            date: new Date().toJSON().slice(0, 10)
        }

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })

    }


    const onCreateHandler = (e) => {
        e.preventDefault();

        const { category, title, description, imageURL } = e.target;

        let isPassed = true;

        setTitleErrorMessage('');
        setDescriptionErrorMessage('');
        setImgErrorMessage('');

        if (title.value.length < 6) {
            isPassed = false;
            setTitleErrorMessage('Title must be at least 6 characters!')
        }

        if (title.value.length < 1) {
            isPassed = false;
            setTitleErrorMessage('Please insert title!')
        }

        if (title.value.length > 70) {
            isPassed = false;
            setTitleErrorMessage('Title too long!')
        }

        if (description.value.length < 6) {
            isPassed = false;
            setDescriptionErrorMessage('Description must be at least 6 characters!')
        }

        if (description.value.length < 1) {
            isPassed = false;
            setDescriptionErrorMessage('Please insert Description!')
        }

        if (imageURL.value.length < 6) {
            isPassed = false;
            setImgErrorMessage('Image URL must be at least 6 characters!')
        }

        if (imageURL.value.length < 1) {
            isPassed = false;
            setImgErrorMessage('Please insert image URL!')
        }

        if (isPassed) {

            createArticle(category.value, title.value, description.value, imageURL.value);


            title.value = '';
            description.value = '';
            imageURL.value = '';
        }
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

                <div className="title-div">
                    <label htmlFor="title">Article Title</label>
                    <input type="text" className="create-title" id="title" placeholder="Article Title" name="title" />
                    <ErrorDiv>{titleErrorMessage}</ErrorDiv>
                </div>

                <div className="description-div">
                    <label htmlFor="description">Article Description</label>
                    <textarea className="create-description" id="description" placeholder="Article Description..." name="description"></textarea>
                    <ErrorDiv>{descriptionErrorMessage}</ErrorDiv>
                </div>

                <div className="img-div">
                    <label htmlFor="imageURL">Image url</label>
                    <input type="text" className="create-img" id="imageURL" placeholder="Image Url" name="imageURL" />
                    <ErrorDiv>{imgErrorMessage}</ErrorDiv>
                </div>

            </div>
            <button type="submit" className="create-btn">Submit</button>
        </form>
    );
}

export default Create;
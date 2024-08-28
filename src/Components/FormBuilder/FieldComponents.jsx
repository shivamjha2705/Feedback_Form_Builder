import { useState } from "react";
import {FaStar } from "react-icons/fa";
import {smile1, smile2, smile3, smile4, smile5 } from "../../assets";

export const TextareaField = () => (
    <div className="pb-9 p-4 rounded-md">
        <label className="block mb-2 text-sm font-medium text-gray-700">Would you like to add a comment?</label>
        <textarea className="w-full p-2 border rounded-md" rows="4" placeholder="Enter your comment..."></textarea>
    </div>
);

export const NumericRatingField = () => {
    const [selectedRating, setSelectedRating] = useState(null);

    return (
        <div className="pb-9 p-4 rounded-md">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                How likely is it that you will recommend us?
            </label>
            <div className="flex mb-2">
                {[...Array(10)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`w-full h-8  border border-gray-300 ${selectedRating === index + 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                            } hover:bg-blue-600 hover:text-white transition-colors`}
                        onClick={() => setSelectedRating(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const StarRatingField = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="pb-9 p-4 rounded-md">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                Give a star rating for the website:
            </label>
            <div className="flex space-x-2">
                {[...Array(5)].map((_, index) => {
                    const starIndex = index + 1;
                    return (
                        <FaStar
                            key={starIndex}
                            className={`w-8 h-8 cursor-pointer ${starIndex <= (hoverRating || rating)
                                ? 'text-blue-600'
                                : 'text-gray-300'
                                }`}
                            onClick={() => setRating(starIndex)}
                            onMouseEnter={() => setHoverRating(starIndex)}
                            onMouseLeave={() => setHoverRating(0)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export const SmileyRatingField = () => {
    const [rating, setRating] = useState(null);

    const handleClick = (value) => {
        setRating(value);
    };

    return (
        <div className="pb-9 p-4 rounded-md max-w-md mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                What is your opinion of this page?
            </label>
            <div className="flex justify-center space-x-4">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className={`cursor-pointer p-2 ${rating === num ? 'bg-blue-600 rounded-md' : ''
                            }`}
                        onClick={() => handleClick(num)}
                    >
                        <img
                            src={num === 1 ? smile1 : num === 2 ? smile2 : num === 3 ? smile3 : num === 4 ? smile4 : num === 5 ? smile5 : ''}
                            alt={`Smiley ${num}`}
                            className={`w-12 h-12 ${rating === num ? 'scale-110' : ''}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const SingleLineInputField = () => (
    <div className="pb-9 p-4 rounded-md">
        <label className="block mb-2 text-sm font-medium text-gray-700">Would you like to add a comment?</label>
        <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Enter a single line input"
    />
    </div>
);

export const RadioButtonField = ({ label, options, onEdit }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="radioGroup"
                        value="Radio 1"
                        checked={selectedOption === 'Radio 1'}
                        onChange={handleOptionChange}
                        className="form-radio"
                    />
                    <span>Radio 1</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="radioGroup"
                        value="Radio 2"
                        checked={selectedOption === 'Radio 2'}
                        onChange={handleOptionChange}
                        className="form-radio"
                    />
                    <span>Radio 2</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="radioGroup"
                        value="Radio 3"
                        checked={selectedOption === 'Radio 3'}
                        onChange={handleOptionChange}
                        className="form-radio"
                    />
                    <span>Radio 3</span>
                </label>
            </div>
        </div>
    );
};

export const CategoriesField = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['Bug', 'Content', 'Other'];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                Pick a subject and provide your feedback:
            </label>
            <div className="flex space-x-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-4 py-2 border rounded-md ${
                            selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

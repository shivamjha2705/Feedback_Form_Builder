import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FieldOptions from './FieldOptions';
import FieldEditor from './FieldEditor';
import { TextareaField, NumericRatingField, StarRatingField, SmileyRatingField, SingleLineInputField, RadioButtonField, CategoriesField } from './FieldComponents';
import { radio_icon, textarea_icon, star_icon, smiley_icon, numerical_icon, cate_icon, input_icon } from "../../assets";
const FormBuilder = () => {
    const location = useLocation();
    const initialFormTitle = location.state?.formTitle || '';
    
    const [formTitle, setFormTitle] = useState(initialFormTitle);
    const [isUrlConditionEnabled, setIsUrlConditionEnabled] = useState(true);
    const [isDateEnabled, setIsDateEnabled] = useState(true);
    const [isTimeEnabled, setIsTimeEnabled] = useState(true);
    const [formFields, setFormFields] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const fields = [
        { name: 'Textarea', icon: textarea_icon, component: <TextareaField /> },
        { name: 'Numeric rating', icon: numerical_icon, component: <NumericRatingField /> },
        { name: 'Star rating', icon: star_icon, component: <StarRatingField /> },
        { name: 'Smiley rating', icon: smiley_icon, component: <SmileyRatingField /> },
        { name: 'Single line input', icon: input_icon, component: <SingleLineInputField /> },
        { name: 'Radio button', icon: radio_icon, component: <RadioButtonField /> },
        { name: 'Categories', icon: cate_icon, component: <CategoriesField /> },
    ];

    const addFieldToForm = (fieldComponent) => {
        setFormFields((prevFields) => [
            ...prevFields,
            { id: Date.now(), component: fieldComponent },
        ]);
    };

    const deleteField = (id) => {
        setFormFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    const editField = (index) => {
        setEditingIndex(index);
    };

    return (
        <div className="flex flex-col md:flex-row p-4 pt-24 gap-3 md:gap-0 bg-[#F3F3F3] min-h-screen">
            <FieldEditor
                formTitle={formTitle}
                formFields={formFields}
                editField={editField}
                deleteField={deleteField}
            />
            <FieldOptions
                fields={fields}
                addFieldToForm={addFieldToForm}
                isUrlConditionEnabled={isUrlConditionEnabled}
                setIsUrlConditionEnabled={setIsUrlConditionEnabled}
                isDateEnabled={isDateEnabled}
                setIsDateEnabled={setIsDateEnabled}
                isTimeEnabled={isTimeEnabled}
                setIsTimeEnabled={setIsTimeEnabled}
            />
        </div>
    );
};

export default FormBuilder;

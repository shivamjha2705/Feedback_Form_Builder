import { MdEdit, MdOutlineArrowBackIosNew, MdDelete } from "react-icons/md";

const FieldEditor = ({ formFields, editField, deleteField, formTitle }) => {
  return (
    <div className="flex-1 md:mr-64 rounded-lg flex justify-center items-center min-h-[100vh]">
                <div className="w-full md:max-w-[500px] md:min-w-[400px]">
                    <div className="bg-blue-600 text-white rounded-t-lg p-2 flex items-center justify-between">
                        <button className="text-white"><MdOutlineArrowBackIosNew /></button>
                        <h2 className="text-lg">{formTitle}</h2>
                        <button className="text-white"><MdEdit /></button>
                    </div>
                    <div className="flex flex-col p-2 bg-white rounded-b-lg overflow-y-auto min-h-screen ">
                        {/* Dynamically Rendered Fields */}
                        {formFields.length > 0 ? (
                            formFields.map((field, index) => (
                                <div key={field.id} className="mb-7 shadow-md relative">
                                    {/* Field Component */}
                                    {field.component}

                                    {/* Edit and Delete Buttons */}
                                    <div className="absolute bottom-2 right-4 flex space-x-4">
                                        <button
                                            onClick={() => editField(index)}
                                            className="text-gray-500 text-xl hover:text-blue-700 hover:scale-110 transition-all duration-75"
                                        >
                                            <MdEdit />
                                        </button>
                                        <button
                                            onClick={() => deleteField(field.id)}
                                            className="text-gray-500 text-xl hover:text-red-700 hover:scale-110 transition-all duration-75"
                                        >
                                            <MdDelete />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 flex justify-center items-center min-h-screen text-xl">Add Fields</p>
                        )}

                    </div>
                </div>
            </div>
    );
};

export default FieldEditor
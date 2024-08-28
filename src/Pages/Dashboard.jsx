import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { survey_logo } from "../assets";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [forms, setForms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formTitle, setFormTitle] = useState("");
    const navigate = useNavigate();

    const fetchForms = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "forms"));
            const formsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setForms(formsData);
        } catch (error) {
            console.error("Error fetching forms: ", error);
        }
    };

    useEffect(() => {
        fetchForms();
    }, []);

    const createForm = async () => {
        if (formTitle.trim() === "") {
            alert("Form title cannot be empty.");
            return;
        }
        try {
            navigate('/form-builder', { state: { formTitle } });
        } catch (error) {
            console.error("Error creating form: ", error);
        }
    };
    const deleteForm = async (formId) => {
        try {
            await deleteDoc(doc(db, "forms", formId));
            setForms((prevForms) => prevForms.filter((form) => form.id !== formId));
        } catch (error) {
            console.error("Error deleting form: ", error);
        }
    };

    const editForm = (form) => {
        navigate('/form-builder', { state: { formTitle: form.title, formId: form.id } });
    };

    return (
        <div className="h-screen p-6 bg-gray-50 mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    className="flex flex-col items-center justify-center bg-white border-2 border-blue-500 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out"
                    onClick={() => setIsModalOpen(true)}
                >
                    <div className="text-6xl text-blue-600 font-bold">+</div>
                    <p className="mt-4 text-lg font-semibold text-gray-800">New Form</p>
                </div>

                {forms.map((form) => (
                    <div
                        key={form.id}
                        className="bg-white border-2 border-gray-200 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center justify-center bg-yellow-200 p-2 rounded-t-lg">
                            <img src={survey_logo} alt="Form Icon" />
                        </div>
                        <div className="my-4 flex flex-col gap-3 p-4">
                            <h2 className="text-lg font-bold text-gray-900">{form.title}</h2>
                            <p className="text-gray-600 flex justify-between"><span>Submitted:</span> {form.submissions}</p>
                            <p className="text-gray-600 flex justify-between"><span>Viewed:</span> {form.viewed}</p>
                            <p className="text-gray-600 flex justify-between"><span>Date Published:</span> {form.date}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-2 p-4">
                            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 hover:shadow-btn-hover transition">
                                View Submissions
                            </button>
                            <div className="flex gap-2 w-full justify-center">
                                <button
                                    onClick={() => editForm(form)}
                                    className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 hover:shadow-btn-hover transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteForm(form.id)}
                                    className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600  hover:shadow-btn-hover transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white text-black rounded-lg py-4 w-96 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4 px-4">Create Feedback Form</h2>
                        <input
                            type="text"
                            value={formTitle}
                            onChange={(e) => setFormTitle(e.target.value)}
                            className="border-b border-gray-300 w-full px-4 py-2 mb-6 text-gray-700 focus:outline-none focus:ring-0"
                        />
                        <div className="flex justify-end px-4 space-x-3">
                            <button
                                onClick={createForm}
                                className=" text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
                            >
                                Create
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

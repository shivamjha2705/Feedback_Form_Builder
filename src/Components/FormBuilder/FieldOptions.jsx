import { FaPlus } from 'react-icons/fa';

const FieldOptions = ({
    fields,
    addFieldToForm,
    isUrlConditionEnabled,
    setIsUrlConditionEnabled,
    isDateEnabled,
    setIsDateEnabled,
    isTimeEnabled,
    setIsTimeEnabled,
}) => {
    return (
        <div className="md:fixed md:right-0 md:top-16 md:w-1/4 bg-white rounded-lg shadow p-4 space-y-4 overflow-y-auto h-full">
            <h3 className="text-lg font-semibold pt-2">Add fields</h3>
            <ul className="space-y-4">
                {fields.map((field, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                            <img src={field.icon} alt={`${field.name} icon`} className="w-6 h-6" />
                            {field.name}
                        </span>
                        <button className="text-blue-500 font-bold" onClick={() => addFieldToForm(field.component)}><FaPlus /></button>
                    </li>
                ))}
            </ul>
            {/* Additional Options */}
            <div className="space-y-5">
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-gray-700 flex items-center space-x-2">
                            <span>Show based on URL conditions</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isUrlConditionEnabled}
                                onChange={(e) => setIsUrlConditionEnabled(e.target.checked)}
                            />
                            <div className="relative w-10 h-4 bg-gray-200 rounded-full peer peer-checked:w-10 dark:bg-gray-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[-4px] after:left-0 after:bg-[#2196F3] after:shadow-md after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#90CAF9]"></div>
                        </label>
                    </div>
                    {isUrlConditionEnabled && (
                        <input
                            type="text"
                            placeholder="https://"
                            className="w-full border-b border-gray-400 p-2 text-gray-600 focus:outline-none focus:border-gray-800"
                        />
                    )}
                </div>
                {/* Date Picker Section */}
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-gray-700 flex items-center space-x-2 py-2">
                            <span>Show on a specific date</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isDateEnabled}
                                onChange={(e) => setIsDateEnabled(e.target.checked)}
                            />
                            <div className="relative w-10 h-4 bg-gray-200 rounded-full peer peer-checked:w-10 dark:bg-gray-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[-4px] after:left-0 after:bg-[#2196F3] after:shadow-md after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#90CAF9]"></div>
                        </label>
                    </div>
                    {isDateEnabled && (
                        <div className="relative">
                            <label className="absolute -top-2.5 left-3 bg-white px-1 text-gray-600 text-sm">
                                Start Date
                            </label>
                            <input
                                type="date"
                                placeholder="MM/DD/YYYY"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
                            />
                        </div>
                    )}
                </div>
                {/* Time Picker Section */}
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-gray-700 flex items-center space-x-2 py-2">
                            <span>Show on a specific time</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isTimeEnabled}
                                onChange={(e) => setIsTimeEnabled(e.target.checked)}
                            />
                            <div className="relative w-10 h-4 bg-gray-200 rounded-full peer peer-checked:w-10 dark:bg-gray-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[-4px] after:left-0 after:bg-[#2196F3] after:shadow-md after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#90CAF9]"></div>
                        </label>
                    </div>
                    {isTimeEnabled && (
                        <div className="relative">
                            <label className="absolute -top-2.5 left-3 bg-white px-1 text-gray-600 text-sm">
                                Select Time
                            </label>
                            <input
                                type="time"
                                placeholder="hh:mm aa"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FieldOptions;

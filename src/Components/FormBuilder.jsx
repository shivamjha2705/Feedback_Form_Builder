const FormBuilder = () => {
  return (
      <div className="flex flex-1 p-4 space-x-4 mt-24">
        {/* Left Section (Form Editor) */}
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <div className="bg-blue-600 text-white rounded-t-lg p-2 flex items-center justify-between">
            <h2 className="text-lg">Generic Website Rating</h2>
            <button className="text-white">✎</button>
          </div>
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-b-lg">
            <p className="text-gray-500">Add Fields</p>
          </div>
        </div>

        {/* Right Section (Field Options) */}
        <div className="w-1/4 bg-white rounded-lg shadow p-4 space-y-4">
          <h3 className="text-lg font-semibold">Add fields</h3>
          <ul className="space-y-2">
            {['Textarea', 'Numeric rating', 'Star rating', 'Smiley rating', 'Single line input', 'Radio button', 'Categories'].map((field, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{field}</span>
                <button className="text-blue-500 font-bold">+</button>
              </li>
            ))}
          </ul>

          {/* Additional Options */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-gray-600">Show based on URL conditions</label>
              <input type="text" className="border w-full p-2 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Show on a specific date</span>
              </label>
              <input type="date" className="border w-full p-2 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Show on a specific time</span>
              </label>
              <input type="time" className="border w-full p-2 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default FormBuilder;

const FormInput = ({ label, inputOptions }) => {
    return (
        <div className="group">
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <div className="mt-1">
                <input
                    {...inputOptions}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

export default FormInput;

import React, { useState, useEffect } from "react";

const GoogleForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const googleFormId =
            "1FAIpQLScKN0rCYFdI6TTdPiklaoDq0qLWLVzBkIlzUbMCGJKZyOMrTw";
        const formUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

        const formDataToSubmit = new FormData();
        formDataToSubmit.append("entry.535241574", formData.name); // Use actual field IDs from Google Form
        formDataToSubmit.append("entry.1303140910", formData.email); // Replace with actual field ID
        formDataToSubmit.append("entry.486183013", formData.message); // Replace with actual field ID

        fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            body: formDataToSubmit,
        })
            .then(() => {
                setAlert({
                    type: "success",
                    message: "Thanks for your feedback!",
                });
            })
            .catch((error) => {
                setAlert({
                    type: "error",
                    message: "Error submitting form",
                });
                console.error("Error submitting form:", error);
            });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [alert]);

    return (
        <form
            onSubmit={handleSubmit}
            className="grid relative grid-cols-2 justify-between h-full gap-2 text-xs sm:text-[0.875rem]"
        >
            {alert?.type === "success" && (
                <div className="absolute top-0 inset-x-0 font-extrabold flex items-center justify-center">
                    <span className="bg-[#2bf23f] text-white shadow-lg p-3 px-6 rounded-md tracking-wide text-xs">
                        {alert.message}
                    </span>
                </div>
            )}
            {alert?.type === "error" && (
                <div className="absolute top-0 inset-x-0 font-extrabold flex items-center justify-center">
                    <span className="bg-[#f22b2b] text-white shadow-lg p-3 px-6 rounded-md tracking-wide text-xs">
                        {alert.message}
                    </span>
                </div>
            )}
            <label className="flex flex-col gap-1 max-md:col-span-2 text-gray-300">
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 placeholder:text-gray-600"
                    required
                />
            </label>
            <label className="flex flex-col gap-1 max-md:col-span-2 text-gray-300">
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 placeholder:text-gray-600"
                    required
                />
            </label>
            <label className="flex flex-col gap-1 col-span-2 text-gray-300">
                Message:
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 placeholder:text-gray-600"
                    required
                />
            </label>
            {isLoading && (
                <button
                    type="button"
                    className="bg-[#fa0029] text-gray-300 p-3 tracking-widest font-semibold leading-3 font-carattere flex items-center justify-center col-span-2"
                >
                    <span className="block w-4 h-4 border-l-2 border-white animate-spin rounded-full"></span>
                </button>
            )}
            {!isLoading && (
                <button
                    type="submit"
                    className="bg-[#fa0029] text-gray-300 p-3 tracking-widest font-semibold leading-3 font-carattere flex items-center justify-center min-h-10 col-span-2"
                >
                    <span>{"Submit"}</span>
                </button>
            )}
        </form>
    );
};

export default GoogleForm;

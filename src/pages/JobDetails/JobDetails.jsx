import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {
        _id,
        title,
        company,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        requirements,
        responsibilities,
        hr_name,
        hr_email,
        company_logo
    } = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            {/* Header */}
            <div className="flex items-center gap-6 border-b pb-4 mb-6">
                <img src={company_logo} alt={`${company} Logo`} className="w-20 h-20 rounded-lg object-contain" />
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                    <p className="text-lg text-gray-500">{company} - {location}</p>
                </div>
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">Job Details</h2>
                    <ul className="text-gray-600">
                        <li><strong>Type:</strong> {jobType}</li>
                        <li><strong>Category:</strong> {category}</li>
                        <li><strong>Location:</strong> {location}</li>
                        <li><strong>Application Deadline:</strong> {applicationDeadline}</li>
                        <li>
                            <strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">HR Contact</h2>
                    <ul className="text-gray-600">
                        <li><strong>Name:</strong> {hr_name}</li>
                        <li><strong>Email:</strong> <a href={`mailto:${hr_email}`} className="text-blue-600 underline">{hr_email}</a></li>
                    </ul>
                </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Job Description</h2>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Requirements</h2>
                <ul className="list-disc ml-5 text-gray-600">
                    {requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Responsibilities</h2>
                <ul className="list-disc ml-5 text-gray-600">
                    {responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                    ))}
                </ul>
            </div>

            {/* Apply Now Button */}
            <div className="text-center mt-8">
            <Link to={`/jobApply/${_id}`}>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-200">
                    Apply Now
                </button>
            </Link>
            </div>
        </div>
    );
};

export default JobDetails;

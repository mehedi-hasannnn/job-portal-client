import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import Swal from 'sweetalert2';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/job-application/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setJobs(jobs.filter((job) => job._id !== id));
                            Swal.fire('Deleted!', 'Your application has been deleted.', 'success');
                        } else {
                            Swal.fire('Error!', 'Failed to delete the application.', 'error');
                        }
                    })
                    .catch((err) => {
                        console.error('Error deleting application:', err);
                        Swal.fire('Error!', 'Something went wrong.', 'error');
                    });
            }
        });
    };
    

    return (
        <div>
            <h2 className="text-3xl">My Applications: {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Company Name</th>
                            <th>Job</th>
                            <th>Application Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Company Logo"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                                </td>
                                <td>
                                    Applied <IoCheckmarkDoneCircle />
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(job._id)}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;

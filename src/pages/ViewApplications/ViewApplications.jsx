import { title } from 'motion/react-client';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e,id) =>{
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title:"Status Has Been Updated",
                    showConFirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl">Applications for this job:{applications.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Applicant Email</th>
        <th>Update Status</th>
        <th>Applicant's Github</th>
        <th>Applicant's Resume</th>
      </tr>
    </thead>
    <tbody>
        {
            applications.map((app, index) => <tr key={app._id}>
                <th>{index+1}</th>
                <td>{app.applicant_email}</td>
                <td>
                <select 
                onChange={(e)=>handleStatusUpdate(e, app._id)}
                defaultValue={app.status || 'Change Status'}
                 className="select select-bordered select-xs w-full max-w-xs">
                <option disabled>Change Status</option>
                <option>Under Review</option>
                <option>Set Interview</option>
                <option>Hired</option>
                <option>Rejected</option>
                </select>
                </td>
                <td>{app.github}</td>
                <td>{app.resume}</td>
              </tr>)
        }


    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplications;
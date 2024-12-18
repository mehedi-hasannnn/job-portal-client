import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Addjob = () => {

    const {user} = useAuth();

    const handleAddJob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(Object.fromEntries(formData.entries()));
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const {min,max,currency, ...newJob} = initialData;
        console.log(newJob);
        newJob.salaryRange = {min, max, currency}
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Job has been added",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        e.target.reset();
                        
                        
                        }
                       
        })
        .catch(err => console.error(err));
        navigate('/myApplications')
        
    }

    return (
        <div>
            <h2 className='text-3xl text-center mt-5 font-bold'>Post a new Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
        </div>
        {/* Job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job location</span>
          </label>
          <input type="text" name='location' placeholder="Job location" className="input input-bordered" required />
        </div>
        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue="Pick a job type" className="select select-bordered w-full max-w-xs">
        <option disabled>Pick a job type</option>
        <option>Full time</option>
        <option>Intern</option>
        <option>Part Time</option>
        </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select defaultValue="Pick a job field" className="select select-bordered w-full max-w-xs">
        <option disabled>Pick a job field</option>
        <option>Engineering</option>
        <option>Marketing</option>
        <option>Finance</option>
        <option>Teaching</option>
        </select>
        </div>
        {/* Salary Range */}
        <p className='mt-4'>Salary Range</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Min</span>
          </label>
          <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Max</span>
          </label>
          <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Pick Currency</span>
          </label>
          <select defaultValue="Currency" name='currency' className="select select-bordered w-full max-w-xs">
        <option disabled>Currency</option>
        <option>BDT</option>
        <option>USD</option>
        <option>EUR</option>
        </select>
        </div>

        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>

          <textarea className="textarea textarea-bordered" placeholder="Please Provide a Detailed Job Description" name='description'required ></textarea>
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
        </div>
        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>

          <textarea className="textarea textarea-bordered" placeholder="Please Provide each requirements in a new line" name='requirements'required ></textarea>
        </div>

        {/* Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>

          <textarea className="textarea textarea-bordered" placeholder="Please Provide each Job Responsibilities in a new line" name='responsibilities'required ></textarea>
        </div>
        {/* HR name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
        </div>
        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input type="text" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />
        </div>
        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form> 
        </div>
        
    );
};

export default Addjob;
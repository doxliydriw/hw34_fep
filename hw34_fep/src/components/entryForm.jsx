import React from 'react';
import { Formik, Form, Field } from 'formik';

import { useFormik } from 'formik';
 
function EntryForm() {
   
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       phone: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
    return (
      <>
        <h1>Add new entry</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className='card_cntr'>
              <ul className="card">
                  <li>
                          <label htmlFor="firstName">First Name</label>
                          <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.firstName}
                          />
                  </li>
                  <li>
                          <label htmlFor="lastName">Last Name</label>
                          <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.lastName}
                          />
                  </li>
                  <li>
                          <label htmlFor="email">Phone number</label>
                          <input
                              id="phone"
                              name="phone"
                              type="phone"
                              onChange={formik.handleChange}
                              value={formik.values.phone}
                          />
                </li>
                
              </ul>
            </div>
        </form>
        <button className="submit" type="submit">Submit</button>
    </>
   );
};

export default EntryForm
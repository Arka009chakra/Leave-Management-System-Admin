import React, { useState, useEffect } from 'react';
import p1 from './p1.png';
import { useNavigate } from 'react-router';
function Leave() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3200/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(res1 => setUsers(res1))
        .catch(err => alert("Error fetching data"))
    }, []);

    function handleApprove(cemail) {
        fetch(`http://localhost:3200/update/${cemail}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ cemail }) // Assuming cemail is passed as an object
        })
        .then(res => res.json())
        .then(res1 => {
            alert("Leave Approved!");
            // Optionally, you can update the state here to reflect the change
        })
        .catch(err => alert("Error approving leave"))
    }

    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
                            <button className="btn btn-primary mb-3 mr-2" onClick={() => navigate('/add')}>Add Leave</button>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Company Email</th>
                                        <th scope="col">Booked</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.cemail}</td>
                                            <td>{user.leave}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <button style={{ height: '50px', width: '80px' }} className="btn btn-success" onClick={() => handleApprove(user.cemail)}>Approve</button>
                                                    <button style={{ height: '50px', width: '80px' }}  className="btn btn-danger mr-1">Reject</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-6">
                            <img src={p1} className="img-fluid animated-image with-margin-top" alt="home-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leave;

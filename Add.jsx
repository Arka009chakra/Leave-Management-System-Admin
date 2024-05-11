import React, { useState } from 'react';

function Add() {
    const [leave, setLeave] = useState("");
    const [cemail, setCemail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3200/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cemail: cemail,
                    leave: leave
                })
            });
            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Something went wrong:", error);
            alert("Something went wrong!!");
        }
    };

    return (
        <div className="container-fluid">
            <div className="text-center">
                <h1>
                    <strong className="brand-name">ArkaTechnical</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Company Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCemail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Leave</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setLeave(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">Add Leave</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;

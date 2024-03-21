import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddProduct() {
    const navigate = useNavigate();

    //input states
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function createProduct(e) {
        e.preventDefault();

        // Dummy implementation for token retrieval, replace this with your actual implementation
        let token = localStorage.getItem('token');
        console.log(token);

        fetch(`/api/product/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: price
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.error === "Product already exists") {
                Swal.fire({
                    icon: "error",
                    title: "Product already exists.",
                    text: data.message
                });
            } else if (data.error === "Failed to product") {
                Swal.fire({
                    icon: "error",
                    title: "Unsuccessful Product Creation",
                    text: data.message
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Product Added"
                });
                navigate("/product/all");
            }
        });

        setName("");
        setDescription("");
        setPrice(0);
    }

    return (
        <>            
			<div className='min-h-screen mt-20'>
			<div className='flex p-3 max-w-3xl mx-auto text-center	 flex-row md:flex-col md:items-center gap-5'> 
				<Form className='border border shadow' style={{ width: "30%" }} onSubmit={e => createProduct(e)}>
				<Form.Group className='pt-3' controlId="productName">
					<Form.Label className='mt-2'>Name:</Form.Label>
					<Form.Control type="text" placeholder="Product Name" required value={name} onChange={e => { setName(e.target.value) }} />
				</Form.Group>
				<Form.Group className='pt-3' controlId="productDescription">
					<Form.Label className='mt-2'>Description:</Form.Label>
					<Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => { setDescription(e.target.value) }} />
				</Form.Group>
				<Form.Group className='pt-3' controlId="productPrice">
					<Form.Label className='mt-2'>Price:</Form.Label>
					<Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => { setPrice(e.target.value) }} />
				</Form.Group>
				<Button variant="primary" type="submit" className="my-5 border rounded shadow p-2 text-white" style={{ border: "1px solid #007bff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", backgroundColor: "#007bff" }}>Submit</Button>
				</Form>
			</div>
			</div>

			</>
    );
}

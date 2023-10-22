// src/components/DonationPage.js

import React, { useState } from 'react';
import './part4.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Part4() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleDonation = () => {
    // Perform donation processing here, e.g., send the data to a server or payment gateway
    // You can also display a confirmation message or redirect to a donation platform.
    alert(`Thank you, ${name}! Your donation of $${amount} has been received.`);
  };

  return (
    <div className="donation-page">
      <h1>Donating now </h1>
      <p>Your support can make a difference. Please consider donating to help those in need.</p>

      <div className="donation-form">
        {/* <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Donation Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /> */}
        <br />

        <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="inputGroup-sizing-default">
            Full Name
            </InputGroup.Text>
            <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <br />
        <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="inputGroup-sizing-default">
            Email
            </InputGroup.Text>
            <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <br />
        <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="inputGroup-sizing-default">
            Phone
            </InputGroup.Text>
            <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <br />
        <InputGroup className="mb-3" size="lg">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
        <br />

        {/* <button onClick={handleDonation}>Donate</button> */}
        <Button onClick={handleDonation} variant="primary" size="lg">Donate Now!</Button>

      </div>
    </div>
  );
}

export default Part4;

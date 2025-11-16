import React from 'react';
import './Delivery.css';

const Delivery = () => {
  return (
    <div className="delivery-page">
      <h1>Delivery Information</h1>
      <ul>
        <li><strong>Areas:</strong> Nairobi, Mombasa, Kisumu & surrounding suburbs</li>
        <li><strong>Time:</strong> 30-45 minutes (average)</li>
        <li><strong>Fee:</strong> $1-$3 (based on distance)</li>
        <li><strong>Free delivery</strong> on orders above KSh 1,500</li>
      </ul>
    </div>
  );
};

export default Delivery;
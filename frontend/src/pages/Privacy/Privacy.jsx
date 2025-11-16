import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: November 16, 2025</em></p>
      <p>
        We respect your privacy. Your personal data (name, phone, address) is used only to
        process and deliver your orders. We never share it with third parties.
      </p>
      <p>
        Payments are securely handled via <strong>Stripe</strong>. We do not store card details.
      </p>
    </div>
  );
};

export default Privacy;
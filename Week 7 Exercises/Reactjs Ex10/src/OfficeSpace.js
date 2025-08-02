import React from 'react';

function OfficeSpace() {
  const offices = [
    { name: "T-Hub", rent: 65000, address: "Madhapur" },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',         
        justifyContent: 'center',     
        minHeight: '100vh',           
        backgroundColor: '#f9f9f9',   
        padding: '20px'
      }}
    >
      <h1>Office Space Rental</h1>

      <img
        src="https://tse3.mm.bing.net/th/id/OIP.kePse5tXsp6Ma2fsHojZ7AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Office Space"
        style={{
          width: "400px",
          height: "200px",
          marginBottom: "20px",
          borderRadius: "8px"
        }}
      />

      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
            width: "350px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h3>{office.name}</h3>
          <p style={{ color: office.rent < 60000 ? "red" : "green", fontWeight: 'bold' }}>
            Rent: ₹{office.rent}
          </p>
          <p>{office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpace;


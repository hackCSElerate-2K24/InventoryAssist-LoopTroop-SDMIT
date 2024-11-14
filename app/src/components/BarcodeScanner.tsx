import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

const BarcodeScanner = () => {
  const [data, setData] = useState('Not Found');
  
  return (
    <div>
      <h1>Barcode Scanner</h1>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData('Not Found');
        }}
      />
      <p>Scanned Result: {data}</p>
    </div>
  );
};

export default BarcodeScanner;

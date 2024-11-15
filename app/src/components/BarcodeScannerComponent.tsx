import React, { useEffect, useState } from 'react';
import BarcodeScanner from 'react-qr-barcode-scanner';  // Corrected import

const BarcodeScannerComponent = () => {
  const [barcode, setBarcode] = useState<string | null>("Not Scanned");

  const handleScan = (err: any, result: any) => {
    if (result) {
      setBarcode(result.text);
        // Set the barcode data if scanned
    } else {
      setBarcode("Not Scanned");  // Handle when no barcode is scanned
    }
  };
  useEffect(()=>{
    console.log(barcode)
  },[barcode, setBarcode])

  return (
    <div className="w-96">
      <h2>Barcode Scanner</h2>
      <div>
        <p>{barcode}</p>
      </div>
      <BarcodeScanner
        width={500}
        height={500}
        onUpdate={handleScan}  // Handle barcode scan results
      />
    </div>
  );
};

export default BarcodeScannerComponent;

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
    <>
      <div className='flex items-center gap-10 border-black border-[1px] p-16'>
        <BarcodeScanner
          width={600}
          height={600}
          onUpdate={handleScan}  // Handle barcode scan results
        />
        <h2>
          <div className="bg-white">
            <p>{barcode}</p>
          </div>
        </h2>
      </div>
    </>
  );
};

export default BarcodeScannerComponent;

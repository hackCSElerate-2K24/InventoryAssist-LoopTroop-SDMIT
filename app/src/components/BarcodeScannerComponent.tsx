import React, { useEffect, useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner"; // Corrected import

const BarcodeScannerComponent = () => {
  const [barcode, setBarcode] = useState<string | null>("Not Scanned");

  const handleScan = (err: any, result: any) => {
    if (result) {
      setBarcode(result.text);
    } else {
      setBarcode("Not Scanned");
    }
  };

  useEffect(() => {
    console.log(barcode);
  }, [barcode, setBarcode]);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 border-black border-[1px] p-4 sm:p-8 lg:p-16">
        <BarcodeScanner
          width={500}
          height={500}
          onUpdate={handleScan}
        />
        <div className="bg-white text-center lg:text-3xl sm:text-lg md:text-2xl">
          <p>{barcode}</p>
        </div>
      </div>
    </>
  );
};

export default BarcodeScannerComponent;

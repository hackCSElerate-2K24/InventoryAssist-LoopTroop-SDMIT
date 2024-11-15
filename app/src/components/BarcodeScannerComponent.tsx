import React, { useEffect, useState } from 'react';
import { BarcodeScanner } from 'react-barcode-scanner'; // Import the scanner
import 'react-barcode-scanner/polyfill'; // Polyfill for barcode scanning

const BarcodeScannerComponent = () => {
    const [barcode, setBarcode] = useState<string | null>(null);

    // Callback function when barcode is detected
    const handleScan = (data: string) => {
        if (data) {
        setBarcode(data); // Update the barcode data
        }
    };

    useEffect(()=>{
        console.log(barcode);
    },[barcode])

    return (
        <div className="w-96 h-96">
        <h2>Barcode Scanner</h2>
        {/* Use the BarcodeScanner component */}
        <BarcodeScanner
            onDetected={handleScan}  // Event handler when barcode is detected
        />
        <div>
            {barcode ? (
            <p>Scanned Barcode: {barcode}</p>
            ) : (
            <p>No barcode scanned yet.</p>
            )}
        </div>
        </div>
    );
};

export default BarcodeScannerComponent;

import { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import jsQR from "jsqr";
import { toast } from "react-toastify";

const QrScanner = () => {
  const [qrCode, setQrCode] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = (imageSrc) => {
    if (!scanning || qrCode) return;

    if (imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code) {
          setQrCode(code.data);
          setScanning(false);
          console.log("QR found:", code.data);
        }
      };
    }
  };

  const handleReset = () => {
    setQrCode(null);
    setScanning(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCode);
    toast.info("Copied to clipboard!");
  };

  const openLink = () => {
    if (/^https?:\/\//.test(qrCode)) window.open(qrCode, "_blank");
  };

  const isLink = /^https?:\/\//.test(qrCode);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">Scan. Decode. Go.</h1>

      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
        <WebcamCapture onScan={handleScan} scanning={scanning} />
      </div>

      <div className="mt-6 text-center">
        {qrCode ? (
          <div className="space-y-4">
            <div className="text-lg font-medium break-words bg-gray-800 p-4 rounded-lg border border-gray-700 max-w-md mx-auto">
              {isLink ? (
                <p>
                  <span className="text-green-400">{qrCode}</span>
                </p>
              ) : (
                <p>
                  <span className="text-yellow-400">{qrCode}</span>
                </p>
              )}
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg font-semibold cursor-pointer"
              >
                Copy
              </button>

              {isLink && (
                <button
                  onClick={openLink}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-lg font-semibold cursor-pointer"
                >
                  Go to Link
                </button>
              )}

              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 transition-all duration-300 rounded-lg font-semibold cursor-pointer"
              >
                Rescan
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 mt-4 animate-pulse">
            Point your camera at a QR code
          </p>
        )}
      </div>
    </div>
  );
};

export default QrScanner;

import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({ onScan, scanning }) => {
  const webcamRef = useRef(null);

  useEffect(() => {
    if (!scanning) return;
    const timer = setInterval(() => capture(), 700);
    return () => clearInterval(timer);
  }, [scanning]);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) onScan(imageSrc);
    }
  };

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "environment",
  };

  return (
    <div className="relative">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="rounded-2xl w-[90vw] max-w-[400px] h-auto border-4 border-gray-800"
      />
      {scanning && (
        <div className="absolute inset-0 border-4 border-green-500 rounded-2xl animate-pulse shadow-[0_0_15px_2px_rgba(34,197,94,0.7)]"></div>
      )}
    </div>
  );
};

export default WebcamCapture;

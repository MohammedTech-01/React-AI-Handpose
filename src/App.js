// Importing necessary modules and hooks from React, TensorFlow, and additional libraries
import React, { useRef } from "react"; // React and the useRef hook for accessing DOM elements
// Importing TensorFlow and the handpose model from TensorFlow Models
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam"; // Webcam component for capturing video input
import "./App.css"; // Importing stylesheet for the application
import { drawHand } from "./utilities"; // Utility function to draw hand keypoints

// Define the main component for the app
function App() {
  // Creating references to the webcam and canvas elements
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Function to load the handpose model and set up the detection loop
  const runHandpose = async () => {
    const net = await handpose.load(); // Load the handpose model
    console.log("Handpose model loaded."); // Log model loading status
    // Interval to run hand detection every 100 milliseconds
    setInterval(() => {
      detect(net);
    }, 100);
  };

  // Function to detect hands in the video stream
  const detect = async (net) => {
    // Ensure that the webcam is fully loaded and ready to stream
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Video properties to set up the dimensions
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // Setting the video and canvas to the same dimensions
      video.width = videoWidth;
      video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Perform hand detection on the video frame
      const hand = await net.estimateHands(video);
      console.log(hand); // Log detected hand data

      // Context for drawing on the canvas
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx); // Draw detected hands on the canvas
    }
  };

  // Initialize handpose detection
  runHandpose();

  // Component's render function to display the webcam and canvas
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef} // Reference to access webcam element
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef} // Reference to access canvas element
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;

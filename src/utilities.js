// Object mapping each finger to its joints.
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
  };
  
  // Styles for each joint point, simulating the Infinity Gauntlet colors and sizes.
  const style = {
    0: { color: "yellow", size: 15 },
    1: { color: "gold", size: 6 },
    2: { color: "green", size: 10 },
    3: { color: "gold", size: 6 },
    4: { color: "gold", size: 6 },
    5: { color: "purple", size: 10 },
    6: { color: "gold", size: 6 },
    7: { color: "gold", size: 6 },
    8: { color: "gold", size: 6 },
    9: { color: "blue", size: 10 },
    10: { color: "gold", size: 6 },
    11: { color: "gold", size: 6 },
    12: { color: "gold", size: 6 },
    13: { color: "red", size: 10 },
    14: { color: "gold", size: 6 },
    15: { color: "gold", size: 6 },
    16: { color: "gold", size: 6 },
    17: { color: "orange", size: 10 },
    18: { color: "gold", size: 6 },
    19: { color: "gold", size: 6 },
    20: { color: "gold", size: 6 },
  };
  
  // Function to draw the detected hand's landmarks and connections on a canvas.
  export const drawHand = (predictions, ctx) => {
    // Check if there are any hand predictions
    if (predictions.length > 0) {
      // Loop through each hand prediction
      predictions.forEach((prediction) => {
        // Extract landmarks from the prediction
        const landmarks = prediction.landmarks;
  
        // Loop through the fingerJoints to connect the joints
        for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
          let finger = Object.keys(fingerJoints)[j];
          // Draw each bone inside the finger
          for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
            // Indices of the joints to be connected
            const firstJointIndex = fingerJoints[finger][k];
            const secondJointIndex = fingerJoints[finger][k + 1];
  
            // Draw path between joints
            ctx.beginPath();
            ctx.moveTo(
              landmarks[firstJointIndex][0],
              landmarks[firstJointIndex][1]
            );
            ctx.lineTo(
              landmarks[secondJointIndex][0],
              landmarks[secondJointIndex][1]
            );
            ctx.strokeStyle = "plum"; // Color of the stroke
            ctx.lineWidth = 4; // Line thickness
            ctx.stroke();
          }
        }
  
        // Loop through all landmarks to draw the joints
        for (let i = 0; i < landmarks.length; i++) {
          const x = landmarks[i][0]; // x coordinate of the joint
          const y = landmarks[i][1]; // y coordinate of the joint
          // Draw a circle at each joint point
          ctx.beginPath();
          ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
          ctx.fillStyle = style[i]["color"]; // Color of the joint point
          ctx.fill(); // Complete the circle
        }
      });
    }
  };
  
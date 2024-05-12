
# Hand Detection with TensorFlow Handpose Model

This project utilizes the TensorFlow Handpose model integrated with a React application to detect and visualize hand landmarks in real-time using the webcam feed.

## Features

- **Real-time Hand Detection**: Leverage TensorFlow's handpose model to detect hands and visualize their landmarks in real-time.
- **Webcam Support**: Uses the webcam for capturing live video feed to detect hand movements.
- **Dynamic Visualization**: Draws hand landmarks and bones dynamically on a canvas overlaying the webcam feed, using styles inspired by the Infinity Gauntlet.

## Usage

- Position your hand within the view of the webcam.
- The application will detect your hand and display the landmarks and connections between them on the canvas overlay.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TensorFlow.js](https://www.tensorflow.org/js) - An open-source hardware-accelerated JavaScript library for training and deploying machine learning models.
- [TensorFlow Models/Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) - Pre-trained TensorFlow model for predicting hand landmarks in the browser.

## Authors

- **Mohammed** - *Initial work* - [MohammedTech-01](https://github.com/MohammedTech-01)

## Acknowledgments

- TensorFlow.js team for providing the Handpose model.
- React community for the robust web development library.

const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    const modelUrl = "https://storage.googleapis.com/asclepius-model-bucket/model.json";
    return tf.loadGraphModel(modelUrl);
}
module.exports = loadModel;
"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import Figure from "@/app/components/Figure";
import { Github } from "lucide-react";
import ImageGlow from "@/app/components/ImageGlow";
import Showcase from "@/app/components/Showcase";

export default function NeuralNetworkPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-[1.8]">
      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        Custom Neural Network
      </h1>

      {/* Cover Image */}
      <ImageGlow src="/neuralnetwork.png" alt="Neural Network project cover" />

      {/* Metadata */}
      <section className="w-full max-w-4xl">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Date
            </div>
            <div className="text-gray-600 dark:text-gray-400">2025</div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Description
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Artificial neural network implemented from scratch in C++ to achieve 97% accuracy on image classification.
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {["machine-learning", "linear-algebra", "math"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 border border-gray-300 dark:border-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-28 shrink-0 text-gray-700 dark:text-gray-300 font-medium">
              Technologies
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              C++, MNIST Dataset
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="prose max-w-none text-[var(--foreground)]/80 leading-7 space-y-6">

        <h2 className="text-2xl font-bold">Introduction</h2>

        <p>
            After learning how to implement a neural network using Python libraries, I wasn't quite satisfied with the abstraction these libraries provided. I wanted to understand the underlying mechanics of neural networks, so I decided to build one from scratch in C++.
        </p>

        <p>
            The network consists of a single hidden layer and uses <code>ReLU</code> and <code>Sigmoid</code> activations for intermediate and output layers, with <code>Softmax</code> for classification. It's supported by two custom libraries which I wrote:
        </p>

        <h2 className="text-2xl font-bold">LinearAlgebra.c++</h2>

        <p>
            This library implements fundamental matrix operations such as addition, subtraction, transposition, Hadamard product, scalar operations, and matrix multiplication. The core of this project lies in efficient matrix operations - below is an example implementation of the <code>multiply</code> function from the library:
        </p>

        <Highlight
          theme={themes.nightOwl}
          code={`Matrix multiply(const Matrix& a, const Matrix& b) {
  Matrix result(a.getRows(), b.getCols());

  for (int i = 0; i < a.getRows(); i++) {
    for (int j = 0; j < b.getCols(); j++) {
      double sum = 0.0;
      for (int k = 0; k < a.getCols(); k++) {
        sum += a.at(i, k) * b.at(k, j);
      }
      result.at(i, j) = sum;
    }
  }
  return result;
}`}
          language="cpp"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <h2 className="text-2xl font-bold">NeuralNetwork.c++</h2>

        <p>
            This library implements the neural network itself, including feedforward and backpropagation algorithms, as well as weight initialization and activation functions. Here is a simplified version of the <code>feedforward</code> function, which computes the output of the network given an input:
        </p>

        <Highlight
          theme={themes.nightOwl}
          code={`Matrix NeuralNetwork::feedforward(const Matrix& input) {
    Matrix activation = input;
    for (int i = 0; i < weights.size(); i++) {
        Matrix z = add(multiply(weights[i], activation), biases[i]);
            if (i < weights.size() - 1) {
        activation = ReLU(z);
        } else {
            activation = softmax(z);
        }
    }
    return activation;
}`}
          language="cpp"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <p>
          The <code>feedforward</code> function processes the input through each layer of the network, applying the appropriate activation functions. The final output is produced using the <code>Softmax</code> function for classification tasks.
        </p>

        <p>
            The backpropagation algorithm is implemented in the <code>backpropagate</code> function, which computes gradients and updates weights and biases based on the error between predicted and actual outputs. Here is a simplified version of the <code>backpropagate</code> function:
        </p>


        <Highlight
          theme={themes.nightOwl}
          code={`void NeuralNetwork::backpropagate(const Matrix& input, const Matrix& expected) {
    std::vector<Matrix> activations = {input};
    std::vector<Matrix> zs;
    Matrix activation = input;

    for (int i = 0; i < weights.size(); i++) {
        Matrix z = add(multiply(weights[i], activation), biases[i]);
        zs.push_back(z);
        if (i < weights.size() - 1)
            activation = ReLU(z);
        else
            activation = softmax(z);
        activations.push_back(activation);
    }

    Matrix delta = subtract(activations.back(), expected);

    for (int i = weights.size() - 1; i >= 0; i--) {
        Matrix weight_gradient = multiply(delta, transpose(activations[i]));
        if (i > 0) {
            Matrix weighted_error = multiply(transpose(weights[i]), delta);
            delta = hadamardProduct(weighted_error, ReLUDerivative(zs[i - 1]));
        }
        weights[i] = subtract(weights[i], scalarMultiply(LEARNING_RATE, weight_gradient));
        biases[i] = subtract(biases[i], scalarMultiply(LEARNING_RATE, delta));
    }
}`}
          language="cpp"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <p>
            The <code>backpropagate</code> function calculates the error at the output layer and propagates it backward through the network, updating weights and biases to minimize the loss. This is done using gradient descent.
        </p>

        <h2 className="text-2xl font-bold">Training</h2>

        <Highlight
          theme={themes.nightOwl}
          code={`const int EPOCHS = 10;
for (int epoch = 0; epoch < EPOCHS; ++epoch) {
    double totalError = 0.0;
    int sampleCount = 0;
    
    std::cout << "Starting epoch " << epoch + 1 << "/" << EPOCHS << std::endl;
    for (const auto& [input, expected] : trainingData) {
        Matrix output = nn.feedforward(input);
        nn.backpropagate(input, expected);
        totalError += meanSquaredError(output, expected);
        
        sampleCount++;
        if (sampleCount % 1000 == 0) {
            std::cout << "Processed " << sampleCount << "/" << trainingData.size() << " samples in epoch " << epoch + 1 << std::endl;
        }
    }
    
    std::cout << "Epoch " << epoch + 1 << " Complete - Average Error: " << totalError / trainingData.size() << std::endl;
}`}
          language="cpp"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <p>
            The training loop iterates over the dataset for a specified number of epochs, performing feedforward and backpropagation for each sample. Progress is logged every 1000 samples to monitor training status.
        </p>

        <h2 className="text-2xl font-bold">Testing & Results</h2>

        <Highlight
          theme={themes.nightOwl}
          code={`int correctPredictions = 0;
int testCount = 0;

for (const auto& [input, expected] : testData) {
    Matrix output = nn.feedforward(input);
    
    int predLabel = 0, trueLabel = 0;
    for (int i = 0; i < 10; ++i) {
        if (output.at(i, 0) > output.at(predLabel, 0)) predLabel = i;
        if (expected.at(i, 0) > expected.at(trueLabel, 0)) trueLabel = i;
    }
    
    if (predLabel == trueLabel) correctPredictions++;
    
    testCount++;
    if (testCount % 1000 == 0) {
        std::cout << "Tested " << testCount << "/" << testData.size() << " samples" << std::endl;
    }
}`}
          language="cpp"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} rounded-xl p-4 overflow-x-auto text-sm leading-6`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="opacity-40 mr-3 select-none">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <p>
            The testing loop evaluates the trained network on a separate test dataset, counting correct predictions to calculate accuracy. After training for 10 epochs, the network achieved an accuracy of approximately 97% on the MNIST dataset. 
        </p>

        <p>
            Overall, building this neural network from scratch was a challenging but rewarding experience that deepened my understanding of machine learning concepts and algorithms. I spent a lot of time on maintaining proper documentation, so feel free to check out the full code:
        </p>

        <Showcase>
            <a href="https://github.com/farazht/neural-network" target="_blank" rel="noopener noreferrer">
                <Github className="inline-block mr-2" size={20} />
                View on GitHub
            </a>
        </Showcase>
      </section>
    </main>
  );
}

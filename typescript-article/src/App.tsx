import { useState } from 'react'
import './App.css'


function App() {


  return (
    <>
    <section id="welcome">
      <h1>WELCOME TO TYPESCRIPT</h1>
      <p>Welcome to the world of TypeScript! If you're familiar with basic vanilla JavaScript and are looking to step up your game, TypeScript is a fantastic tool that can help you write more robust and maintainable code. In this tutorial, we'll explore TypeScript from the ground up, guiding you through the basics and showing you how it can enhance your JavaScript projects.</p>
      </section>
      <section id="what-is-typescript">
      <h2>First of all! What is TypeScript?</h2>
      <p>TypeScript is a superset of JavaScript developed by Microsoft. It adds static types to JavaScript, which helps catch errors early during development and provides better tooling for code editors. Essentially, TypeScript code is JavaScript with additional features, and it gets transpiled (converted) into plain JavaScript that can run in any browser or JavaScript environment
      </p>
      </section>
    <section id="why-use-typescript">
      <h2>Why Use TypeScript?</h2>
      <p>
        <ol>
          <li>Static Typing: TypeScript introduces static types, which help catch errors before running the code.</li>
          <li>Improved Tooling: IDEs and editors provide better autocompletion, navigation, and refactoring with TypeScript.
          </li>
          <li>Enhanced Readability: TypeScript's explicit types make your code more readable and easier to understand.
          </li>
        </ol>
      </p>
      </section>

    </>
  )
}

export default App

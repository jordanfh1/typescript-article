import './App.css'
import styles from './App.css'

function App() {


  return (
    <>
    <section  id="welcome">
      <h1>WELCOME TO TYPESCRIPT</h1>
      <p>Welcome to the world of TypeScript! If you're familiar with basic vanilla JavaScript and are looking to step up your game, TypeScript is a fantastic tool that can help you write more robust and maintainable code. In this tutorial, we'll explore TypeScript from the ground up, guiding you through the basics and showing you how it can enhance your JavaScript projects.</p>
      </section>

      <section  id="what-is-typescript">
      <h2>First of all! What is TypeScript?</h2>
      <p>TypeScript is a superset of JavaScript developed by Microsoft. It adds static types to JavaScript, which helps catch errors early during development and provides better tooling for code editors. Essentially, TypeScript code is JavaScript with additional features, and it gets transpiled (converted) into plain JavaScript that can run in any browser or JavaScript environment
      </p>
      </section>

    <section className={'.section'} id="why-use-typescript">
      <h2>Why Use TypeScript?</h2>
        <ol>
          <li>Static Typing: TypeScript introduces static types, which help catch errors before running the code.</li>
          <li>Improved Tooling: IDEs and editors provide better autocompletion, navigation, and refactoring with TypeScript.
          </li>
          <li>Enhanced Readability: TypeScript's explicit types make your code more readable and easier to understand.
          </li>
        </ol>
      </section>

      <section id='setting-up-typescript'>

      <h2>Setting Up TypeScript</h2>

      <p>Before you can start writing TypeScript code, you need to set up a TypeScript environment. Here's how you can do it:</p>

      <ol>
        <li>Install TypeScript: You can install TypeScript globally using npm or yarn by running the following command in your terminal:</li>
        <li>Create a tsconfig.json File: The tsconfig.json file is used to configure the TypeScript compiler. You can create one manually or run tsc --init in your project directory to generate a default configuration file.</li>
        <li>Write TypeScript Code: Once you have TypeScript set up, you can start writing TypeScript code in .ts or .tsx files. TypeScript code can be compiled into JavaScript using the tsc command.</li>
      </ol>
      </section>
    </>
  )
}

export default App

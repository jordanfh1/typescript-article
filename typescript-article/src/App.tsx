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
          <li>Static Typing: <br></br>TypeScript introduces static types, which help catch errors before running the code.</li>
          <br></br>
          <li>Improved Tooling:<br></br> IDEs and editors provide better autocompletion, navigation, and refactoring with TypeScript.
          </li><br></br>
          <li>Enhanced Readability:<br></br> TypeScript's explicit types make your code more readable and easier to understand.
          </li>
        </ol>
      </section>

      <section id='setting-up-typescript'>

      <h2>Setting Up TypeScript</h2>

      <p>Before you can start writing TypeScript code, you need to set up a TypeScript environment. Here's how you can do it:</p>

      <ol>
        <li>Install TypeScript: <br></br>First, you'll need Node.js installed on your machine. If you haven't already, download and install Node.js from <a href="https://www.nodejs.org" target="_blank">nodejs.org</a>.
        <br></br>Then, you can install TypeScript globally using npm (Node Package Manager):
        <br></br><code>npm install -g typescript</code>
        </li>
        <br></br>
        <li>Initialize a TypeScript Project
        <br></br>Create a new directory for your project and navigate to it in your terminal: <br></br><code> mkdir my-typescript-project<br></br>cd my-typescript-project
        </code>
        <br></br><br></br>
        Initialize a new TypeScript project by creating a tsconfig.json file. This file contains configuration settings for the TypeScript compiler.
        <br></br> <br></br>
        <code>tsc --init</code><br></br> <br></br> 
        This command generates a tsconfig.json file with default settings. You can modify this file later to fit your project needs.
        <br></br><br></br>

        </li>


        <li>Create a TypeScript File<br></br> Create a new TypeScript file with a .ts extension. For example:
        <br></br><br></br>
        <code>touch index.ts</code>
        <br></br><br></br>
        Open index.ts in your favorite text editor. Let's start with a simple TypeScript example:
        <br></br><br></br>
        <code>let message: string = "Hello, TypeScript!"; console.log(message);</code>
        <br></br><br></br>
        Here, we've declared a variable message with a type string. TypeScript ensures that message will always be a string <br></br>
        </li><br></br>
        <li>Transpile TypeScript to JavaScript
          <br></br><br></br>
          To run your TypeScript code, you need to transpile it into JavaScript. Use the TypeScript compiler (tsc) to do this:
          <br></br><br></br>
          <code>tsc index.ts
          </code>
          <br></br> <br></br>
          This command generates a index.js file that contains the JavaScript version of your TypeScript code.
          <br></br><br></br>
          Run the JavaScript file with Node.js:

          <br></br><br></br>  
          <code>node index.js
          </code>
        <br></br><br></br>
        You should see the output Hello, TypeScript! in your terminal.

        </li>
      </ol>
      </section>

      <section id='basic-typescript-features'> 
      <h2>Basic TypeScript Features</h2>
      <ol>
      <li>
      Type Annotations
      <br></br><br></br>
      TypeScript allows you to specify types for variables, function parameters, and return values. This helps catch type-related errors early.
      <br></br><br></br>
       <code >let age: number = 25; <br></br>let isStudent: boolean = true; <br></br>function greet(name: string): string  {`{return 'Hello, ${name}!'; }`}</code>
        </li><br></br>
        <li>
        Interfaces <br></br><br></br>
        Interfaces define the shape of an object, helping ensure that objects adhere to a specific structure. <br></br><br></br>
        <code> interface Person {'{'}<br></br>{'name: string;'} <br></br> {'age: number;'}<br></br>{'}'}<br></br>

          const person: Person = {'{ name: "Alice", age: 30}'};
</code>

        </li>
        <br></br>
        <li>
        Classes
        <p>TypeScript enhances JavaScript classes with type annotations and access modifiers (public, private, protected).</p>
        
        <code>
        {`class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Roar!");
  }
}

const lion = new Animal("Lion");
lion.makeSound(); // Output: Roar!`}
        </code>

        </li> <br></br>
          <li>
          Generics Example: <br></br><br></br>
          <code>
            {`function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello, Generics!");
console.log(output); // Output: Hello, Generics!`}
          </code>
          </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        TypeScript is a powerful tool that brings static typing to JavaScript, making your code more reliable and maintainable. By
        following this tutorial, you've taken your first steps in learning TypeScript. As you continue to explore, you'll discover
        more advanced features and best practices that can enhance your development workflow.
      </p>

      </section>
    </>
  )
}

export default App

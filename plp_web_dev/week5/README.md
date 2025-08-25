# JavaScript

1. Statements

   Statements are the building blocks of JavaScript programs. They represent actions to be performed. For example:

   ```javascript
   let x = 5;
   let y = 10;
   let z = x + y;
   console.log(z);
   ```

   In this example, we have several statements that declare variables and perform addition.

2. Case sensitivity

   JavaScript is case-sensitive, which means that variables and function names must be used with the exact same casing throughout the code. For example:

   ```javascript
   let myVariable = 5;
   console.log(myVariable); // This will work
   console.log(MyVariable); // This will cause an error
   ```

   In this example, `myVariable` and `MyVariable` are treated as two different identifiers.

3. Code blocks

   Code blocks are used to group multiple statements together. They are defined using curly braces `{}`. For example:

   ```javascript
   if (x > 0) {
       console.log("x is positive");
       console.log("This is a code block");
   }
   ```

   In this example, the two `console.log` statements are part of the same code block that executes if the condition `x > 0` is true.

4. Comments

   Comments are used to explain the code and make it more readable. They are ignored by the JavaScript interpreter. There are two types of comments:

   - Single-line comments start with `//` and continue to the end of the line.
   - Multi-line comments are enclosed between `/*` and `*/`.

   For example:

   ```javascript
   // This is a single-line comment
   let x = 5; /* This is a multi-line comment
                that spans multiple lines */
   ```
5. Semicolons(;) - optional but recommended

   Semicolons are used to separate statements in JavaScript. While they are technically optional due to automatic semicolon insertion, it is considered good practice to use them to avoid potential issues. For example:

   ```javascript
   let x = 5;
   let y = 10;
   let z = x + y;
   console.log(z);
   ```

   In this example, each statement is terminated with a semicolon, making the code clearer and less error-prone.
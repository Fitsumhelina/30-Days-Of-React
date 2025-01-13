### **Exercises: What is React?**

#### 1. What is React?  
React is a JavaScript library for building user interfaces. It is component-based, declarative, and allows developers to create reusable UI components that update efficiently in response to data changes.

#### 2. What is a library?  
A library is a collection of pre-written code that provides specific functionality, allowing developers to use it without building everything from scratch. In the case of React, it is a library for building UIs.

#### 3. What is a single-page application?  
A Single Page Application (SPA) is a web application that dynamically updates content on a single HTML page without requiring a full page reload, providing a seamless user experience.

#### 4. What is a component?  
A component is a reusable, self-contained piece of code in React that defines how a part of the UI should look and behave. Components can be functional or class-based.

#### 5. What is the latest version of React?  
Use the following command to check the latest version:
```bash
npm view react version
```
(As of January 2025, the latest version is **18.2.0**, but it may have changed.)

#### 6. What is DOM?  
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a webpage as a tree of nodes that can be manipulated with JavaScript.

#### 7. What is React Virtual DOM?  
The Virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently update the UI by first applying changes to the Virtual DOM and then syncing only the necessary updates to the real DOM.

#### 8. What does a web application or website have?  
A website or web application typically consists of:  
- **HTML:** Structure of the page.  
- **CSS:** Styling of the page.  
- **JavaScript:** Interactivity and logic.  
- **Assets:** Images, videos, fonts, etc.  
- **Backend:** Server-side logic (optional).  

---

### **Exercises: Why React?**

#### 1. Why did you choose to use React?  
- React is declarative and component-based, making it easy to build reusable, maintainable UI components.
- It has a large ecosystem and community support.
- React’s Virtual DOM improves performance by minimizing direct DOM manipulations.

#### 2. What measures do you use to know popularity?  
- GitHub stars and forks.  
- NPM download statistics.  
- Community size and activity (forums, Stack Overflow).  
- Job postings requiring React skills.

#### 3. What is more popular, React or Vue?  
React is generally more popular than Vue, with a larger community, more widespread adoption, and greater job market demand.

---

### **Exercises: JSX**

#### 1. What is an HTML element?  
An HTML element consists of a start tag, content, and an end tag. Example:
```html
<p>Hello, World!</p>
```

#### 2. How to write a self-closing HTML element?  
Self-closing HTML elements do not need an end tag. Example:
```html
<img src="image.jpg" alt="Image description" />
```

#### 3. What is an HTML attribute? Write some of them.  
HTML attributes define additional properties of an element. Examples:
- `class`
- `id`
- `style`
- `src`
- `alt`

#### 4. What is JSX?  
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. React components often return JSX to describe their UI.

#### 5. What is Babel?  
Babel is a JavaScript compiler that transforms modern JavaScript code (e.g., ES6+, JSX) into code that browsers can understand.

#### 6. What is a transpiler?  
A transpiler converts code from one language or syntax to another. Babel transpiles JSX and ES6+ code into plain JavaScript.

---

### **Exercises: JSX Elements**

#### 1. What is a JSX element?  
A JSX element is a JavaScript object that represents a DOM element. Example:
```jsx
const element = <h1>Hello, World!</h1>;
```

#### 2. Write your name in a JSX element and store it in a `name` variable:
```jsx
const name = <h1>John Doe</h1>;
```

#### 3. Write a JSX element displaying your details:
```jsx
const user = (
  <div>
    <h1>John Doe</h1>
    <p>Country: USA</p>
    <p>Title: Developer</p>
    <p>Gender: Male</p>
    <p>Email: john.doe@example.com</p>
    <p>Phone: +1234567890</p>
  </div>
);
```

#### 4. Write a footer JSX element:
```jsx
const footer = <footer>© 2025 All Rights Reserved</footer>;
```

---

### **Exercises: Inline Style**

#### 1. Create a style object for the main JSX:
```jsx
const mainStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};
```

#### 2. Create a style object for the footer and app JSX:
```jsx
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
};

const appStyle = {
  margin: '0 auto',
  maxWidth: '800px',
};
```

#### 3. Add more styles to the JSX elements:
```jsx
const headerStyle = {
  color: '#333',
  fontSize: '2rem',
  marginBottom: '10px',
};
```

---

### **Exercises: Internal Styles**

#### Apply styles directly in JSX:
```jsx
const App = () => (
  <div style={{ margin: '20px', textAlign: 'center' }}>
    <h1 style={{ color: 'blue', fontSize: '3rem' }}>Welcome to My Website</h1>
    <p style={{ color: '#555', lineHeight: '1.5' }}>
      This is a simple React application.
    </p>
    <footer style={{ marginTop: '20px', fontSize: '0.9rem', color: '#888' }}>
      © 2025 All Rights Reserved
    </footer>
  </div>
);
```

---

### **Exercises: Inject Data to JSX**

#### Practice Injecting Data:
```jsx
const dataString = 'Hello, World!';
const dataNumber = 2025;
const dataBoolean = true;
const dataArray = ['React', 'JavaScript', 'HTML', 'CSS'];
const dataObject = { name: 'John', age: 30 };

const App = () => (
  <div>
    <p>{dataString}</p>
    <p>{dataNumber}</p>
    <p>{dataBoolean ? 'Yes' : 'No'}</p>
    <ul>
      {dataArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p>{`Name: ${dataObject.name}, Age: ${dataObject.age}`}</p>
  </div>
);
```

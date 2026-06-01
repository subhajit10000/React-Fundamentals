React is a JavaScript library created by Meta for building user interfaces, especially single-page applications. Its core idea is to let developers build UIs from small, reusable pieces called components. Each component is a function or class that returns a description of what should appear on screen. Components accept inputs called props, which are read-only values passed from a parent. Props let you configure and reuse components without changing their internal code.

React keeps UI in sync with data through state. State is data that can change over time, like user input or a counter value. When state updates, React re-renders the component and only updates the parts of the DOM that actually changed. This process uses a virtual DOM, which is a lightweight JavaScript representation of the real DOM. React compares the new virtual DOM with the previous one, figures out the minimal set of changes, and applies them. This makes updates efficient.

JSX is the syntax React uses to describe UI. It looks like HTML written inside JavaScript. JSX lets you embed expressions in curly braces and compose elements easily. Under the hood, JSX compiles to React.createElement calls, but developers rarely write those directly.

The component tree is a key concept. A React app is a hierarchy of components. Data flows down from parent to child via props. For child-to-parent communication, parents pass callback functions as props that children call when events happen.

Hooks were added to let function components manage state and side effects. useState declares state variables. useEffect runs code after render, like fetching data or setting up subscriptions. Other hooks include useContext for sharing data without prop drilling, and useRef for keeping mutable values across renders.

React embraces unidirectional data flow. State lives in specific components and flows down. This makes bugs easier to track because data changes have a clear path. For complex state that many components need, developers use context or external libraries like Redux.

Rendering in React is declarative. You describe what the UI should look like for a given state, and React handles how to update the DOM. This contrasts with imperative approaches where you manually manipulate DOM nodes.

Finally, React is just the view layer. It focuses on rendering UI and leaves routing, data fetching, and state management to you or other libraries. That flexibility is why React works for websites, mobile apps with React Native, and even desktop apps.

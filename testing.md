

1. Install react testing library
````shell
npm install --save-dev @testing-library/react
````

2. Install jest testing framework
````shell
npm install --save-dev jest
````

3. Install some bebel other required dependencies
````shell
npm install --save-dev babel-jest @babel/core @babel/preset-env
````

4. Config Babel
Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

````babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
````

5. Config parcel
To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude `@parcel/transformer-babel`.
[ReadMore](https://parceljs.org/languages/javascript/#babel)

````.parcelrc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
````

6. Config jest 

````shell
npx jest --init
````

7. Install jsdom library
If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately. phle ye jest k sath hi aata tha jsdom, which is browser-like env for testcase and testing's

````shell
npm install --save-dev jest-environment-jsdom
````

8.  Testing component first time
SyntaxError: C:\Users\LENOVO\OneDrive\Desktop\Namaste React\project-2\src\__tests__\About.test.js: Support for the experimental syntax 'jsx' isn't currently enabled (6:12):

SO, `Install the @babel/preset-react`

````shell
npm install --save-dev @babel/preset-react
````

And Then include it inside babel config file.
`["@babel/preset-react", {runtime:"automatic"}]`

**file will look like  after that config adding**
````babel.config.cjs
module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react", {runtime:"automatic"}]
  ],
  };
````

9. `Error`: toBeInTheDocument is not a function. SO  install

````shell
npm install --save-dev @testing-library/jest-dom
````
Then import it `import '@testing-library/jest-dom'`




# Mocking `fetch`
You're correct that `fetch` is not natively supported by JSDom, which is the default testing environment for Jest. When testing components that use `fetch`, you need to mock the `fetch` function to simulate its behavior within the testing environment. Here's how you can do it:

### Step 1: Mocking `fetch`

You can mock the `fetch` function using Jest's mocking capabilities. Here's an example of how you can mock `fetch` to return a fake response:

```javascript
// Mock the fetch function
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ data: 'fake response' }),
});
```

This code snippet replaces the global `fetch` function with a Jest mock function that returns a resolved Promise with a fake response when called.

### Step 2: Writing Test Case

Now, you can write your test case to verify the behavior of the component that uses `fetch`. Here's an example:

```javascript
// Import the component to be tested
import MyComponent from './MyComponent';
import { render, screen } from '@testing-library/react';

test('Component renders data fetched from API', async () => {
  // Render the component
  render(<MyComponent />);

  // Wait for the component to fetch data (assuming it's asynchronous)
  // This is important to ensure that the component has finished fetching data before making assertions
  await screen.findByText('fake response');

  // Assert that the component renders the fetched data
  expect(screen.getByText('fake response')).toBeInTheDocument();
});
```

In this test case:

- We render the `MyComponent`.
- We use `screen.findByText` to wait for the component to render the text 'fake response', which indicates that the component has fetched data.
- We assert that the fetched data is rendered correctly by checking if the text 'fake response' is present in the component.

### Step 3: Running Tests

Now, when you run your tests using Jest, the `fetch` function will be replaced with the mock function, allowing you to simulate API requests and test the behavior of your component without actually making real network requests.

By mocking `fetch`, you can control its behavior within your tests and ensure that your tests run consistently regardless of the network environment.


## Code explaination
Certainly! Let's break down the code snippet:

```javascript
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ data: 'fake response' }),
});
```

1. **`jest.fn()`**: This creates a Jest mock function. It replaces the `fetch` function with a mock version that we can control within our test environment.

2. **`.mockResolvedValue()`**: This is a Jest function that sets the return value of the mock function. In this case, we're setting it to a resolved Promise that resolves to an object with a `json` method.

3. **`json: () => Promise.resolve({ data: 'fake response' })`**: Here, we're defining the behavior of the mock `fetch` function. When the `fetch` function is called in a test, it will return an object with a `json` method. This `json` method, when called, returns a Promise that resolves to `{ data: 'fake response' }`.

So, how does this make it a mock version of `fetch`?

- We're replacing the real `fetch` function with a mock function using `jest.fn()`.
- The mock function returns an object with a `json` method, which simulates the behavior of a Response object returned by `fetch`.
- When the `json` method is called, it returns a Promise that resolves to `{ data: 'fake response' }`, simulating the behavior of calling `response.json()`.

This mock version of `fetch` allows us to control its behavior within our test environment. Instead of making a real network request, it returns a fake response with predetermined data. This allows us to test components that rely on `fetch` without actually making real network requests, making our tests faster and more reliable.

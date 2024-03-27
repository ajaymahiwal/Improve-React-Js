

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
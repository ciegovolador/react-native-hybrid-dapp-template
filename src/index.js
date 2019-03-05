//import "./shims"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { AppRegistry } from "react-native";

import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "./build/contracts/MyStringStore.json";
import { name as appName } from "./app.json";

const options = {
    contracts: [MyStringStore]
};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);
AppRegistry.registerComponent(appName, () => () => <App drizzle={drizzle} />);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

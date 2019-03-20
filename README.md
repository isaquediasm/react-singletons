<div align="center">

[![license](https://img.shields.io/badge/license-Apache_2.0-red.svg)]()
[![npm](https://img.shields.io/npm/v/react-singletons.svg)]()
[![npm](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![npm](https://img.shields.io/npm/dt/react-singletons.svg)]()
[![npm](https://img.shields.io/badge/supported-typescript-2a507e.svg)]()
[![npm](https://img.shields.io/badge/supported-babel-yellow.svg)]()

React Singletons brings the singleton pattern to React components. In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one 'single' instance. This is useful when exactly one object is needed to coordinate actions across the system. The term comes from the mathematical concept of a singleton.

**&Lt;**
[**My other Modules**](https://github.com/elraccoone) &middot;
[**Buy me a Coffee**](https://paypal.me/jeffreylanters)
**&Gt;**

Made with &hearts; by Jeffrey Lanters

</div></br></br>

# Installation

Install using npm.

```sh
$ npm install react-singletons
```

# Usage

To get started import the Singleton component from `react-singletons`. Then instead of exporting your component. Wrap it into a Singleton as shown below.

## Simple usage

```tsx
import * as React from "react";
import { Singleton } from "react-singletons";

export const Popup = new Singleton(
  class extends Component {
    public render() {
      return <div>Popup!</div>;
    }
  }
);

import { Popup } from "./Popup";

Popup.mount();
Popup.unmount();
```

## Passing props

```tsx
import * as React from "react";
import { Singleton } from "react-singletons";

export const Popup = new Singleton(
  class extends Component {
    public render() {
      return <div>Popup ${this.props.title}!</div>;
    }
  }
);

import { Popup } from "./Popup";

Popup.mount({ title: "Hello!" });
Popup.unmount();
```

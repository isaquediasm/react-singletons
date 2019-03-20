<div align="center">

[![license](https://img.shields.io/badge/license-Apache_2.0-red.svg)]()
[![npm](https://img.shields.io/npm/v/react-unity-webgl.svg)]()
[![npm](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![npm](https://img.shields.io/npm/dt/react-unity-webgl.svg)]()
[![npm](https://img.shields.io/badge/supported-typescript-2a507e.svg)]()
[![npm](https://img.shields.io/badge/supported-babel-yellow.svg)]()

When building content for the web, you might need to communicate with elements on a webpage. Or you might want to implement functionality using Web APIs which Unity does not currently expose by default. In both cases, you need to directly interface with the browser’s JavaScript engine. React Unity WebGL provides an easy solution for embedding Unity WebGL builds in your React application, with two-way communication between your React and Unity application with advanced API's.

**&Lt;**
[**My other Modules**](https://github.com/elraccoone) &middot;
[**Buy me a Coffee**](https://paypal.me/jeffreylanters)
**&Gt;**

Made with &hearts; by Jeffrey Lanters

</div></br></br>

# Installation

Install using npm. Make sure you download the release matching with your Unity version. I try to update this plugin in case of need as fast as possible. Check the [releases on GitHub](https://github.com/jeffreylanters/react-unity-webgl/releases) for the corresponding version or [view on NPM](https://www.npmjs.com/package/react-unity-webgl).

```sh
$ npm install react-singletons
```

# Usage

To get started import the Singleton component from `react-singletons`. Then instead of exporting your component. Wrap it into a Singleton as shown below.

## Typscript

```tsx
import * as React from "react";
import { Singleton } from "react-singletons";

export const Popup = new Singleton<IProps>(
  class extends Component<IProps, IState> {
    public render(): ReactNode {
      return <div>Warning! {this.props.message}</div>;
    }
  }
);
```

```tsx
import { Popup } from "./Popup";

Popup.show();
Popup.show({ message: "Oopsie!" });
Popup.close();
```

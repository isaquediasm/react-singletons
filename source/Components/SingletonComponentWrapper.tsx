import * as React from "react";
import { Component, ReactNode } from "react";
import { ISingletonComponentWrapperProps } from "../Interface/ISingletonComponentWrapperProps";
import { ISingletonComponentWrapperState } from "../Interface/ISingletonComponentWrapperState";

export class SingletonComponentWrapper extends Component<
  ISingletonComponentWrapperProps,
  ISingletonComponentWrapperState
> {
  public state: ISingletonComponentWrapperState = {
    shouldBeMounted: false,
    wrappedProps: {}
  };

  public componentDidMount(): void {
    this.props.referenceCallback(this);
  }

  public render(): ReactNode {
    return this.state.shouldBeMounted === false ? null : (
      <this.props.wrappedComponent {...this.state.wrappedProps} />
    );
  }
}

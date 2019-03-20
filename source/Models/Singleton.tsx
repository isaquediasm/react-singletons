import * as React from "react";
import * as ReactDom from "react-dom";
import { ComponentType } from "react";
import { SingletonComponentWrapper } from "../Components/SingletonComponentWrapper";
import { SingletonEventListener } from "./SingletonEventListener";

export class Singleton<IProps> {
  private scwInstance?: SingletonComponentWrapper;
  private eventListeners: SingletonEventListener[] = [];

  constructor(
    protected component: ComponentType<any>,
    ...eventListeners: SingletonEventListener[]
  ) {
    this.eventListeners = eventListeners;
    ReactDom.render(
      <SingletonComponentWrapper
        referenceCallback={(_instance: any) => (this.scwInstance = _instance)}
        wrappedComponent={this.component}
      />,
      document.body.appendChild(document.createElement("div"))
    );
  }

  public mount(props: IProps): void {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        wrappedProps: props,
        shouldBeMounted: true
      });
  }

  public updateProps(props: IProps): void {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        wrappedProps: props
      });
  }

  public unmount(): void {
    if (typeof this.scwInstance !== "undefined")
      this.scwInstance.setState({
        shouldBeMounted: false
      });
  }

  public send(eventName: string): void {
    if (typeof this.scwInstance !== "undefined")
      for (let _eventListener of this.eventListeners)
        if (_eventListener.eventName === eventName)
          _eventListener.eventCallback();
  }
}

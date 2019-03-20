import { ComponentType } from "react";
import { SingletonComponentWrapper } from "../Components/SingletonComponentWrapper";

export interface ISingletonComponentWrapperProps {
  wrappedComponent: ComponentType<any>;
  referenceCallback: (a: SingletonComponentWrapper) => void;
}

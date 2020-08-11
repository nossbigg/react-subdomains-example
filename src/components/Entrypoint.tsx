import React from "react";
import { Page404 } from "./404";

export const Entrypoint: React.FC = () => {
  const windowLocationHost: string = window.location.host;
  const renderedComponent = determinePageComponent(windowLocationHost);

  return <>{renderedComponent}</>;
};

const determinePageComponent = (
  windowLocationHost: string
): React.ReactNode => {
  return <Page404 />;
};

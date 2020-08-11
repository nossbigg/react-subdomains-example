import React from "react";

type ExampleDomain1Props = { domainKey: string };

export const ExampleDomain1: React.FC<ExampleDomain1Props> = (props) => {
  const { domainKey } = props;
  return <>ExampleDomain1: {domainKey}</>;
};

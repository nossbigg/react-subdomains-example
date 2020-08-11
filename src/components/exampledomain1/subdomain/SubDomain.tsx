import React from "react";

type SubDomainProps = { subdomainKey: string; isExternallyHosted: boolean };

export const SubDomain: React.FC<SubDomainProps> = (props) => {
  return <>SubDomain: {JSON.stringify(props)}</>;
};

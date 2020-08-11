import React from "react";
import { Page404 } from "./404";
import { ExampleDomain1 } from "./exampledomain1/ExampleDomain1";
import { SubDomain } from "./exampledomain1/subdomain/SubDomain";

const OWN_HOSTED_DOMAIN_KEY = "exampledomain1";

export const Entrypoint: React.FC = () => {
  const windowLocationHost: string = window.location.host;
  const renderedComponent = determinePageComponent(windowLocationHost);

  return <>{renderedComponent}</>;
};

const determinePageComponent = (
  windowLocationHost: string
): React.ReactNode => {
  let hostComponents = windowLocationHost.toLowerCase().split(".");
  hostComponents.pop();
  hostComponents.reverse();

  const [domainComponent] = hostComponents;

  const isValidOwnDomain = domainComponent === OWN_HOSTED_DOMAIN_KEY;
  if (isValidOwnDomain) {
    const isSubdomainUrl = hostComponents.length === 2;
    if (isSubdomainUrl) {
      const [, subdomainComponent] = hostComponents;
      return (
        <SubDomain
          subdomainKey={subdomainComponent}
          isExternallyHosted={false}
        />
      );
    }

    return <ExampleDomain1 domainKey={domainComponent} />;
  }

  const isValidOtherDomain = VALID_OTHER_DOMAINS.has(domainComponent);
  if (isValidOtherDomain) {
    return (
      <SubDomain subdomainKey={domainComponent} isExternallyHosted={true} />
    );
  }

  return <Page404 />;
};

const VALID_OTHER_DOMAINS = new Set(["anotherexampledomain"]);

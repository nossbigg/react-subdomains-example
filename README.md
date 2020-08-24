# react-subdomains-example

This repository is a barebones example of rendering different web portals (domains/subdomains) depending on the value of `window.location.host`.

## Setup

1. Run `sudo yarn setup-hosts` to add domain/subdomain entries into `/etc/hosts`
2. Run `yarn start` to start local React instance (will prompt for `sudo` to make typing URLs less of a hassle)

## Usage

The example React's behavior is as follows:

| URL                                                                   | Valid? | Component Rendered    |
| --------------------------------------------------------------------- | ------ | --------------------- |
| [exampledomain1.com](http://exampledomain1.com)                       | Y      | Domain                |
| [sub1.exampledomain1.com](http://sub1.exampledomain1.com)             | Y      | Subdomain             |
| [sub1.exampledomain1.com](http://sub1.exampledomain1.com)             | Y      | Subdomain             |
| [anotherexampledomain.com](http://anotherexampledomain.com)           | Y      | Subdomain             |
| [some.sub1.exampledomain1.com](http://some.sub1.exampledomain1.com)   | N      | Domain (via Redirect) |
| [some.anotherexampledomain.com](http://some.anotherexampledomain.com) | N      | 404                   |

## References

- [Window.location - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

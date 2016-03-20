# aurelia-materialize-css plugin

[![Build Status](https://travis-ci.org/eriklieben/aurelia-materialize-css.svg?branch=master)](https://travis-ci.org/eriklieben/aurelia-materialize-css)
[![GitHub version](https://img.shields.io/github/release/eriklieben/aurelia-materialize-css.svg)](https://img.shields.io/github/release/eriklieben/aurelia-materialize-css.svg)
[![npm version](https://img.shields.io/npm/v/aurelia-materialize-css.svg)](https://img.shields.io/npm/v/aurelia-materialize-css.svg)

Custom elements and attributes to use MaterializeCSS with Aurelia.

#Demo site
Examples and how to use can be found at the [demo site](http://aurelia-materialize-css.azurewebsites.net/)

#Dependencies
- [Materialize-CSS](https://github.com/Dogfalo/materialize)
- [JQuery](https://github.com/components/jquery)
- [SystemJS plugin-css](https://github.com/systemjs/plugin-css/)

#Installation
Github
```
jspm i github:eriklieben/aurelia-materialize-css
```
main.ts
```typescript
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("eriklieben/aurelia-materialize-css");

  aurelia.start().then(() => aurelia.setRoot());
}
```

npm:
```
jspm i npm:aurelia-materialize-css
```
main.ts
```typescript
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("aurelia-materialize-css");

  aurelia.start().then(() => aurelia.setRoot());
}
```

#Configuration
Allows you to supply ```MaterializeCssOptions``` options.

``` 
.plugin("aurelia-materialize-css", new MaterializeCssOptions());
```

##MaterializeCssOption properties:

| Property         | Type             | Default   | Description                                                       |
| ---------------- |:---------------- | --------- | ----------------------------------------------------------------- | 
| enableAttributes | boolean          | true      | enable or disable all the attributes                              |
| enableElements   | boolean          | true      | enable or disable all the elements                                |
| attributeFilter  | (val) => boolean | undefined | func, allows custom logic to enable or disable attributes         | 
| elementFilter    | (val) => boolean | undefined | func, allows custom logic to enable or disable elements           |
| configuration    | Configuration    | ......... | configuration object allows custom naming of elements/ attributes |

##Configuration properties:

| Property          | Default              | Description                                  |
| ----------------- | -------------------- | -------------------------------------------- |
| prefix            | m:                   | The prefix before each element or attribute  |
| collapsible       | m:collapsible        | Name of the collapsible element or attribute |
| collapsibleBody   | m:collapsible-body   | |
| collapsibleHeader | m:collapsible-header | |
| collapsibleItem   | m:collapsible-item   | |
| dropdown          | m:dropdown           | |
| dropdownDivider   | m:dropdown-divider   | |
| dropdownItem      | m:dropdown-item      | |


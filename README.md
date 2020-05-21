# @nimblehq/eslint-config-nimble

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) developed and maintained by [nimble](https://nimblehq.co/)

## Installation

```
$ npm install --save-dev @nimblehq/eslint-config-nimble
```

## Usage

### Standalone

Add `@nimblehq/eslint-config-nimble` to the extends section of your `.eslintrc` configuration file.

```js
{
  "extends": [
      "@nimblehq/eslint-config-nimble"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

### With a framework

Similar process above but usually it requires to add the extra rules for the JS framework:


```js
{
  "extends": [
      "@nimblehq/eslint-config-nimble",
      "plugin:react/recommended", 
      "plugin:vue/recommended"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

Obviously, this would require to define the required dependencies in the project itself. 

## License

This project is Copyright (c) 2014-2020 nimble Ltd. It is free software,
and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

![Nimble](https://assets.nimblehq.co/logo/dark/logo-dark-text-160.png)

This project is maintained and funded by Nimble.

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://github.com/nimblehq
[hire]: https://nimblehq.co/
This is a package which can check the fastest npm registry.

## install

```bash
npm i packages-version-check -S
```

## Usage

The default registry list is: 
`http://registry.npm.taobao.org`, `http://registry.npmjs.org`.

```js
import checkRegistry from 'check-npm-registry';

checkRegistry()
  .then(registry => console.log(registry));


// param: stirng or array

checkRegistry('your_registry_url')

checkRegistry([your_registry_url_array])

```

## Test

`npm run test`

<img src="https://raw.githubusercontent.com/Jirapo/check-npm-registry/master/screenshot.png" />


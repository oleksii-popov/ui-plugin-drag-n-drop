# ui-plugin-password-strength

Copyright (C) 2017-2018 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

It is POC for password strength stipes plugin. It requies additional styling, 
tests and configuration in order to be completed.
Plugin uses [https://github.com/tests-always-included/password-strength](https://github.com/tests-always-included/password-strength)
library.

## Usage

Include plugin via 
`<Pluggable type="password-strength" dataSource={data}></Pluggable>`.

You will need to include 
`import Pluggable from '@folio/stripes-components/lib/Pluggable';` into your code.

The following code shows how to pass value to plugin.
```javascript
import { formValues } from 'redux-form';

getCurrentValues(key) {
        const {stripes: {store}} = this.props;
        const state = store.getState();
        const values = getFormValues('Form')(state) || {};
        return values[key] || false;
}

<Pluggable type="password-strength" dataSource={this.getCurrentValues("InputName")}></Pluggable>
```

## Plugins reference
[The *Plugins*
section](https://github.com/folio-org/stripes-core/blob/master/doc/dev-guide.md#plugins)
of the Module Developer's Guide.


## Additional information

Other [modules](http://dev.folio.org/source-code/#client-side).

See project [UIPFU](https://issues.folio.org/browse/UIPFU)
at the [FOLIO issue tracker](http://dev.folio.org/community/guide-issues).

Other FOLIO Developer documentation is at [dev.folio.org](http://dev.folio.org/)
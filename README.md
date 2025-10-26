**Exports `.env` and NODE_ENV to an object**

```js
import config from '@FMI-MediaMaster/load-dotenv';

// Example for additional arguments
// Command: NODE_ENV=test USER=admin VERBOSE=true node src/index.js
config
    .add('USER')
    .add('VERBOSE');
```

> [!IMPORTANT]
> If you are using npm packages from GitHub, you also need to add the <code>.npmrc</code>
> file to your project so that all requests to install packages will go through GitHub Packages.
> When you route all package requests through GitHub Packages, you can use both scoped and unscoped packages from npmjs.org.
> For more information, see the [GitHub documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

**Exports `.env` and NODE_ENV to an object**

```js
import config from '@FMI-MediaMaster/load-dotenv';

// Example for additional arguments
// Command: NODE_ENV=test USER=admin VERBOSE=true node src/index.js
config
    .add('USER')
    .add('VERBOSE');
```

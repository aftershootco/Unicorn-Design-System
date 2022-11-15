<div align="center">
    <img src="https://i.imgur.com/NvJAvCy.png" alt="Unicorn Design System">
    <h1>Unicorn Design System</h1>
    <strong>Unicorn Design System is Aftershoot's inbuilt library for using different react components with custom configurations in their Desktop app.</strong>
</div>
<br>
<div align="center">
    <a href="https://github.com/aftershootco/Unicorn-Design-System/blob/develop-readme/LICENSE.md">
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License">
    </a>
    <a href="https://twitter.com/aftershootco?lang=en">
        <img src="https://img.shields.io/twitter/follow/aftershootco?label=Twitter&style=flat&logo=twitter&color=1DA1F2" alt="Aftershoot Twitter">
    </a>
</div>

## How to Build?

1. Get the lastest pull

```sh
git pull
```

2. Install all the dependencies

```sh
yarn
```

3. Now build it.

```sh
yarn build
```

## How to Publish?

To publish the library, follow the below steps -

1. Push all your changes on the `main` branch.
2. Update the version in the `package.json` file.
3. Login to the npm. This step will require you to enter your npm `username`, `password`, `email`, and `OTP` sent to the email.

```sh
npm login
```

4. Build with the following the command (Make sure there are no errors during build)

```sh
yarn build
```

5. Now run the following command to publish your package to the npm.

```sh
npm publish --access=public
```

## How to Run Storybook?

1. Take the latest pull

```sh
git pull
```

2. Run the following command -

```sh
yarn storybook
```

## Contributors

-   Akash Singh — [Github](https://github.com/frannkenstein)
-   Shaney Waris — [Github](https://github.com/ShaneyWaris)
-   Yash Johri — [Github](https://github.com/yash1200)

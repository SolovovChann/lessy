# Lessy by @SolovovChann
**Lessy** – is simple system, using LESS preprocessor for quick start in frontend web developing.

## 🚀 Requirements
1. Internet connection. Lessy uses a foreign less.js compile script from [cdn](https://cdn.jsdelivr.net/npm/less@4.1.1), so Internet connection is required to work properly;
1. Node.js any version *(the later - the better)*;
1. Less.js cli *(installation process below)*;

## 🛠️ Installation
Install last *(or recomended)* version of Node.js from [oficial site](https://nodejs.org). Then. install Less cli via Node Packet Manager. Use this command:
```bash
$ npm install -g less
```

Compile less file via command:
```bash
$ lessc less/style.less css/style.css
```

If you want to minify your css code, you need to install clean-css plugin for less, then compile minified css file via command:
```bash
$ npm install less-plugin-clean-css -g
$ lessc -clean-css less/style.less css/style.min.css
```

## 😎 Features
Lessy get few useful features (such as less mixins and variables), that can help you in your work.

### Less Variables
All variables stored in `less/_vars.less` file. use this file to manage all project variables in one place. All variables are stored as arrays (maps) for logical separation of variables and simplification of syntax. By default use next variables:
1. **Color** – array of primary colors for various site elements (such as buttons, links, etc.)
1. **Text** – array of colors for text and typography
1. **Breakpoints** – array of bootstrap breakpoints
1. **Z-index** – array of z-indexes

### Less Mixins
Mixin is an analog of a function used in less.js. It allows you to select a repeatable part of the code in a separate block, and call it as you use it. Mixins stored in `less/_mixins.less` file. All mixins has ther descriptions.

Also, Lessy has a .font() mixin, allows you load your fonts easily. For details, open `less/_fonts.less` file.

### Bootstrap grid
By default, Lessy have pre-installed bootstrap grid system. It solves the most common problems with site adaptation for different devices.
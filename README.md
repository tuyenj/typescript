# Typescript
Laravel with typescript(laravel mix)
>Typescriptのインストール

1. NPMのインストール
2. TypescriptロードとTypescriptとのインストール
  `npm install ts-loader typescript --save-dev`
3. 設定ファイル tsconfig.json 作成 
`{
      "compilerOptions": {
        "outDir": "./built/",
        "sourceMap": true,
        "strict": true,
        "noImplicitReturns": true,
        "noImplicitAny": true,
        "module": "es2015",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "moduleResolution": "node",
        "target": "es6",
        "lib": [
          "es2016",
          "dom"
        ]
      },
      "include": [
        "resources/ts/**/*" // TypeScriptのソース配置場所
      ]
  }`
  4. laravel-mixの設定変更
    `const mix = require('laravel-mix');
     mix.ts('resources/ts/app.ts', 'public/js')
     .sass('resources/sass/app.scss', 'public/css');`
5. app.tsファイルの作成
6． デプロイする
`` npm run dev ||
   npm run watch
     ``   

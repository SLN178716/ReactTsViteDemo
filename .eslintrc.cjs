module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', 'react', 'prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    // "no-console": 2, //禁止使用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-class-assign': 2, //禁止给类赋值
    // "no-debugger": 2, //禁止使用debugger
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
    'no-empty': 2, //块语句中的内容不能为空
    'no-eq-null': 2, //禁止对null使用==或!=运算符
    'no-eval': 1, //禁止使用eval
    'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
    'no-extra-parens': 2, //禁止非必要的括号
    'no-extra-semi': 2, //禁止多余的冒号
    'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3.
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-invalid-regexp': 2, //禁止无效的正则表达式
    'no-invalid-this': 2, //禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'no-lonely-if': 2, //禁止else语句内只有if语句
    'no-loop-func': 1, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    'no-multi-spaces': 1, //不能用多余的空格
    'no-proto': 2, //禁止使用__proto__属性
    'no-redeclare': 2, //禁止重复声明变量
    // 'no-shadow': 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 1, //一行结束后面不要有空格
    'no-this-before-super': 0, //在调用super()之前不能使用this或super
    'no-undef': 1, //不能有未定义的变量
    'no-undefined': 2, //不能使用undefined
    'no-var': 0, //禁用var，用let和const代替
    'no-use-before-define': 2, //未定义前不能使用
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    camelcase: 2, //强制驼峰法命名
    curly: [2, 'all'], //必须使用 if(){} 中的{}
    'default-case': 2, //switch语句最后必须有default
    eqeqeq: 2, //必须使用全等
    'dot-notation': [0, { allowKeywords: true }], //避免不必要的方括号
    'key-spacing': [0, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    'prefer-const': 0, //首选const
    'prefer-spread': 0, //首选展开运算
    'prefer-reflect': 0, //首选Reflect的方法
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, //必须使用合法的typeof的值
    'react/jsx-key': 2, // jsx数组迭代key
  },
}

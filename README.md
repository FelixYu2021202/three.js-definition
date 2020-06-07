\# en
# Three Defination
Three.js is a very good lib to help you to use WebGL, but when you write the javascript code, you might not know if some variables or functions is in THREE object or not. Because this problem, I made this extension to solve it.  
This is an extension for learning-threejs-third, you can use the defination script in this extension to help you know the variables and functions.

## How to use?
If you want to use this extension, write the code below in the first line of your javascript:  
`///<reference path="file root/three.js-defination/lib root/lib name.d.ts"/>`  
tip: "file root", "lib root", and "lib name" is the real roots and names, *not* the real thing! ***Don't say if you really write "file root/three.js-defination/lib root/lib name.d.ts"!***  
warning: Every object "__internal" is not in the real object, it's for *definings and typings ***only**.  
But when you write it in your javascript, you'll notice that it is *not* original comment, the words "reference", "path", and the string is highlighted! Do *not* worry because it's only the "VSCode 'defination' keyword", it won't have *any* effect in browsers.

So, if you more like Typescript, you can even use it!

If there's ***any*** problems with the defination, please update first, if the problem is *not* fixed, then ask it *clearly* from the github issue, like "There's member XXX in class XXX that typed string."(Please say the type unless you don't know).  

***~Enjoy!***

\# cn
# Three Defination
Three.js是一个很好的帮助使用WebGL的LIB，但是在你写JS代码时，你有可能不知道在THREE里面有没有一些变量或函数。因为有这个问题，所以我做了这个扩展库来解决它。  
这是一个learning-threejs-third的扩展库，你可以用它的定义脚本来让你知道哪些变量或函数。

## 怎么用？
如果你想用这个扩展库，写下面的一行代码在你的JS的第一行：  
`///<reference path="文件路径/three.js-defination/LIB路径/LIB名.d.ts"/>`  
警告：每一个变量“__internal”都不在真正的模块里，它**只**是为了*定义和确定类型*。  
但是当你写完那行代码时，你会发现它不是一个普通的注释，单词“reference”、“path”和文件路径都被突出了！*不要*担心，因为那只是“VSCode‘定义’关键字”，在浏览器里面它不会有*任何*效果。

现在，如果你更喜欢Typescript，那么就用就行了！

如果定义脚本有**任何**的问题，请先更新这个插件，如果问题还没解决，那就在GitHub上的Issue上把问题问的*尽量清楚*，像“类XXX有成员XXX，它的类型是string。”

***~享受吧！***

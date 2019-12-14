# 2017.6.10 sublime text 编辑器笔记

## 安装

[Sublime text3 下载](http://www.sublimetext.com/3)
傻瓜式安装过程

## linux Vi 编辑器

1. 开启 Vi 功能 安装插件 vintage
2. Vi 编辑模式
3. 输入模式（竖着光标）
    - 编辑、修改、删除内容
4. 命令模式（横着光标）
    - 快捷键操作
    - 命令操作
5. 末行模式
    - w -保存不退出
    - wq|x -保存后退出
    - q! -强制退出不保存
6. `Ctrl+Shift+T` 快速关闭标签
7. 字体

-   增大字体 `Ctrl+=`
-   减小字体 `Ctrl+Shift+=`

1. 输入模式切换
2. 修改默认打开的编辑模式
    - 修改`packages\vintage`中的`Perferences.sublime-setting`中`vintage_start_in_command_mode:true`
3. 命令-->末行模式
   `Shift+:`
4. 命令-->输入模式
    - i:在选取的目标的前面插入
    - o:在选取的目标的下一行输入
    - s:在选取的目标的位置输入（删除当前字符）
    - a:在选取的目标的后面输入
    - I：行首输入
    - O：上一行输入
    - S：删除整行
    - A：行尾输入
5. 输入-->命令模式
   `Esc`
6. 末行-->命令模式
   `Esc`\*2
7. Vi 编辑器常用命令
8. `Ctrl+LB`多行选择
9. 块移动
    - 右 选择后`Tab`
    - 左 选择后`Shift+Tab`
10. 光标移动
    - H 左
    - J 下
    - K 上
    - L 右
11. 删除
    - dd 删除本行
    - x 删除当前字符
    - r 替换
    - u / `Ctrl+z` 撤销
    - `Ctrl+y` 恢复
    - dg 从当前行删除到最后一行
    - dw 删除当前单词，中文一整段话认为是一个单词
    - d^ 从当前字符删除到本行行首
    - d\$ 从当前字符删除到本行行末
    - d+`Number`+g 从当前行删除到`Number`行
    - `Number`+dd 从本行开始删除`Number`行
12. 跳转
    - `Shift+G` 跳转到最后一行
    - G 跳转到第一行
    - `Number`+G 跳转到第`Number`行
13. 复制
    - yy 复制
    - `Number`+yy 复制`Number`行
14. 粘贴
    - p(小写) 粘贴到下一行
    - P(大写) 粘贴到上一行
15. 查找
    - 命令模式使用 `/+内容` 可以搜索内容，`N`可以切换到下一个内容
16. 选择
    - 从当前视图选择内容

## Sublime 编辑器常用插件

1. emmet HTML 快速生成代码，以及提示
1. `! Tab` 快速生成 H5 基础代码
1. `#container>li.{$$$}` `Tab` 快速生成代码
1. 常用 HTML5 插件
1. 安装 `Ctrl+Shift+p` 打开命令面板安装
1. Emmet 快速生成 H5 代码
1. JsFormat JS 代码格式化
1. SideBar Enhancements 增添左侧栏中的快捷功能
1. SublimeCodeIntel 智能提示工具
1. DocBlocker 智能注释工具
1. Better Completion Js、Jq、Bs 代码快速自动补全
1. AutoPreFixer/Sublime Prefixr CSS3 私有前缀自动补全插件 需要 Nodejs 环境
1. ColorPicker 色彩选择器
1. AutoFileName 文件路径自动补全
1. Vintage Vim 编辑器
1. ChineseLocalLizations 中文

## Sublime 常用快捷键

-   `Ctrl+Shift+上` 与上面一行互换
-   `Ctrl+Shift+下` 与下面一行呼唤
-   `Ctrl+Enter` 光标之后插入行
-   `Ctrl+Shift+Enter`光标上一行插入新行
-   `Ctrl+Shift+K` 删除整行
-   `Ctrl+Shift+D` 复制本行到下一行
-   `Ctrl+M` 将光标移动到括号的开始或者结束
-   `Ctrl+Shift+m` 选择光标所在括号的所有内容
-   `Ctrl+/` 注释(如果选择多行，则注释所选择的所有行)

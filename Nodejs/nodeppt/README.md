
# NodePPT 基础
- 网页制作PPT的工具
- 依赖于nodejs环境

## 安装
    npm install -g nodeppt

## 查看帮助
    nodeppt start

## 新建幻灯片
    nodeppt new <ppt-name> [-t username/repo]
可选项 -t 从github导入模板

## 打开幻灯片
    nodeppt serve <ppt-name>

## 编译ppt
    nodeppt build <ppt-name>

## 演讲者模式
在url的后面增加`?mode=speaker`即可打开演讲者模式

## 快捷键
    page: ←  → Space  Home  End (没有 ↑ ↓ 快捷键，虽然官方文档里面写了有，但是没反应)
    FullScreen: F
    OverView:   -/+
    Speaker Note : N
    Grid Background: Enter

## 基本语法
整个markdown的配置写在md文件的顶部，后面是PPT的页面，一个页面对应一个<slide>,注意<slide>没有结束标签   
文本中支持markdown和HTML混合排版

    title: nodeppt markdown 演示
    speaker: 三水清
    url: https://github.com/ksky521/nodeppt
    js:
        - https://www.echartsjs.com/asset/theme/shine.js
    prismTheme: solarizedlight
    plugins:
        - echarts
        - mermaid
        - katex

    <slide>
        <!-- 第一页PPT -->
    <slide>
        <!-- 第二页PPT -->


title: 演讲主题   
speaker：演讲者   
url：地址   
js：js 文件数组，放到 body 之前   
css：css 文件数组，放到头部   
prismTheme：prism 配色，取值范围 ['dark', 'coy', 'funky', 'okaidia', 'tomorrow', 'solarizedlight', 'twilight']   
plugins：目前支持 echarts，mermaid和 katex 三个插件   



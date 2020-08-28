# NoteBook

本仓库用于存放学习笔记仓库，保存学习过程中记录的笔记，这里记录新主机连接使用的方法

## Git & GitHub

`Git`是使用 C 语言编写的，世界最流行的分布式版本控制系统

## 安装

### Linux

```shell
    sudo apt-get install git
    # 或者 老版本linux系统
    sudo apt-get install git-core
```

### Windows

前往[官网下载](https://git-scm.com/downloads "从官网下载Git")

### 设置用户名

```
    <!-- 在Git的命令终端使用 -->
    git config --global user.name name
    git config --global user.email "email"
```

## 远程仓库

### 创建密钥

```
    ssh-keygen -t rsa -C "Email"
```

### 连接 GitHub

```
    #添加新的SSHkey
    GitHub>Setting>SSH>New
    # 关联本地以及远程仓库
    git remote add <远端名> <仓库地址>
    eg:
    git remote add notebook git@github.com:coderX86/notebook.git
    // 远端名使用户自定义的，可以是任何合法名字
```

### 克隆远程库

    git clone <仓库地址>

### 推送本地仓库到远程

```
    git push -u <remote> <local>
    #以上命令将<local>的代码推送到<remote>
    #-u 将本地的仓库与远程得到仓库绑定，下次在推送时默认
    #推送到一个非空仓库如果不曾克隆过会被拒绝，可以先pull过来
```

## 使用本文档

### 安装

```shell
npm i -g docsify
```

### 使用

```shell
# 初始化   只需要在首次安装时运行该命令
docsify init docs

# 启动服务
docsify serve docs
```

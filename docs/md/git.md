# Git 介绍

Git使用C语言编写，是世界上最流行的开源的分布式版本控制系统

## 安装

### Linux

```shell
    sudo apt-get install git
    <!-- 或者 老版本linux系统 -->
    sudo apt-get install git-core
```

### Windows

在`Git`官网上下载["下载 Git"](https://git-scm.com/downloads '从官网下载Git')

### MacOS

在终端中输入`git`，如过没有安装会提示安装，或者在安装`brew`之后运行`brew install git`

### 设置用户名

```shell
    <!-- 在Git的命令终端使用 -->
    git config --global user.name name
    git config --global user.email "email"
```

### 初始化仓库

```shell
    cd E://Git//
    git init
```


## 工作区、暂存区

```shell
    在之前创建的Git目录成为工作区，里面的文件修改之后仅仅是修改工作区文件，使用`git add`之后将他们存在暂存区，
    暂存区可以存放很多文件，使用`git commit`命令可以将暂区的内容提交到仓库
    每次的提交的都是暂存区的改动
```

## 基础命令


### 添加到暂存区

```shell
    <!-- 将添加文件到暂存区 每次可以一个一个添加也可以一次添加多个文件 -->
    git add fileName
    <!-- 将文件提交的仓库 -->
    git commit [-option]
        -a  所有提交修改的所有文件
        -m  添加版本信息
```

### 查看改动

```shell
    <!-- 查看有哪些文件修改了但是没有提交 -->
    git status
    <!-- 查看文件详细改动 -->
    git diff fileName
    <!-- 查看改动日志文件 -->
    git log [--pretty=oneline]
        -- pretty=oneline 用于在一行显示
        在命令输出的一串十六进制字符串是 commit id  即版本号
    git reflog
        这个命令可以查看历史命令以及其操作的版本，通过这个可以查看到已经删除的版本
```

### 版本回溯

```shell
    git reset --hard HEAD^
        这里的^表示上一个版本  ^^代表上上个版本   HEAD~100之前100个版本
        HEAD表示当前版本
    git reset --hrad commit id
        使用这个命令可以回溯到指定的版本，即使某一个版本被回溯后只要有ID都可以回溯
        commit id 没必要全部写完，只需要写前几位能分辨每一个版本就行了
```


### 撤销修改

```shell
    <!-- 以下命令可以丢弃工作区的修改 -->
        如果已经`git add`则工作区回退到`git add`的版本
        如果已经`git commit`则工作区回退到`git commit`的版本
        撤销返回到最近一次的`git add`或者`git commit`版本
        其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”
        如果文件从来没有被添加到版本库里面则是无法恢复的
    git checkout -- <file>
    <!-- 如果修改已经`git add`则可以使用一下命令撤销暂存区将修改放回工作区 -->
    git reset HEAD <file>
```

### 撤销提交

#### 撤销提交 `git revert head`

- 在当前的提交后面添加一次提交，用于抵消上一次的提交，会保存提交日志，但是不会改变内容

- 抵消多个提交需求需要在命令后面依次指定这些提交
  - `git revert [第一个提交] [第二个提交]`

- 可选命令参数
  - `--no-edit` 自动生成提交信息
  - `--no-commit` 只恢复文件变化，不产生提交

#### 丢弃提交 `git reset`

- 使用方式 `git reset SHA`
  - `git reset` 命令默认不会改变工作区的文件，只改变暂存区。`--hard` 参数可以让工作区的文件也回到以前的状态
  - `git reset` 之后被丢弃的文件可以使用`git reflog`命令找回

#### 替换提交 `git commit --amend`

- `--amend`参数用于产生一个新的提交，覆盖上一次的提交，不仅可以修改提交信息，还可以将暂存区的内容一起提交

#### 撤销文件修改 `git checkout --[fileName]`

- 如果存在暂存区的文件则回退到暂存区的版本，没有则回退到上一个commit

#### 从暂存区撤销 `git rm --cached [filename]`

- 从暂存区撤销，`git add` 命令的逆操作

#### 撤销当前分支的变化

- 当前分支上做了几次提交，突然发现放错了分支，这几个提交本应该放到另一个分支

``` bash
# 新建一个 feature 分支，指向当前最新的提交
# 注意，这时依然停留在当前分支
$ git branch feature

# 切换到这几次提交之前的状态
$ git reset --hard [当前分支此前的最后一次提交]

# 切换到 feature 分支
$ git checkout feature
```

#### 编辑分支错误

> 在一个不应该修改的分支上面做了大量修改，需要将这些修改转移到其它分支

- 解决办法

```shell
# 把暂存区的内容存储起来
git stash
# 切换分支
git checkout xxx
# 读取存储区内容
git stash pop
# ... 愉快的继续操作
```

### 删除文件

```shell
    在文件系统中将文件删除之后,使用`git status`可以查看已经被删除的文件可以使用`git checkout`恢复文件，也可以使用以下命令删除
    git rm fileName
```

## 分支管理

### 新建分支

```shell
    # 新建分支
    git branch newBranch  
    # 切换当前分支
    git checkout newBranch   
    # 以上命令等效于
    git checkout -b newBranch
```

### 查看分支

```shell
    # 在当前使用的分支前面会有一个*
    git branch
```

### 删除分支

```shell
    git branch -d branchName
    # 删除远程分支
    git push <remote> --delete branchName
    # <remote> 远程仓库名
```
### 合并分支

```shell
    # 注意 合并分支是目标分支合并到当前使用的分支
    git mrege branch
```

## 远程仓库

### 创建密钥

```shell
    ssh-keygen -t rsa -C "Email"
```

### 连接 GitHub

```shell
    #添加新的SSHkey
    GitHub>Setting>SSH>New
    # 关联本地以及远程仓库
    git remote add <远端名> <仓库地址>
    eg:
    git remote add notebook git@github.com:coderX86/notebook.git
    // 远端名使用户自定义的，可以是任何合法名字
```

### 推送本地仓库到远程

```shell
    git push -u <remote> <local>
    #以上命令将<local>的代码推送到<remote>
    #-u 将本地的仓库与远程得到仓库绑定，下次在推送时默认
    #推送到一个非空仓库如果不曾克隆过会被拒绝，可以先pull过来
```

### 克隆远程库

```shell
git clone <仓库地址>
```

## 其它命令

### 消除 LF CRLF 警告

```shell
    git config --global core.autocrlf true
```



## GitHub

### 相关概念

- Repository     仓库
- star           收藏
- fork           克隆别人的代码
- pull request   请求合并自己的仓库

### 主页

    Github主页
        左侧显示动态，右侧显示代码仓库
    仓库主页
        显示项目信息、代码、版本、收藏、关注
        ：私有仓库（收费），只有自己以及指定的人才能查看
    个人主页
        个人信息、头像、项目
    issues
        存在问题的代码，这个任何人都可以提交

### 个人站点

    访问：
        https://<userName>.github.io
    创建个人站点：
        新建仓库(名字:<userName>.github.io)
        上传文件
        仓库设置   打开个人站点

## git 学习网站推荐

[点击这里跳转](https://learngitbranching.js.org/)

# mysql安装

## centos
```shell
sudo yum localinstall https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm
sudo yum -y install mysql-community-server
sudo systemctl start mysqld.service
sudo systemctl enable mysqld.service
```


**Set MySQL root password:**
```shell
grep 'A temporary password' /var/log/mysqld.log |tail -1
# 在文本中过滤出初始化的时候生成的默认初始密码
```

**修改root密码**
```shell
mysql_secure_installation
# 登录并且修改默认密码
mysql -uroot -p

FLUSH PRIVILEGES;
QUIT
```

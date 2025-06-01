## 常用扩展

> 先切换到root用户

```bash
# 文件夹树形结构
yum install -y tree
# 使用
tree -L 2 # 显示两个层级

# 扩展源
yum install -y epel-release
yum install -y python-pip
pip install runlike
# 使用
runlike -p <NAMES|CONTAINER ID> # 查看docker的启动命令

# 上传下载的插件
yum -y install lrzsz
```

## 常用命令

```bash
# 查看端口是否被占用
netstat -ano | grep 3306
# 查看磁盘容量
df -lh

# 启动一个服务
systemctl start docker
# 关闭一个服务
systemctl stop docker
# 重启一个服务
systemctl restart docker
# 显示一个服务的状态
systemctl status firewalld
# 在开机时启用一个服务
systemctl enable docker
# 在开机时禁用一个服务
systemctl disable firewalld
# 查看服务是否开机启动
systemctl is-enabled docker
# 查看已启动的服务列表
systemctl list-unit-files | grep enabled
# 查看启动失败的服务列表
systemctl --failed

# centos 有两种防火墙firewalld和iptables防火墙
# centos7 使用的是firewalld防火墙
# 永久开放某个端口
firewall-cmd --zone=public --add-port=8848/tcp --permanent
# 永久开放服务
firewall-cmd --add-service=ftp --permanent
# 删除
firewall-cmd --zone=public --remove-port=8848/tcp --permanent
# 需要重新刷新(以上都需要重新加载)
firewall-cmd --reload
# 查看某个端口是否开放
firewall-cmd --zone=public --query-port=8848/tcp
# 查看开放的端口列表
firewall-cmd --list-port

# 查看centos版本
cat /etc/redhat-release
# 显示操作系统的发行版号
uname -r
# 显示系统名、节点名称、操作系统的发行版号、内核版本等等
uname -a
```


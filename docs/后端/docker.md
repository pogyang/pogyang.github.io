## 卸载

```bash
yum remove docker \
           docker-client \
           docker-client-latest \
           docker-common \
           docker-latest \
           docker-latest-logrotate \
           docker-logrotate \
           docker-engine
```

## 安装

```bash
# 安装一些依赖
yum install -y gcc gcc-c++
yum install -y yum-utils device-mapper-persistent-data lvm2
# 设置stable镜像仓库，这是官网给的库
# yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 推荐使用国内镜像库
yum-config-manager --add-repo https://mirros.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 更新yum软件包索引
yum makecache fast
# 安装
yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
# 启动服务
systemctl start docker
# 查看进程
ps -ef | grep docker
# 查看版本
docker version
# 开机自启动
systemctl enable docker
# 检查d是否开机自启动
systemctl is-enabled docker
```

[配置镜像加速器](https://cr.console.aliyun.com/cn-shanghai/instances/mirrors)

## 启动

```bash
# 查看状态
systemctl status docker
# 启动
systemctl start docker
# 停止
systemctl stop docker
# 重启
systemctl restart docker
# 查看信息
docker info
# 帮助信息
docker [COMMAND] --help
```

## 镜像和容器

```bash
# 查看本地主机的镜像 -q 只显示镜像ID -a 列出所有镜像包含历史镜像
docker images
# 查找镜像 --limit 只列出N个镜像，默认25个
docker search <REPOSITORY>
# 下载镜像 没有TAG默认为latest
git pull <REPOSITORY> | <REPOSITORY>[:TAG]
# 删除镜像 -f 强制删除
docker rmi <IMAGE ID> | <REPOSITORY>[:TAG]
# 删除全部镜像
docker rmi -f $(docker images -qa)
# 查看镜像/容器/数据卷/缓存所占空间
docker system df
# 查看所有正在运行的容器 -a 列出所有正在运行的容器和未启动的 -l 显示最近创建的容器 -n 显示最近n个创建的容器 -q静默模式，只显示容器编号 --no-trunc 查看未截断的信息
docker ps # 旧的写法
docker container ls # 新的写法
# 启动已停止运行的容器
docker start <CONTAINER ID> | <NAMES>
# 重启容器
docker restart <CONTAINER ID> | <NAMES>
# 停止容器
docker stop <CONTAINER ID> | <NAMES>
# 强制停止容器
docker kill <CONTAINER ID> | <NAMES>
# 删除容器 -f 强制删除
docker rm <CONTAINER ID> | <NAMES>
# 删除全部容器
docker rm -f $(docker ps -qa)
docker ps -aq | xargs docker rm
# 查看容器日志
docker logs <CONTAINER ID> | <NAMES>
# 查看容器内部运行的进程
docker top <CONTAINER ID> | <NAMES>
# 查看容器内部细节
docker inspect <CONTAINER ID> | <NAMES>
# 进入正在运行的容器并以命令行交互，docker exec和docker attach的区别在于exec是在容器中打开新的终端，并且可以启动新的进程，用exit退出不会导致容器停止，而attach是直接进入容器启动命令的终端，不会启动的新的进程，用exit退出会导致容器停止
docker exec -it <CONTAINER ID> | <NAMES> /bin/bash # 推荐使用
docker attach <CONTAINER ID> | <NAMES>
# 把容器内的文件拷贝到主机上
docker cp 容器ID:容器内的路径 主机路径
# 导出
docker export 容器ID > 文件名.tar
# 导入
cat 文件名.tar | docekr import -镜像用户/镜像名:镜像版本号
# commit镜像
docker commit -m="提交信息" -a="作者" 容器ID 镜像用户/镜像名:镜像版本号
```

- docker run的参数解释
  - -p port指定端口映射，宿主机port:容器port
  - -P 随机端口映射
  - -v volumn绑定一个卷，宿主机路径:容器路径[:rw]，默认就是rw即容器和宿主机之间数据共享，ro表示只读即容器内部被限制只能读不能写，但宿主机可写并且可以同步给容器
  - -d detach后台运行容器，并返回容器ID
  - -e env环境变量
  - -it interactive tty打开一个可输入命令的终端，通常与/bin/bash连用表示使用新shell或者与bash连用表示在当前shell中进入交互模式
  - --name 指定容器名称
  - --rm 容器退时自动清理容器内部的文件系统
  - --restart=always 总是自动启动
  - --privileged=true 扩大容器的权限
  - --volumes-from 数据卷继承

> run进容器exit退出时容器停止，run进容器`ctrl+p+q`退出时容器不停止

## 其他

- 虚悬镜像(dangling image)
  - 镜像名和TAG都为`<none>`的镜像
> 罗列一些使用时出现的问题

## 无法上传文件至根目录

```
# 编辑sshd的配置文件
vim /etc/ssh/sshd_config

# 找到这一行
Subsystem       sftp   /usr/libexec/openssh/sftp-server

# 修改为
Subsystem       sftp   internal-sftp

# 重启sshd服务
systemctl restart sshd
```
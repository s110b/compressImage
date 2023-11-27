# 使用 Node.js 的官方镜像作为基础镜像
FROM node:16

# 安装 @squoosh/cli
RUN npm install -g @squoosh/cli

# 设置工作目录
WORKDIR /app

# 将当前目录的内容复制到工作目录中
COPY . /app

# 设置一个默认命令（可以被覆盖）
CMD ["squoosh-cli"]

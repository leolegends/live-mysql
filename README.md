# live-mysql

importante configurar seu mysql corretamente.

vim /etc/mysql/mysql.conf.d/mysqld.cnf

server-id = 1
sync_binlog     = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_format = row

# NPM

#### npm install mysql-live-select --save
#### npm install socket.io --save

depois instalar o PM2 para gerenciar seus nodes run.

#### npm install pm2 -g 






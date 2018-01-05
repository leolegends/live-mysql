# live-mysql

importante configurar seu mysql corretamente.

vim /etc/mysql/mysql.conf.d/mysqld.cnf

server-id = 1
sync_binlog     = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_format = row

GRANT REPLICATION SLAVE, REPLICATION CLIENT, SELECT ON *.* TO 'user'@'localhost'


const cproc = require('child_process');

const status = cproc.execSync('/usr/bin/sudo -u postgres /usr/lib/postgresql/9.6/bin/pg_ctl -D /database status');
console.log(status.toString())

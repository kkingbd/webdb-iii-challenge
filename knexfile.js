module.exports = {
  development : {
      client : 'sqlite3',
      useNullAsDefault : true,
      connection : {
        filename: './data/md.sqlite3'
      },
      migrations:{
        directory: './migrations'
      },
    }
};
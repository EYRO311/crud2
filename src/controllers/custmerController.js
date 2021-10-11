const controller ={};
 controller.list = (req, res) => {
    req.getConnection((err,conn,conn2) =>{
        conn.query('SELECT * FROM users', (err, users)=> {
            if (err){
                res.json(err);
            }
            console.log(users);
            res.render('customers', {
             data:users   
            });
        });
        conn2.query('SELECT * FROM music', (err, music)=> {
            if (err){
                res.json(err);
            }
            console.log(music);
            res.render('customers', {
             data2:music   
            });
        });        
     });
 };
controller.save = (req, res)=>{
    const data = req.body;
  console.log(data)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO users set ?', data, (err, users) => {
      console.log(users);
      res.redirect('/');
    });
  });
};
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  };

  controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM users WHERE id = ?", [id], (err, rows) => {
        res.render('customers_edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE users set ? where id = ?', [newCustomer, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };

//music


controller.savem = (req, res)=>{
   const data = req.body;
 console.log(data)
 req.getConnection((err, connection) => {
   const query = connection.query('INSERT INTO music set ?', data, (err, music) => {
     console.log(music);
     res.redirect('/');
   });
 });
};
controller.deletem = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM music WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  };

  controller.editm = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM music WHERE id = ?", [id], (err, rows) => {
        res.render('customers_edit', {
          data2: rows[0]
        })
      });
    });
  };
  
  controller.updatem = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE music set ? where id = ?', [newCustomer, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };

 module.exports = controller;
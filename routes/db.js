var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db_name = 'hos';
var db = monk('localhost:27017/' + db_name);
var collection = db.get('tmp_collection');

router.post('/',function(req, res) {
  console.log(req.body);
  collection.insert({"projectName":req.body.projectName,"Age":req.body.Age,"Hand":req.body.Hand,"Organ":req.body.Organ,
                        "Species":req.body.species,"Date":req.body.mdate,"unknow":req.body.unknow,"Des":req.body.des
  });
  console.log("DB finished");
  res.send('Upload finish!!');
});

module.exports = router;

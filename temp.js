db.myCollection.update({}, {$set: {"isOpen": false}}, false, true);
db.myCollection.update({}, {$unset: {"isOpen":""}},false,true);
const express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path');

app.use('/', express.static(path.join(__dirname, '../dist/')));

const FILE_PATH = 'server/contacts.json';

router.route('/api/contacts')
	.get((req, res) => {
        var fs = require('fs');
        fs.readFile(FILE_PATH, 'utf8', function (err, data) {
            if(err)
                throw err;
    		res.json(JSON.parse(data));
        });
	});

app.use(router);
app.listen(3000, () => console.log('App listening on port 3000!'));

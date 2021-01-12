const fs = require('fs');
const router = require('express').Router();
const normalizePath = require('../shared/normalizepath'); 

router.get('/*', (req, res) => {
    //Normalize path
    let dirPath = normalizePath(req.url); 
    //Initialize content result
    let result = {
        succes: 'true',
        code: '200',
        error: {},
        data: {
            directories: [],
            files: []
        }
    };
    //Options for readdir
    const options = {
        withFileTypes: true
    };
    //Populate result with dirs and files
    fs.readdir(dirPath.absolutePath, options, (err, content) =>{
        if (err){
            result.succes = 'false';
            result.code = 404;
            result.error = err;
            res.json(result);
            return
        }
        for (dirent of content){
            dirent.isDirectory() ? result.data.directories.push(dirent.name) : result.data.files.push(dirent.name)
        }
        res.json(result);
    });

});

module.exports = router;
const express = require('express')

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const db = require('../config/bd.config')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('../config/s3.config')

const router = express()
router.use(express.json())

router.get('/', (req, res) => {
    db.query('SELECT _fileType, _fileKey, _fileName, _fileWeight, _idProyect, (SELECT _userName FROM users WHERE _idUser = File_Uploads._idUser) AS userName, _timestamp FROM File_Uploads', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});


    router.get('/download/:id', (req, res) => {
        const id = req.params.id
        db.query(`Select _fileKey from File_Uploads where _idUpload = ${id}`,
        (err, results) =>{
            if(err) return res.send(err)
             const key = results[0]._fileKey
             const readStream = getFileStream(key)
             readStream.pipe(res)
        })


    })

router.post('/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        const _fileType = req.body._fileType
        const _fileName = req.body._fileName
        const _fileWeight = req.body._fileWeight
        const _idProyect =req.body._idProyect
        const _idUser = req.body._idUser

    // apply filter
    // resize 

    const result = await uploadFile(file)
    await unlinkFile(file.path)
    console.log("fileUploaded")
    
    db.query(`INSERT INTO File_Uploads(_fileType, _fileKey,_fileName, _fileWeight, _idProyect,_idUser, _timestamp) Values ('${_fileType}','${result.Key}' ,'${_fileName}','${_fileWeight}',${_idProyect},${_idUser},(select Now()))`,
    (err, results) => {
        if (err) 
        {
            console.log(err)
            return res.send(err)
        }
            
        console.log("query successfull")
        return res.send(results)


        })


})

module.exports = router
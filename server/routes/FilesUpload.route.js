const express = require('express')

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const db = require('../config/bd.config')
const AWS = require('aws-sdk');
const S3 = require('aws-sdk/clients/s3')

const accessKeyId = "AKIA4GUEUVFEFPSGSJMX"
const secretAccessKey = "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"

const s3 = new S3({
  accessKeyId,
  secretAccessKey
})


const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile} = require('../config/s3.config')

const router = express()
router.use(express.json())

router.get('/', (req, res) => {
    db.query('SELECT _idUpload, _fileType, _fileKey, _fileName, _fileWeight, _idProyect, (SELECT _userName FROM users WHERE _idUser = File_Uploads._idUser) AS userName, _timestamp FROM File_Uploads ORDER BY _timestamp DESC LIMIT 3', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
router.get('/getAll', (req, res) => {
    db.query('SELECT  * FROM File_Uploads ORDER BY _timestamp DESC ', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});


    // router.get('/download/:id', (req, res) => {
    //     const id = req.params.id
    //     db.query(`Select _fileKey from File_Uploads where _idUpload = ${id}`,
    //     (err, results) =>{
    //         if(err) return res.send(err)
    //          const key = results[0]._fileKey
    //          const readStream = getFileStream(key)
    //          readStream.pipe(res)
    //     })


    // })

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
AWS.config.update({
    accessKeyId: 'AKIA4GUEUVFEFPSGSJMX',
    secretAccessKey: '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',
    region: "us-east-1"
  });

    function uploadImage(img) {
        const imgStream = fs.createReadStream(file.path)
      
        const uploadParams = {
          Bucket: bucketName,
          Body: fileStream,
          Key: img.filename
        }
      
        return s3.upload(uploadParams).promise()
      }

router.get('/download/:fileData', (req, res) => {
    const  fileData  = req.params.fileData;
    const splitted = fileData.split('@');
    const fileKey = splitted[0];
    const fileName = splitted[1];
    const params = {
        Bucket: 'tempus-dev-bucket',
        Key: fileKey
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error al descargar el archivo' });
        }

        res.attachment(fileName);
        res.set('Content-Type', data.ContentType);
        res.set('Content-Disposition', `attachment; filename=${fileName}`);
        console.log("Descargado")
        res.send(data.Body);
    });
});

module.exports = router
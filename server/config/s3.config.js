const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')

const bucketName = "tempus-dev-bucket"
const accessKeyId = "AKIA4GUEUVFEFPSGSJMX"
const secretAccessKey = "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"

const s3 = new S3({
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile


// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream
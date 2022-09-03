import SparkMD5 from 'spark-md5'
import { ElMessage, ElLoading } from 'element-plus'
import { upLoadChunkKey, upLoadChunk } from '@/api/common/index.js'

export default function uploadByPieces(config = {}) {
  const {
    // chunkSize = 20 * 1024 * 1024 // 每块文件大小
    chunkSize = 1 * 1024 * 1024 // 每块文件大小
  } = config

  async function httpRequest(file, onProgress, onSuccess, onError) {
    splitUpload(file, onProgress, onSuccess)
      .then((res) => {})
      .catch((err) => {
        onError(err)
      })
  }

  // 大文件分块上传
  async function splitUpload(file, onProgress, onSuccess) {
    let successChunk = 0, // 上传当前次数
      successFlag = true, // 分片的开关
      uploadKey = '', // 分片上传的key
      uploadId = 0 // 分片上传的 id

    const chunks = Math.ceil(file.size / chunkSize), // 分了几次
      fileChunks = await splitFile(file, chunks == 1 ? file.size : chunkSize, chunks),
      loading = ElLoading.service({
        lock: true,
        text: '计算MD5中……',
        background: 'rgba(0, 0, 0, 0.1)'
      }),
      md5 = await calculate(file) // 加密后的文件
    loading.close()

    try {
      const res = await upLoadChunkKey({
        fileName: file.name,
        identifier: md5
      })
      if (res.code === 200) {
        uploadKey = res.data.key
        uploadId = res.data.uploadId
      } else {
        ElMessage.error(`获取分片key失败！`)
      }
    } catch (error) {
      console.log(error)
    }

    while (successFlag) {
      // chunkNumber	当前为第几分片	query	true
      // chunkSize	每个分块的大小	query	true
      // currentChunkSize	当前分片大小	query	true
      // file	分块文件传输对象	query	true
      // fileName	文件全名称 例如：123.png	query	true
      // totalChunks	分片总数	query	true
      // key	分片文件key	query	false
      // uploadId	分片文件i

      const params = {
          fileName: file.name,
          chunkNumber: successChunk + 1,
          key: uploadKey,
          uploadId: uploadId,
          chunkSize: chunkSize,
          totalChunks: chunks,
          file: fileChunks[successChunk],
          currentChunkSize: fileChunks[successChunk].size
        },
        formData = new FormData()
      for (let p in params) {
        formData.append(p, params[p])
      }

      try {
        const res = await upLoadChunk(formData)
        if (res.code === 200) {
          successChunk++
          if (res.data?.uploadType === 1) {
            successFlag = false
            onSuccess(res)
          } else {
            if (res?.data?.uploaded.length) {
              onProgress(res.data.uploaded[res.data.uploaded.length - 1], chunks)
            }
          }
        } else {
          ElMessage.error(`分片文件上传失败!`)
          successFlag = false
        }
      } catch (error) {
        successFlag = false
      }
    }
  }

  // 文件分块,利用Array.prototype.slice方法
  function splitFile(file, chunkSize, chunks) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const fileChunk = []
          for (let chunk = 0; chunks > 0; chunks--) {
            fileChunk.push(file.slice(chunk, chunk + chunkSize))
            chunk += chunkSize
          }
          resolve(fileChunk)
        }, 0)
      } catch (e) {
        console.error(e)
        reject(new Error('文件切块发生错误'))
      }
    })
  }

  async function calculate(file) {
    return new Promise(function (resolve, reject) {
      var fileReader = new FileReader(),
        blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
        chunkSize = 2097152,
        // read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5()

      fileReader.onload = function (e) {
        spark.appendBinary(e.target.result) // append binary string
        currentChunk++

        if (currentChunk < chunks) {
          loadNext()
        } else {
          resolve(spark.end())
        }
      }

      function loadNext() {
        var start = currentChunk * chunkSize,
          end = start + chunkSize >= file.size ? file.size : start + chunkSize

        fileReader.readAsBinaryString(blobSlice.call(file, start, end))
      }

      loadNext()
    })
  }

  return {
    httpRequest
  }
}

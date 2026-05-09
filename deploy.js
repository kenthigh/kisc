import 'dotenv/config'
import ftp from 'basic-ftp'
import fs from 'node:fs'
import path from 'node:path'

async function ensureLocalDir(dir) {
  if (!fs.existsSync(dir)) {
    throw new Error(`Local directory not found: ${dir}`)
  }
}

async function upload() {
  const client = new ftp.Client()
  client.ftp.verbose = true

  const localDir = path.resolve(process.env.LOCAL_DIR || './dist')
  const remoteDir = process.env.REMOTE_DIR || '/public_html'

  try {
    await ensureLocalDir(localDir)
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: process.env.FTP_SECURE === 'true',
    })

    console.log(`Connected. Uploading ${localDir} -> ${remoteDir}`)
    await client.ensureDir(remoteDir)
    await client.clearWorkingDir()
    await client.uploadFromDir(localDir)
    console.log('Upload completed.')
  } catch (error) {
    console.error('Upload failed:', error)
    process.exitCode = 1
  } finally {
    client.close()
  }
}

upload()

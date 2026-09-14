import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(__dirname, 'ezgif-14a029525b61fd7d-png-split')
const destDir = path.resolve(__dirname, 'public/frames')

try {
  if (fs.existsSync(srcDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }

    const files = fs.readdirSync(srcDir)

    for (const file of files) {
      if (file.endsWith('.png')) {
        const srcFile = path.join(srcDir, file)
        const destFile = path.join(destDir, file)

        if (!fs.existsSync(destFile)) {
          fs.copyFileSync(srcFile, destFile)
        }
      }
    }
  }
} catch (e) {
  console.error('Error copying frames:', e)
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  base: '/New_portfolio/',
})

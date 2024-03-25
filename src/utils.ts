import crypto from 'crypto'

export function randomDeviceId() {
  return crypto.randomBytes(16).toString('hex')
}

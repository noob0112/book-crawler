import crypto from 'crypto'

export function getRandomDeviceId(): string {
  return crypto.randomBytes(16).toString('hex')
}

export function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

export function sleep(minisecond: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, minisecond)
  })
}

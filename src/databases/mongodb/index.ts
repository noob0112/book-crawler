import { connect } from 'mongoose'
import config from '#config.ts'

export async function connectMongodb() {
  try {
    await connect(config.mongoUri)

    console.log('connect mongodb successfully')
  } catch (e) {
    console.log('connect mongodb faillue')
  }
}

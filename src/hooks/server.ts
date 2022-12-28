import { Message } from '../types/message'
import { mockUsers } from '../assets/mockUsers'
import express, { Express } from 'express'

const app = express()
const endpoint = '../assets/'
const port = 5371

//getMessages
app.get('/getMessages', (req, res) => {
  res.send(`${endpoint}/mockMessages`)
})
console.log(`${endpoint}/mockMessages`)

//getUsers
app.get('/getUsers', (req, res) => {
  res.send(`${endpoint}/mockUsers`)
})

// getUserDetails

import { Message } from '../types/message'
import { mockUsers } from '../assets/mockUsers'
import { mockMessages } from '../assets/mockMessages'
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
app.get('/getUserDetails', (req, res) => {
  //(`${endpoint}/users/${userId}`)
  res.send(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
})

//addNewMessage
app.post('/addNewMessage', (req, res) => {
  res.send(`${endpoint}/massages`)
})

// changeMessageLikes
app.post('/changeMessageLikes', (req, res) => {
  res.send(`${endpoint}/massages/${messageId}/likes`)
})

import express from 'express'
import { mockMessages } from '../assets/mockMessages'
import { mockUserDetails } from '../assets/mockUserDetails'
import { Message } from '../types/message'
import { User } from '../types/user'

const app = express()
const port = 5371

const messages: Message[] = mockMessages
const users: User[] = mockUserDetails

app.get('/messages', (req, res) => {
  const messagesWithNames = messages.map((message) => {
    const author = users.find((user) => user.id === message.authorId)
    const authorName = author && author.name
    return { ...message, authorName }
  })
  res.json(messagesWithNames)
})

app.get('/users', (req, res) => {
  const userList = users.map(({ id, name }) => ({ id, name }))
  res.json(userList)
})

app.get('/users/:id', (req, res) => {
  const userId = Number(req.params.id)
  const user = users.find((user) => user.id === userId)
  if (user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
})

app.post('/messages', (req, res) => {
  const message: Message = req.body
  messages.push(message)
  res.sendStatus(201)
})

app.patch('/messages/:id/likes', (req, res) => {
  const messageId = Number(req.params.id)
  const { userId, like } = req.body
  const message = messages.find((message) => message.id === messageId)
  if (message) {
    if (like) {
      message.likes.push(userId)
    } else {
      message.likes = message.likes.filter((id) => id !== userId)
    }
    res.sendStatus(204)
  } else {
    res.sendStatus(404)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

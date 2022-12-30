import { Message } from '../types/message'
import { mockUsers } from '../assets/mockUsers' // todo: remove this line after server implementation
import { mockMessages } from '../assets/mockMessages'
import {} from './server'
import { User } from '../types/user'

//const endpoint = '../assets/' // todo: add endpoint (server) address (starting with http://)
const endpoint = 'http://localhost:5371'

/**
 * GET Request to get the list of messages
 **/
export async function getMessages(): Promise<Message[]> {
  // todo: replace this with fetch to get the messages from the server
  //const { mockMessages } = await import(`${endpoint}/mockMessages`)
  const res = await fetch(`${endpoint}/getMessages`)
  return res.json()

  // todo: this should be implemented in the server. Chat Messages should already have the authors' names.
  // todo: remove this mapping when getting the data from the server
  const mockMessagesWithNames = mockMessages.map((message: Message) => {
    const author = mockUsers.find((user) => user.id === message.authorId)
    const authorName = author && author.name
    return { ...message, authorName }
  })

  return mockMessagesWithNames
}

/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers(): Promise<User[]> {
  // todo: replace this with fetch to get the user list from the server
  // const { mockUsers } = await import(`${endpoint}/mockUsers`)
  // return mockUsers
  const res = await fetch(`${endpoint}/getUsers`)
  return res.json()
}

/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  const res = await fetch(`getUserDetails`)
  return (await res.json())[0]
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message): Promise<void> {
  // todo: implement sending a new message to the server
  await fetch(`${endpoint}/addNewMessage`, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(
  messageId: number,
  userId: number,
  like: boolean,
): Promise<void> {
  // todo: implement sending a rquest to change the like of a message by the user
  await fetch(`${endpoint}/changeMessageLikes`, {
    method: 'POST',
    body: JSON.stringify({ userId, like }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

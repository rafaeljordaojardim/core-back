import { Router } from 'express'
import {
  makeCreateUser,
  makeGetUserByEmail,
  makeGetUsers,
  makeUpdateUser,
  makeUpdateUserPassword
} from '../factories/user'
import { createUserValidator, updateUserValidator, updateUserPasswordValidator } from '../presentation/validators'

const router = Router()

router.post('/', createUserValidator, async (req, res) => {
  const response = await makeCreateUser().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/:email', async (req, res) => {
  const response = await makeGetUserByEmail().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/', async (req, res) => {
  const response = await makeGetUsers().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.patch('/:id', updateUserValidator, async (req, res) => {
  const response = await makeUpdateUser().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.patch('/:id/password', updateUserPasswordValidator, async (req, res) => {
  const response = await makeUpdateUserPassword().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router

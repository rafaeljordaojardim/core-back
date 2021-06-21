import { Router } from 'express'
import { makeCreateUser, makeGetUserByEmail, makeGetUsers } from '../factories/user'
import { requestValidator } from '../presentation/validators/createUser'

const router = Router()

router.post('/', requestValidator, async (req, res, next) => {
  const response = await makeCreateUser().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/:email', async (req, res, next) => {
  const response = await makeGetUserByEmail().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/', async (req, res, next) => {
  const response = await makeGetUsers().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router

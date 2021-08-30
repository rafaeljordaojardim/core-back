import { Router } from 'express'
import { makeCreateProfile, makeListProfiles, makeUpdateProfile } from '../factories/profile'
import { createProfileValidator, updateProfileValidator } from '../presentation/validators'

const router = Router()

router.post('/', createProfileValidator, async (req, res, next) => {
  const response = await makeCreateProfile().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.patch('/:id', updateProfileValidator, async (req, res, next) => {
  const response = await makeUpdateProfile().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/', async (req, res, next) => {
  const response = await makeListProfiles().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router

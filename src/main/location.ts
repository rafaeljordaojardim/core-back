import { Router } from 'express'
import { makeCreateLocation, makeGetLocations, makeUpdateLocation } from '../factories/location'
import { createLocationValidator, updateLocationValidator } from '../presentation/validators/'
import { authorizer } from '../utils/middleware/authorizer'

const router = Router()

router.post('/', authorizer, createLocationValidator, async (req, res, next) => {
  const response = await makeCreateLocation().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.patch('/:id', authorizer, updateLocationValidator, async (req, res, next) => {
  const response = await makeUpdateLocation().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/', authorizer, async (req, res, next) => {
  const response = await makeGetLocations().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/:id', authorizer, updateLocationValidator, async (req, res, next) => {
  const response = await makeGetLocations().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router

import { Router } from 'express'
import UserRouter from './user'
import ProfileRouter from './profile'
import LocationRouter from './location'
import SectorRouter from './sector'

const router = Router()

router.use('/users', UserRouter)
router.use('/profiles', ProfileRouter)
router.use('/locations', LocationRouter)
router.use('/sectors', SectorRouter)

export default router

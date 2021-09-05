import { Router } from 'express'
import UserRouter from './user'
import ProfileRouter from './profile'
import LocationRouter from './location'
import SectorRouter from './sector'
import SignInRouter from './signin'

const router = Router()

router.use('/users', UserRouter)
router.use('/profiles', ProfileRouter)
router.use('/locations', LocationRouter)
router.use('/sectors', SectorRouter)
router.use('/signin', SignInRouter)

export default router

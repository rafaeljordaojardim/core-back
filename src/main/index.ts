import { Router } from 'express'
import UserRouter from './user'
import ProfileRouter from './profile'

const router = Router()

router.use('/users', UserRouter)
router.use('/profiles', ProfileRouter)

export default router

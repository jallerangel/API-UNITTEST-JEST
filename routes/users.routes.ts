import { Router } from 'express'
import { creatUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.controller'
const router: Router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', creatUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
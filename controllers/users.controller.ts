import { Response, Request } from 'express'
import User from '../models/user'

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: 'Get Users'
  })
}

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    msg: 'getUser',
    id
  })
}
export const createUser = async (req: Request, res: Response) => {
  const { fullname, email, password } = req.body
  if (!fullname || !email || !password) res.status(400).json({ message: 'Incomplete Fields' })
  try {
    const userCreated = await User.create({ fullname, email, password })
    res.status(201).json({
      data: userCreated,
      message: 'User created succesfully'
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'An error has occurred' })
  }
}

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
  res.json({
    msg: 'updateUser',
    id,
    body
  })
}
export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    msg: 'deleteUser',
    id
  })
}

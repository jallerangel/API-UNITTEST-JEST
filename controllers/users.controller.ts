import { Response, Request } from 'express'

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
export const creatUser = (req: Request, res: Response) => {
  const { body } = req
  res.json({
    msg: 'createUser'
  })
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

import type { Request, Response } from "express"
import { User } from "../models/User"

export const home = async (req: Request, res: Response) => {
  const users = await User.findAll()

  res.render("pages/home", {
    users
  })
}

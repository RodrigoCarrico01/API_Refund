import { Router } from "express"

import { usersRoutes } from "./users-routes"
import { sessionsRoutes } from "./sessions-routes"
import { refundsRoutes } from "./refunds-routes"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"

const routes = Router()

//PUBLIC ROUTES
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)

//PRIVATE ROUTES
routes.use(ensureAuthenticated)
routes.use("/refunds", refundsRoutes)

export {routes}
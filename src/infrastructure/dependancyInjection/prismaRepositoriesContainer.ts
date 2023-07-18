import {container} from "tsyringe"
import { baseRepository } from "../mysqlPrismaRepository/baseRepository"
import { adsRepository } from "../mysqlPrismaRepository/adsRepository"

container.register("IBaseRepositoryPort", {useClass: baseRepository})
container.register("IAdsRepositoryPort", {useClass: adsRepository})

export default container
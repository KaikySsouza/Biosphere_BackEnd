import TokenController from '../controllers/TokenController';
import { Router } from 'express'
;
const router = new Router();

router.post('/', TokenController.store)

export default router;

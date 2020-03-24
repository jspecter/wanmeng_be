import { Router } from 'express';
import weatherController from '../controllers/weather';

const router = new Router();

router.get('/', weatherController);

module.exports = router;

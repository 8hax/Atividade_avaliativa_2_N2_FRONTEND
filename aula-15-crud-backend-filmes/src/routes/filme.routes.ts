import { FilmeController } from "../controller/filme.controller";
import { Router } from "express";

const router = Router();
const filmeController = new FilmeController();

router.post('/',filmeController.create);
router.delete('/:id',filmeController.delete);
router.get('/',filmeController.findAll);
router.get('/:id',filmeController.findById);
router.put('/:id',filmeController.update);

export {router as filmeRoutes};
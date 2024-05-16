import express from 'express'
import OrcamentoController from '../Controller/OrcamentoController'
import ManageTokens from '../Helper/Manage-Token';

const router = express.Router();

router.get('/DashboardInicial', ManageTokens.Checktoken, OrcamentoController.PegarTodosOrcamentosDoUsuario)
router.post('/send/all', OrcamentoController.DispatchOrc)

export default router
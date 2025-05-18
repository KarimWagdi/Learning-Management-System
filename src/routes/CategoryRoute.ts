import express from 'express'
import CategoryController from '../controller/CategoryController'
import requsetValidator from '../middleware/RequestValidate'
import { addCategory, updateCategory } from '../vaildation/requestVaildation'

const router = express.Router()


router.get('/', CategoryController.getAllCategory)
router.get('/:id', CategoryController.getOneCategory)
router.post('/', requsetValidator(addCategory), CategoryController.createCategory)
router.delete('/:id', CategoryController.deleteCategory)
router.patch('/:id', requsetValidator(updateCategory), CategoryController.updatedCategory)



export default router
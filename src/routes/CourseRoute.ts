import express from 'express'
import CourseController from '../controller/CourseController'

const router = express.Router()

router.get('/', CourseController.getCourse)
router.get('/:id', CourseController.getOneCourse)
router.post('/', CourseController.addCourse)
router.delete('/:id', CourseController.deleteCourse)
router.patch('/:id', CourseController.updateCourse)

export default router;


import express from 'express'
import CourseController from '../controller/CourseController'
import requsetValidator from '../middleware/RequestValidate'
import { addCourseRequest, updateCourseRequest } from '../vaildation/requestVaildation'

const router = express.Router()

router.get('/', CourseController.getCourse)
router.get('/:id', CourseController.getOneCourse)
router.post('/', requsetValidator(addCourseRequest), CourseController.addCourse)
router.delete('/:id', CourseController.deleteCourse)
router.patch('/:id', requsetValidator(updateCourseRequest), CourseController.updateCourse)

export default router;


import { Router } from "express";
import SubCategoryController from "../controller/SubCategoryController";
import requestValidator from "../middleware/validateRequest";
import { SubCategoryRequest } from "./request/SubCategoryRequest";

const router = Router();

// Create a new subcategory
router.post(
  "/",
  requestValidator(SubCategoryRequest),
  SubCategoryController.createSubCategory
);

// Get all subcategories
router.get("/", SubCategoryController.getAllSubCategories);

// Get a single subcategory by ID
router.get("/:id", SubCategoryController.getSubCategoryById);

// Update a subcategory
router.put(
  "/:id",
  requestValidator(SubCategoryRequest),
  SubCategoryController.updateSubCategory
);

// Delete a subcategory (soft delete)
router.delete("/:id", SubCategoryController.deleteSubCategory);

export default router;
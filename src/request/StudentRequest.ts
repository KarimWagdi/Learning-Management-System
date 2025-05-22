export interface CreateStudentRequest {
  group_id: number;
  instructor_id: number;
  rate_id: number;
  comment_id: number;
  update_id: number;
}

export interface UpdateStudentRequest {
  group_id?: number;
  instructor_id?: number;
  rate_id?: number;
  comment_id?: number;
  update_id?: number;
}

export interface DeleteStudentRequest {
  student_id: number;
}

export interface GetStudentRequest {
  student_id: number;
}
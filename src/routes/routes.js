import Dashboard from '../components/Dashboard';
import AddCourse from '..components/AddCourse';
import AddStudent from '..components/AddStudent';
import AddTeacher from '..components/AddTeacher';
import { createWebHistory,createRouter } from 'vue-router';

const routes = [
  {
    name:'Dashboard',
    path: '/',
    component: Dashboard
  },
  {
    name:'AddCourse',
    path: '/add_course',
    component: AddCourse
  },
  {
    name:'AddStudent',
    path: '/add_student',
    component: AddStudent
  },
  {
    name:'AddTeacher',
    path: '/add_teacher',
    component: AddTeacher
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
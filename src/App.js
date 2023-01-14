import logo from './logo.svg';
import './App.css';
import "./sb-admin-2.min.css";
import Login from './Components/Login';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Components/Portal';
import StudentDashboard from './StudentComponents/StudentDashboard';
import StudentList from './StudentComponents/StudentList';
import StudentView from './StudentComponents/StudentView';
import TeacherDashboard from './TeacherComponents/TeacherDashboard';
import TeacherList from './TeacherComponents/TeacherList';
import TeacherView from './TeacherComponents/TeacherView';
import TeacherStudentEdit from './TeacherComponents/TeacherStudentEdit';
import TeacherStudentCreate from './TeacherComponents/TeacherStudentCreate';
import StudentPortal from './StudentComponents/StudentPortal';
import TeacherPortal from './TeacherComponents/TeacherPortal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/portal' element={<TeacherPortal />}>
          <Route path='teacher-dashboard' element={<TeacherDashboard />} />
          <Route path='teacher-details' element={<TeacherList />} />
          <Route path='create-student' element={<TeacherStudentCreate />} />
          <Route path='teacher-view/:id' element={<TeacherView />} />
          <Route path='teacher-edit/:id' element={<TeacherStudentEdit />} />
        </Route>
        <Route path='/student-portal' element={<StudentPortal />}>
          <Route path='student-dashboard' element={<StudentDashboard />} />
          <Route path='student-details' element={<StudentList />} />
          <Route path='student-view/:id' element={<StudentView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import AcademicDepartment from "../pages/admin/academicManagement/academicDeparment/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/academicFaculty/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/academicDeparment/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/academicFaculty/CreateAcademicFaculty";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAcademicSemester from "../pages/admin/academicManagement/academicSemester/CreateAcademicSemester";
import CreateAdmin from "../pages/admin/userMangement/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/userMangement/faculty/CreateFaculty";
import CreateStudent from "../pages/admin/userMangement/student/CreateStudent";
import StudentData from "../pages/admin/userMangement/student/StudentData";
import StudentDetails from "../pages/admin/userMangement/student/StudentDetails";
import SemesterRegistration from "../pages/admin/courseManagement/semester/SemesterRegistration";
import RegisteredSemester from "../pages/admin/courseManagement/semester/RegisteredSemester";
import CreateCourse from "../pages/admin/courseManagement/courses/CreateCourse";
import Courses from "../pages/admin/courseManagement/courses/Courses";
import OfferCourse from "../pages/admin/courseManagement/courses/OfferCourse";
import OfferedCourses from "../pages/admin/courseManagement/courses/Courses";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  //Academic Managements
  {
    name: "Academic Management",
    children: [
      //semester
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      //faculty
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      //department
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },

  //User Managements
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },

  //Course Management
  {
    name: "Course Mangement",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemester />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourses />,
      },
    ],
  },
];

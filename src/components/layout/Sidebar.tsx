import { Layout } from "antd";


const {Sider} = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const role = 'student';
let sidebarItems;

//logic
switch (role) {
    case userRole.ADMIN:
        sidebarItems = sidbariteGe
}
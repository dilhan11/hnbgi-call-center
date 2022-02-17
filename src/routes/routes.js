import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/policies',
        name: 'policies',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Policies/Policies.vue')
      },
      {
        path: '/policymanagement',
        name: 'policymanagement',
        component: () => import(/* webpackChunkName: "demo" */ '../views/PolicyManagement/PolicyManagement.vue')
      },
      {
        path: '/admissionform',
        name: 'admissionform',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/AdmissionForm.vue')
      },
      {
        path: '/alladmission',
        name: 'alladmission',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/AllAdmission.vue')
      },
      {
        path: '/viewadmission',
        name: 'viewadmission',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/ViewAdmission.vue')
      },
      {
        path: '/admissionhistory',
        name: 'admissionhistory',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/AdmissionHistory.vue')
      },
      {
        path: '/specialadmission',
        name: 'specialadmission',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/SpecialAdmission.vue')
      },
      {
        path: '/admissionapproval',
        name: 'admissionapproval',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/AdmissionApproval.vue')
      },
      {
        path: '/admissionapprovalhistory',
        name: 'admissionapprovalhistory',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Admissions/AdmissionApprovalHistory.vue')
      },
      {
        path: '/alldischarges',
        name: 'alldischarges',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Discharges/Discharges.vue')
      },
      {
        path: '/dischargehistory',
        name: 'dischargehistory',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Discharges/DischargeHistory.vue')
      },
      {
        path: '/ailment',
        name: 'ailment',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MasterData/Ailments.vue')
      },
      {
        path: '/ailmentcategory',
        name: 'ailmentcategory',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MasterData/AilmentsCategory.vue')
      },
      {
        path: '/hospital',
        name: 'hospital',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MasterData/Hospitals.vue')
      },
      {
        path: '/companynotification',
        name: 'companynotification',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MasterData/CompanyNotification.vue')
      },
      {
        path: '/rosters',
        name: 'rosters',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Rosters/Rosters.vue')
      },
      {
        path: '/usermanagement',
        name: 'usermanagement',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Access/UserManagement.vue')
      },
      {
        path: '/createuser',
        name: 'createuser',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Access/CreateUser.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;

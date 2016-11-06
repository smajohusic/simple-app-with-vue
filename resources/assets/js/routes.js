// Components
import frontpage from './components/frontpage';
import createTeam from './components/createTeam';
import listAllTeams from './components/listAllTeams';
import editTeam from './components/editTeam';

export default [
  {
    path: '/',
    component: frontpage
  },
  {
    path: '/team/create',
    component: createTeam
  },
  {
    path: '/team/overview',
    component: listAllTeams
  },
  {
    path: '/team/overview/edit/:teamId',
    component: editTeam
  }
];
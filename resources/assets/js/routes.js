// Components
import frontpage from './components/frontpage';
import createTeam from './components/createTeam';
import listAllTeams from './components/listAllTeams';

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
  }
];
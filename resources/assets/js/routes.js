// Components
import frontpage from './components/frontpage';
import createTeam from './components/TeamComponents/createTeam';
import listAllTeams from './components/TeamComponents/listAllTeams';
import editTeam from './components/TeamComponents/editTeam';
import createPlayer from './components/PlayerComponents/createPlayer';
import listAllPlayers from './components/PlayerComponents/listAllPlayers';

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
  },
  {
    path: '/player/create',
    component: createPlayer,
  },
  {
    path: '/player/overview',
    component: listAllPlayers
  }
];
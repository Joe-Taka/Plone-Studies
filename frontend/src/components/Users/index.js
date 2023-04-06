import UsersView from './View';
import UsersEdit from './Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const custsomUsers = {
  myCustomUsers: {
    id: 'myCustomUsers',
    title: 'My Custom Users',
    edit: UsersEdit,
    view: UsersView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};
export default custsomUsers;

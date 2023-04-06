import FormsView from './View';
import FormsEdit from './Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const customForms = {
  myCustomProfile: {
    id: 'myCustomProfile',
    title: 'My Custom Profile',
    edit: FormsEdit,
    view: FormsView,
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
export default customForms;

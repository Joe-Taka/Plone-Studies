import ButtonView from './View';
import ButtonEdit from './Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const customButton = {
  myCustomButton: {
    id: 'myCustomButton',
    title: 'My Custom Button',
    edit: ButtonEdit,
    view: ButtonView,
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
export default customButton;

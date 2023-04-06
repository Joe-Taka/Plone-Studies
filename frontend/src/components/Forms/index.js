import FormView from './View';
import FormEdit from './Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const customForm = {
  myCustomForms: {
    id: 'myCustomForms',
    title: 'My Custom Forms',
    edit: FormEdit,
    view: FormView,
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
export default customForm;

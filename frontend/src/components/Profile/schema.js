export const schemaProfile = (props) => {
  return {
    required: [],
    fieldsets: [
      {
        id: 'default',
        title: 'Perfil',
        fields: ['title', 'description'],
      },
      {
        id: 'link',
        title: 'Redes Sociais',
        fields: ['github', 'otherLink'],
      },
    ],
    properties: {
      title: {
        title: 'Nome',
        widget: 'text',
      },
      description: {
        title: 'Sobre mim',
        widget: 'text',
      },
      github: {
        title: 'Github',
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
      otherLink: {
        title: 'Outro Link',
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
    },
  };
};

export default schemaProfile;

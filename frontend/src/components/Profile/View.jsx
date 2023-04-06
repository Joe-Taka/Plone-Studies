import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import selfie from './Me.png';

const ProfileView = (props) => {
  const { data } = props;

  return (
    <div className="block Profile">
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column>
            <h2>{data.title}</h2>
            <p className="description">{data.description}</p>
            <img src={selfie} alt="selfie" style={{ height: '250px' }} />
          </Grid.Column>
          <Grid.Column>
            <div className="media">
              <p>
                Github:{' '}
                {data.github?.length > 0 && (
                  <UniversalLink
                    href={data.github[0]['@id']}
                    className="other-link"
                  >
                    {data.github[0]['title']}
                  </UniversalLink>
                )}
              </p>
              <p>
                Linkedin:{' '}
                {data.otherLink?.length > 0 && (
                  <UniversalLink
                    href={data.otherLink[0]['@id']}
                    className="other-link"
                  >
                    {data.otherLink[0]['title']}
                  </UniversalLink>
                )}
              </p>
              <img src="https://picsum.photos/200/300" alt="landscape" />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileView;

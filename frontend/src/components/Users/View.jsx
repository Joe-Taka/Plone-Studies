import { useState, useEffect } from 'react';
import { Grid, Container } from 'semantic-ui-react';

const UsersView = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(
      'https://63e884ebb120461c6be1c9da.mockapi.io/api/users',
    );
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <Container>
      <div className="block Users">
        {users.length > 0 ? (
          <Grid stackable style={{ gridGap: '50px' }}>
            {users.map((user) => {
              return (
                <div>
                  <Grid.Column key={user.id}>
                    <h4>{user.name}</h4>
                    <p>
                      <a href={`mailto: ${user.email}`}>{user.email}</a>
                    </p>
                    <img src={user.avatar} alt={user.name} />
                  </Grid.Column>
                </div>
              );
            })}
          </Grid>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
};

export default UsersView;

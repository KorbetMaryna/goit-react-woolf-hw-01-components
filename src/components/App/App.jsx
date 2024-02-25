import { Section, Container, Heading, Profile } from "components";
import user from 'data/user.json';


export const App = () => {
  return (
    <Container> 
      <Section>
        <Heading>Social network profile</Heading>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

    
      </Section>
    </Container>
  );
};

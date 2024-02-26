import { Section, Container, Heading, Profile, Statistics, FriendList, TransactionHistory} from "components";
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


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

      <Section>
        <Heading>Statistics section</Heading>
        <Statistics title="Upload stats" stats={data} />
      </Section>
        
      <Section>
        <Heading>Friends list</Heading>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <Heading>Transaction history</Heading>
        <TransactionHistory items={transactions} />
      </Section> 

    </Container>
  );
};

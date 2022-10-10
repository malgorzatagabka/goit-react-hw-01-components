import user from '../json-data/user';
import statistics from '../json-data/statistics';
import friends from '../json-data/friends';
import transactions from '../json-data/transactions';


import { UserProfile } from './Profile/Profile';
import { UserStats } from './Statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/transaction-history';


export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <UserStats title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        
    </>
  );
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >

//       React homework template
//     </div>

//   );
// };
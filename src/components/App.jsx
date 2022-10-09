import user from '../json-data/user';
import { UserProfile } from './Profile/Profile';

import statistics from '../json-data/statistics';
import { UserStats } from './Statistics/Statistics';

import friends from '../json-data/friends';
import { FriendList } from './friend-list/FriendList';

import transactions from '../json-data/transactions';
import { TransactionHistory } from './transaction-history/transaction-history';

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

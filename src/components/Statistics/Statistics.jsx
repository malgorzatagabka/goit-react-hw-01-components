//import PropTypes from 'prop-types';
// import Stats from './statisctics.module.css';

export const UserStats = ({ title, stats }) => {
  return (
      <section className="statistics">
          { title && <h2 class="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }, index) => (
         <li className="item" key={id}>
            <span className="label">{label}</span>
            <span classname="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
//import PropTypes from 'prop-types';
import Stats from './statistics.module.css'

export const UserStats = ({ title, stats }) => {
  return (
    <section className={Stats.statistics}>
          { title && <h2 class={Stats.title}>{title}</h2>}
      <ul className={Stats.statList}>
        {stats.map(({ id, label, percentage }, index) => (
         <li className={Stats.item} key={id} style={{ backgroundColor:colorHex }}>
            <span className={Stats.label}>{label}</span>
            <span className={Stats.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const colorHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;
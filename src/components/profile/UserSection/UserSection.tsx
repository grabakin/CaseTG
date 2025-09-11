import React from 'react';
import styles from './UserSection.module.css';

interface UserSectionProps {
  avatar: string;
  username: string;
}

const UserSection: React.FC<UserSectionProps> = ({ avatar, username }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={avatar} alt={`${username} avatar`} />
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.username}>{username}</h2>
        <span className={styles.status}>В сети</span>
      </div>
    </div>
  );
};

export default UserSection;

import styles from "./BottomNavigation.module.css";

const navItems = [
  { id: "cases", label: "Кейсы", icon: "/cases nav.png" },
  { id: "upgrade", label: "Апгрейд", icon: "/upgrade nav.png" },
  { id: "contract", label: "Контракт", icon: "/contract nav.png" },
  { id: "profile", label: "Профиль", icon: "/user nav.png" },
];
interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const BottomNavigation = ({
  activeTab,
  onTabChange,
}: BottomNavigationProps) => {
  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${
            activeTab === item.id ? styles.active : ""
          }`}
          onClick={() => onTabChange(item.id)}
        >
          <img src={item.icon} alt={item.label} className={styles.navIcon} />
          <span className={styles.navLabel}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
export default BottomNavigation;

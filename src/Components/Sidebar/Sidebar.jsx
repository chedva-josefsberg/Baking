import './Sidebar.css';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <nav>
        <ul>
          <li>Work</li>
          <li>UX/UI</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Newsletter</li>
        </ul>
        <div className="social-links">
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

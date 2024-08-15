import { S } from './Dropdown.style';
import chevronDown from '../../assets/EPRiansPage/chevron-down.svg';
import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const options = ['37th', '36th', '35th', '34th', '33th', '32th', '31th'];

  return (
    <S.Container ref={dropdownRef}>
      <S.DropdownButton className={className} onClick={handleDropdown}>
        <div className='gen'>37th</div>
        <img className='icon' src={chevronDown} />
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {options.map((op, index) => (
            <S.DropdownItem key={index}>{op}</S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
};

export default Dropdown;

import { S } from './Dropdown.style';
import chevronDown from '../../assets/EPRiansPage/chevron-down.svg';
import { useState, useEffect, useRef } from 'react';
import { getMembersAlumni } from '../../api/member';

const Dropdown = ({ className, options, setAlumniList }) => {
  const [gen, setGen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!gen) {
      setGen(options[0]);
    }
  }, [options]);

  useEffect(() => {
    const getAlumniList = async () => {
      try {
        const res = await getMembersAlumni(gen);
        setAlumniList(
          res.sort((a, b) => {
            return a.name.localeCompare(b.name);
          }),
        );
      } catch (err) {
        console.error(err);
      }
    };
    getAlumniList();
  }, [gen]);

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

  const handleClickGen = option => {
    setGen(option);
    setIsOpen(false);
  };

  return (
    <S.Container ref={dropdownRef} className={className}>
      <S.DropdownButton onClick={handleDropdown}>
        <S.Gen>{gen}</S.Gen>
        <S.Icon src={chevronDown} alt='arrow down' />
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {options.map((op, index) => (
            <S.DropdownItem
              key={index}
              onClick={() => {
                handleClickGen(op);
              }}
            >
              {op}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
};

export default Dropdown;

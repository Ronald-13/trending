import './dropdown.css';
import { Dropdown, FormControl } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

/**
 * Dropdown component - Contains search and emits selected dropdown on handleLanguage
 * 
 */

const DropdownFilter = (props: any) => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [list, setList] = useState<any[]>([]);
  const { options } = props;

  useEffect(() => {
    setList(options);
    setValue("Any");
  }, []);

  const handleSelect = (key: string) => {
    setValue(key);
    props.handleLanguage(key);
  }

  const handleSearch = (str: string) => {
    setSearch(str);
    const newArr = options.filter((el: any) => el.name.toLowerCase().indexOf(str.toLowerCase()) !== -1);
    setList(newArr);
  }

  return (
    <Dropdown onSelect={(eventKey: any) => handleSelect(eventKey)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Language: {value}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder=""
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
        />
        <Dropdown.Item eventKey="Any">Any</Dropdown.Item>
        {list.map((el: any) => <Dropdown.Item key={el.id} eventKey={el.value}>{el.name}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownFilter;
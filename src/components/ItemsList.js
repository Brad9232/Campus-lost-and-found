import { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/items')
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Location: {item.locationFound}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
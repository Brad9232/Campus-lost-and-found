import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [items, setItems] = useState([]);

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5001/api/items/${id}`, { status });
    setItems(items.map(item => item._id === id ? { ...item, status } : item));
  };

  useEffect(() => {
    axios.get('http://localhost:5001/api/items').then(res => setItems(res.data));
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <button onClick={() => updateStatus(item._id, 'Approved')}>Approve</button>
          <button onClick={() => updateStatus(item._id, 'Rejected')}>Reject</button>
          <button onClick={() => updateStatus(item._id, 'Claimed')}>Mark as Claimed</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
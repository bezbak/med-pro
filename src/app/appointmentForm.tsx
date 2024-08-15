import React, { useState } from 'react';
import Header from './Components/Header';

interface AppointmentFormProps {
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Запись отправлена:', { name, phone, email });
    onClose(); 
  };

  return (
    <div className="w-full mt-[36px]">
      <Header/>
      <div className="appointment-form">
        <h2>Запись на прием</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Имя:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Телефон:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit" className=''>Записаться</button>
        </form>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default AppointmentForm;

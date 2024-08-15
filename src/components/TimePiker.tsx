interface TimePickerProps {
    selectedTime: string | null;
    setSelectedTime: (time: string) => void;
  }
  
  const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, setSelectedTime }) => {
  
    const timeSlots = [
      '08:00', '08:30', '09:00', '09:30', '10:00','11:30','11:00','11:30','13:30'
     
    ];
  
    const handleTimeClick = (time: string) => {
      setSelectedTime(time);
    };
  
    return (
      <div className="time-picker">
        <h2 className="text-xl mb-4">Выберите удобное время</h2>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeClick(time)}
              className={`p-2 rounded ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default TimePicker;
  
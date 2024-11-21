import SweetCalendar from "@/components/ui/SweetCalendar";
import ConsultationForm from "@/components/ui/ConsultationForm";
const AppointmentPage = () => {
  const work_time = "09:00-16:00"
  const schedule = {
    "2024-11-22": {
      busy_slots: ["10:30", "14:00", "17:00"]
    },
    "2024-11-23": {
      busy_slots: ["12:30", "15:00"]
    },
  };

  return (
    <section id='consultation'>
      <div className="w-full container mx-auto mt-[36px]">
        <div className="p-8 rounded-lg">
          <div className="grid grid-cols-2 gap-8">
            {/* Выбор даты */}
            <SweetCalendar schedule={schedule} work_time={work_time} />

            {/* Информация об обращении */}
            <ConsultationForm/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;

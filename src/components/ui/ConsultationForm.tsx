'use client'
import React, { useEffect, useState } from 'react';
import { type ClassDictionary } from "clsx"
import { Doctor } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import { BASE_URL, pushForm } from "@/lib/utils";

const ConsultationForm: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL
  const router = useRouter();

  const [doctor, setDoctorData] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [localData, setLocalData] = useState<ClassDictionary | null>(null)
  const [agreements, setAgreements] = useState({
    medical: false,
    personal: false,
    contract: false
  });


  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/${id}`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data: Doctor = await response.json();

        pushForm({ 'doc_id': id, 'user_id': localStorage.getItem('user_id') })
        setDoctorData(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const getLocalData = () => {
      setLocalData(JSON.parse(localStorage.getItem('form_data') ?? '{}'))
    }
    getLocalData()
    fetchDoctorData();
  }, [id]);

  useEffect(() => {
    setActiveButton(localData?.type)
  }, [localData])

  const handleSubmit = async () => {
    const allAgreed = Object.values(agreements).every((value) => value === true);

    const fromData = JSON.parse(localStorage.getItem("form_data") || "{}");
    const accessToken = localStorage.getItem("access_token");
    const user_id = localStorage.getItem("user_id");

    const requiredKeys = ["day", "doc_id", "number", "text", "time", "type", "user_id"];
    const allLocalDataValid = requiredKeys.every(
      (key) => fromData[key] && fromData[key].toString().trim() !== ""
    );

    if (!allAgreed) {
      alert("Пожалуйста, примите соглашения.");
    } else if (!allLocalDataValid) {
      console.log(fromData);

      alert("Пожалуйста, заполните все данные формы.");
    } else {
      const rowData = {
        date: fromData.day || null,
        time: fromData.time || null,
        consul_type: fromData.type || "",
        wh_number: fromData.number || "",
        notes: fromData.text || "",
        patient_id: fromData.user_id || null,
        doctor_id: fromData.doc_id || null,
      };

      try {
        // Отправляем POST-запрос
        const response = await fetch(`${BASE_URL}/api/v1/consultations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`, // Добавляем токен в заголовок
          },
          body: JSON.stringify(rowData),
        });

        if (response.ok) {
          const result = await response.json();
          localStorage.removeItem('form_data')
          router.push(`/user_profile/${user_id}`);;
        } else {
          console.error("Ошибка при отправке данных:", response.statusText);
          alert("Ошибка при отправке данных.");
        }
      } catch (error) {
        console.error("Произошла ошибка:", error);
        alert("Не удалось отправить данные. Попробуйте снова.");
      }
    }
  };

  const changeInput = (data: string, data_types: string) => {
    pushForm({ [data_types]: data })
  }

  const handleClick = (buttonName: string) => {

    setActiveButton(buttonName);
    pushForm({ 'type': buttonName })
  };

  return (
    <div className="w-full min-md:max-w-[60%] pt-8 max-md:w-full">
      <h2 className="text-2xl font-semibold mb-4">Информация об обращении</h2>
      {
        !isLoading && doctor ? (<div className="flex items-center mb-4">
          <img className="w-20 h-20 bg-gray-300 rounded-full mr-4" src={doctor.user.profile} alt="Doctor" />
          <div>
            <h3 className="text-xl font-semibold">Dr. {doctor.user.first_name} {doctor.user.last_name}</h3>
            <p className="text-lightBlue">{doctor.specialty.name}</p>
          </div>
        </div>) : <p>Загрузка данных...</p>
      }
      <div className="mb-4">
        <label htmlFor="problem-description" className="block text-lg font-medium text-gray-700 mb-2">
          Описание проблемы
        </label>
        <textarea
          id="problem-description"
          placeholder="Введите текст"
          onChange={(e) => changeInput(e.target.value, 'text')}
          value={localData?.text}
          className="w-full border font-semibold text-lg border-gray custom-rounded border-transparent shadow-sm focus:ring-lightBlue focus:border-lightBlue resize-none p-3"
          rows={4}
        ></textarea>
      </div>

      <div className="mb-4">
        <p className="block text-lg font-medium text-gray-700 mb-2">Предпочтительный способ связи</p>
        <div className="flex space-x-2">
          <button
            className={`flex items-center gap-2 w-full max-w-[100px] p-2 border border-gray-300 bg-white text-gray-500 font-medium custom-rounded-mini shadow-sm focus:ring-2 ${activeButton === "audio" ? "custom-active-btn" : ""
              }`}
            onClick={() => handleClick("audio")}
          >
            <svg
              className="fill-[#9CC8FC] w-[25px] h-[25px]"
              width="25px"
              height="25px"
              viewBox="0 0 31 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26.748 19.325L20.1605 18.5625L17.0105 21.7125C13.462 19.9078 10.5778 17.0235 8.77305 13.475L11.9355 10.3125L11.173 3.75H4.28555C3.56055 16.475 14.023 26.9375 26.748 26.2125V19.325Z" />
            </svg>
            Аудио
          </button>
          <button
            className={`flex items-center gap-2 w-full max-w-[100px] p-2 border border-gray-300 bg-white text-gray-500 font-medium custom-rounded-mini shadow-sm focus:ring-2 ${activeButton === "chat" ? "custom-active-btn" : ""
              }`}
            onClick={() => handleClick("chat")}
          >
            <svg
              className="fill-[#9CC8FC] w-[25px] h-[25px]"
              width="25px"
              height="25px"
              viewBox="0 0 27 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.168 2.16663H4.83464C3.64297 2.16663 2.6788 3.14163 2.6788 4.33329L2.66797 23.8333L7.0013 19.5H22.168C23.3596 19.5 24.3346 18.525 24.3346 17.3333V4.33329C24.3346 3.14163 23.3596 2.16663 22.168 2.16663ZM7.0013 9.74996H20.0013V11.9166H7.0013V9.74996ZM15.668 15.1666H7.0013V13H15.668V15.1666ZM20.0013 8.66663H7.0013V6.49996H20.0013V8.66663Z" />
            </svg>
            Чат
          </button>
          <button
            className={`flex items-center gap-2 w-full max-w-[100px] p-2 border border-gray-300 bg-white text-gray-500 font-medium custom-rounded-mini shadow-sm focus:ring-2 ${activeButton === "video" ? "custom-active-btn" : ""
              }`}
            onClick={() => handleClick("video")}
          >
            <svg
              className="fill-[#9CC8FC] w-[25px] h-[25px]"
              width="25px"
              height="25px"
              viewBox="0 0 33 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.16797 11C3.16797 9.85069 3.62451 8.74849 4.43717 7.93583C5.24983 7.12317 6.35203 6.66663 7.5013 6.66663H16.168C16.737 6.66663 17.3005 6.77871 17.8263 6.99648C18.352 7.21425 18.8297 7.53344 19.2321 7.93583C19.6345 8.33822 19.9537 8.81592 20.1714 9.34166C20.3892 9.86741 20.5013 10.4309 20.5013 11V21C20.5013 21.569 20.3892 22.1325 20.1714 22.6583C19.9537 23.184 19.6345 23.6617 19.2321 24.0641C18.8297 24.4665 18.352 24.7857 17.8263 25.0034C17.3005 25.2212 16.737 25.3333 16.168 25.3333H7.5013C6.35203 25.3333 5.24983 24.8767 4.43717 24.0641C3.62451 23.2514 3.16797 22.1492 3.16797 21V11ZM26.1773 23.584L21.8346 20.5866V11.416L26.1773 8.41729C27.7253 7.34796 29.8373 8.45729 29.8373 10.3373V21.664C29.8373 23.544 27.7253 24.6533 26.1773 23.584Z" />
            </svg>
            Видео
          </button>
        </div>
        <div className={`my-4 w-[300px] ${activeButton !== null ? 'block' : 'hidden'}`}>
          <input type="text" value={localData?.number} onFocus={(e) => { !e.target.value.startsWith('+996') ? e.target.value = `+996${e.target.value}` : '' }} onChange={(e) => changeInput(e.target.value, 'number')} className='w-full border font-semi text-md border-gray custom-rounded-mini border-transparent shadow-sm focus:ring-lightBlue focus:border-lightBlue resize-none p-2' placeholder={'Введите номер WhatsApp'} />
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex items-center">
          <input
            id="consent-medical"
            type="checkbox"
            onChange={() => { agreements.contract = true; setAgreements(agreements) }}
            className="h-4 w-4 text-lightBlue border-gray-300 rounded focus:ring-lightBlue"
          />
          <label htmlFor="consent-medical" className="ml-2 text-gray-700">
            Согласие на <a href="#" className="text-lightBlue underline">медицинское вмешательство</a>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="consent-data"
            type="checkbox"
            onChange={() => { agreements.personal = true; setAgreements(agreements) }}
            className="h-4 w-4 text-lightBlue border-gray-300 rounded focus:ring-lightBlue"
          />
          <label htmlFor="consent-data" className="ml-2 text-gray-700">
            Согласие на обработку <a href="#" className="text-lightBlue underline">персональных данных</a>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="consent-paid"
            type="checkbox"
            onChange={() => { agreements.medical = true; setAgreements(agreements) }}
            className="h-4 w-4 text-lightBlue border-gray-300 rounded focus:ring-lightBlue"
          />
          <label htmlFor="consent-paid" className="ml-2 text-gray-700">
            Договор об оказании <a href="#" className="text-lightBlue underline">платных медицинских услуг</a>
          </label>
        </div>
      </div>

      <div>
        <button
          onClick={() => { handleSubmit() }}
          className="w-full py-2 bg-lightBlue text-white font-medium rounded-md shadow-sm hover:ring-2 hover:ring-lightBlue hover:bg-white hover:text-lightBlue"
        >
          Записаться
        </button>
      </div>
    </div>
  );
};

export default ConsultationForm;

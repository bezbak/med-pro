import React from 'react';

const ConsentCard: React.FC = () => {
    return (
        <section id='About'>
            <div className="w-full container mx-auto mt-[36px] font-gilroy">
                <h2 className="text-center font-bold text-2xl">
                    Согласие на медицинское вмешательство
                </h2>

                <div className="bg-green-100 p-4 my-5 rounded-lg">
                    <p className="text-gray-700">
                        Информированное добровольное согласие — доктрина в медицинской этике и медицинском праве, согласно которой для медицинского вмешательства, особенно сопряженного с риском, должно быть получено согласие пациента, являющегося действительным только при соблюдении определённых условий[1]. Информированное добровольное согласие в настоящее время относится к основным правам пациента (англ. Patients' rights). Также оно представляет собой необходимое предварительное условие для проведения предложенного врачом медицинского вмешательства для целей обследования или лечения. Согласие должно быть получено у пациента или его законного представителя.
                    </p>
                </div>

                <div className="bg-green-100 p-4 my-5 rounded-lg">
                    <p className="text-gray-700">
                        Оно должно быть добровольным, добровольность в данном случае определяется как отсутствие принуждения в таких формах, как угрозы, авторитарное навязывание стороннего мнения, подтачивание информации. Согласие должно основываться на всестороннем представлении обо всей имеющейся информации о предстоящем вмешательстве, вероятных осложнениях, вероятных действиях и условиях их оказания. Информированное добровольное согласие выступает механизмом защиты прав как пациента, так и врача.[2][3][4] Информированное добровольное согласие также может быть условием для участия испытуемых в психологических экспериментах, в клинических исследованиях, или любом другом виде экспериментов над людьми. Информированное согласие взимается в соответствии с рекомендациями в области медицинской этики и этики исследований.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ConsentCard;
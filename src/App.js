import React from 'react';
import { useState } from 'react';
import './App.scss';
import Info from './Components/Info/Info.jsx';
import Quation from './Components/Quation/Quation.jsx';
import Answers from './Components/Answers/Answers.jsx';
import Button from './Components/Button/Button.jsx';
import Slidebar from './Components/Slidebar/Slidebar.jsx';

import ImageLevel1 from './pic/level1.png';
import ImageLevel2 from './pic/level2.png';
import ImageLevel3 from './pic/level3.png';
import ImageLevel4 from './pic/level4.png';

export default function App() {

    const [obj, setObj] = useState({
        quation: 1,

        currentObject: {
            currentQuation: "В каком году произошло крещение Руси :",
            currentAnswer1: "982г.",
            currentAnswer2: "979г.",
            currentAnswer3: "988г.",
            currentAnswer4: "1002г.",
        },
        isActive: [
            false,
            false,
            false,
            false,
        ],
        arrayAnswers: [

        ],
    });

    const mainObject = [
        {
            currentQuation: "В каком году произошло крещение Руси :",
            currentAnswer1: "982 г.",
            currentAnswer2: "979 г.",
            currentAnswer3: "988 г.",
            currentAnswer4: "1002 г.",
        },
        {
            currentQuation: "Укажите дату отмены крепостного права в России :",
            currentAnswer1: "1867 г.",
            currentAnswer2: "1851 г.",
            currentAnswer3: "1861 г.",
            currentAnswer4: "1868 г.",
        },
        {
            currentQuation: "Укажите правителя при котором состялось стояние на реке Угре :",
            currentAnswer1: "Василий III",
            currentAnswer2: "Иван IV",
            currentAnswer3: "Василий II",
            currentAnswer4: "Иван III",
        },
        {
            currentQuation: "Укажите дату восстания декабристов :",
            currentAnswer1: "14 декабря 1825 г.",
            currentAnswer2: "3 декабря 1825 г.",
            currentAnswer3: "3 декабря 1826 г.",
            currentAnswer4: "31 декабря 1826 г.",
        },
        {
            currentQuation: "Укажите дату образования Молдавской ССР :",
            currentAnswer1: "1940 г.",
            currentAnswer2: "1926 г.",
            currentAnswer3: "1951 г.",
            currentAnswer4: "1919 г.",
        },
        {
            currentQuation: "Что из перечисленного относится к деятельности Владимира Мономаха :",
            currentAnswer1: "Крещение Руси",
            currentAnswer2: "Разгром печенегов",
            currentAnswer3: "Разгром половцев",
            currentAnswer4: "Восстание древлян",
        },
        {
            currentQuation: "Что из перечисленного относится к произведению деятеля культуры В. В. Верещагина :",
            currentAnswer1: "Картина «Бурлаки на Волге»",
            currentAnswer2: "Фильм «Карнавальная ночь»",
            currentAnswer3: "«История о великом князе Московском»",
            currentAnswer4: "Картина «Апофеоз войны»",
        },
        {
            currentQuation: "Какая из перечисленных ниже реформ относится к периоду правления М. С. Горбачёва :",
            currentAnswer1: "Ликвидация отраслевых министерств и создание совнархозов",
            currentAnswer2: "Принятие закона «О кооперации в СССР»",
            currentAnswer3: "Денежная реформа и отмена карточной системы",
            currentAnswer4: "Реформа А. Н. Косыгина по расширению самостоятельности предприятий",
        },
        {
            currentQuation: "Какое из перечисленных ниже событий связано с городом Эрфурт :",
            currentAnswer1: "Боевые действия в ходе Ливонской войны",
            currentAnswer2: "решающее сухопутное сражение Северной войны",
            currentAnswer3: "Гибель царевича Дмитрия",
            currentAnswer4: "Переговоры Наполеона и Александра I",
        },
        {
            currentQuation: "К какому историческому периоду относится Клушинская битва :",
            currentAnswer1: "Русско-византийские войны",
            currentAnswer2: "Северная война",
            currentAnswer3: "Смутное время",
            currentAnswer4: " Великая Отечественная война",
        },
        {
            correctAnswers: [
                3,
                3,
                4,
                1,
                1,
                3,
                4,
                2,
                4,
                3,
            ],
        },
    ];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    function toggleActive (num) {
        const newActiveArr = [... obj.isActive];

        for (let i = 0; i < newActiveArr.length; i++) {
            if (newActiveArr[i]) {
                newActiveArr[i] = false;
            }
        }

        newActiveArr[num - 1] = true;

        setObj ({
            ...obj,
            isActive: newActiveArr
        })
    }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    function nextQuation () {

        const vrp = mainObject[obj.quation];
        const quat = obj.quation + 1;
        const newActiveArr = [... obj.isActive];
        const newArrayAnswers = [...obj.arrayAnswers];

        for (let i = 0; i < newActiveArr.length; i++) {
            if (newActiveArr[i]) {
                newActiveArr[i] = false;
                newArrayAnswers.push(++i);
            }
        }

        setObj ({
            ...obj,
            quation: quat,
            currentObject: vrp,
            isActive: newActiveArr,
            arrayAnswers: newArrayAnswers,
        })

        console.log("Ваши ответы:");
        console.log(obj.arrayAnswers);
        console.log("Правильные ответы:");
        console.log(mainObject[mainObject.length - 1].correctAnswers);
    }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (obj.quation <= mainObject.length - 1) {

        return (
            <div className="mainContainer">
                <Info number={obj.quation} quantityQuations={mainObject.length - 1} />
                <Slidebar quantity={mainObject.length - 1} obj={obj} />
                <Quation propsQtn={obj.currentObject.currentQuation} />
                <Answers propsObj={obj} fun1={toggleActive} />
                <Button propsActiveBtn={obj.isActive} propsFun2={nextQuation} />
            </div>
        );

    } else {

        let Itog = 0;
        let level = 0;

        for (let i = 0; i < mainObject.length - 1; i++) {
            if (mainObject[mainObject.length - 1].correctAnswers[i] === obj.arrayAnswers[i]) {
                Itog = Itog + Math.round(100 / (mainObject.length - 1));
            }
        }

        if (Itog >= 0 && Itog < 25) {
            level = 1;
            var pic = <img src={ImageLevel1} alt="rang" />
            var rang = "Школьник";
            var desc = "Не следует неооценивать историю, в ней можно узнать много всего интересного, а также найти ответы на множество вопросов.";
            var color = "red";
        } else if (Itog >= 25 && Itog < 50) {
            level = 2;
            var pic = <img src={ImageLevel2} alt="rang" />
            var rang = "Студент";
            var desc = "Чтож, общие знания у вас имеются. Не плохо! И не забывайте :";
            var color = "ochre";
        } else if (Itog >= 50 && Itog < 75) {
            level = 3;
            var pic = <img src={ImageLevel3} alt="rang" />
            var rang = "Знаток";
            var desc = "Хороший результат! Должно быть вы понимаете важность истории и знаете:";
            var color = "green";
        } else if (Itog >= 75 && Itog <= 100) {
            level = 4;
            var pic = <img src={ImageLevel4} alt="rang" />
            var rang = "Историк";
            var desc = "Ничего себе! Очень хорошо! Поздравляем с прохождением нашего теста! И помните:";
            var color = "yellow";
        }

        return (
            <div className="finalContainer">
                <h1 className={color}>Тест пройден на {Itog}% </h1>
                <div>{pic}</div>
                <h2>Ваш уровень: <strong>{rang}</strong></h2>
                <p>{desc}</p>
                <q>"Кто забывает уроки истории, <br />обречён на их повторение"</q>
                <p className="autor">— цитата  <strong>Джорджа Сантаяна</strong></p>
            </div>
        )
    }
}

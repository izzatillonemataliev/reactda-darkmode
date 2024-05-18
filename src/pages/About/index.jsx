import React, { useContext } from "react";
import Header from "../../components/header";
import { DarkMode } from "../../context/context";
function About() {
  const {
    state: { lanuage },
  } = useContext(DarkMode);
  return (
    <>
      <div className="container">
        <div className="divl">
          <h5 className="title">
            {lanuage === "uz"
              ? "„Matn“ tushunchasining ikkita asosiy talqini mavjud: immanent (kengaytirilgan, falsafiy qarashlarga yo‘g‘rilgan) va reprezentativ (asosan, xususiy munosabat aks etgan). Immanent yondashuv matnda voqelikka xolis munosabat bildirib, uning ichki tuzilishini uchinchi shaxs tomonidan yoritishga e‘tibor qaratishni nazarda tutadi. Reprezentativ yondoshuv esa, matnni tashqi voqelik haqidagi maʼlumotni taqdim etishning maxsus shakli sifatida ko‘rib chiqishni anglatadi."
              : lanuage === "ru"
              ? "Компьютер (англ. Computer — «Рассчитываю») — автоматическое устройство, работающее по заданной программе. Тот же термин, что и электронный калькулятор (ЭХМ). Однако, помимо выполнения компьютерных вычислений, его функции гораздо шире."
              : lanuage === "eng"
              ? "A computer (English: computer - I calculate) is an automatic device that works according to a predetermined program. The same term as electronic calculator (EHM). However, in addition to performing computer calculations, its function is much wider."
              : lanuage === "portugal"
              ? "Um computador (inglês: computador - eu calculo) é um dispositivo automático que funciona de acordo com um programa pré-determinado. O mesmo termo que calculadora eletrônica (EHM). Porém, além de realizar cálculos computacionais, sua função é muito mais ampla."
              : lanuage === "spanish"
              ? " Una computadora (inglés: computadora - Yo calculo) es un dispositivo automático que funciona según un programa predeterminado. El mismo término que calculadora electrónica (EHM). Sin embargo, además de realizar cálculos informáticos, su función es mucho más amplia."
              : ""}
          </h5>
        </div>
      </div>
    </>
  );
}
export default About;

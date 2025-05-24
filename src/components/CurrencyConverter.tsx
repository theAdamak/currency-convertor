type ConversionDirection = "ToRials" | "ToDollars";
import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import { EXCHANGE_RATE } from "../util/constans";
const CurrencyConverter = () => {
  const [dollars, setDollars] = useState<number>(0);
  const [rials, setRials] = useState<number>(0);
  const [conversionDirection, setConversionDirection] =
    useState<ConversionDirection>("ToRials");

  const convertCurrency = () => {
    if (conversionDirection === "ToRials") {
      if (dollars) {
        setRials(dollars * EXCHANGE_RATE);
      }
    } else {
      if (rials) {
        setDollars(rials / EXCHANGE_RATE);
      }
    }
  };

  const formatNumber = (num: number): string => {
    const fixedNum = Number(num.toFixed(3));
    return fixedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="max-w-full w-[800px] mx-auto m-12 md:mb-24 px-3 py-10 sm:p-10 rounded-2xl bg-custom-color23">
      <div className=" flex flex-col  items-center gap-9 mx-auto mt-20 p-4 bg-white rounded shadow-2xl ">
        <h1 className=" mb-10 text-4xl text-cyan-950 font-medium mt-5">
          تبدیل واحد
        </h1>
        <div>
          <CurrencyInput
            amount={conversionDirection === "ToRials" ? dollars : rials}
            onAmountChange={
              conversionDirection === "ToRials" ? setDollars : setRials
            }
            conversionDirection={conversionDirection}
            onDirectionChange={setConversionDirection}
          />
        </div>
        <div className=" min-w-[46%] text-center px-4 py-2 bg-gray-200 rounded">
          <span>{formatNumber(EXCHANGE_RATE)}</span>
        </div>
        <button
          className="rounded bg-gray-700 cursor-pointer min-w-[46%] px-4 py-2 text-white font-semibold hover:bg-gray-800  transition-all duration-300"
          onClick={convertCurrency}
        >
          تبدیل کن
        </button>

        <div>
          {conversionDirection === "ToRials" ? (
            <p>
              {formatNumber(rials)} <span>تومان</span>
            </p>
          ) : (
            <p>
              {formatNumber(dollars)} <span>دلار</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;

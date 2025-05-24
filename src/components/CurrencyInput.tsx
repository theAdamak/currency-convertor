interface IProps {
  amount: number;
  onAmountChange: (amount: number) => void;
  conversionDirection: "ToRials" | "ToDollars";
  onDirectionChange: (direction: "ToRials" | "ToDollars") => void;
}

const CurrencyInput = ({
  amount,
  onAmountChange,
  conversionDirection,
  onDirectionChange,
}: IProps) => {
  return (
    <div className="flex flex-col">
      <select
        className=" w-full border border-gray-300 rounded py-2 px-4 mb-4 min-w-24"
        value={conversionDirection}
        onChange={(e) =>
          onDirectionChange(e.target.value as "ToRials" | "ToDollars")
        }
      >
        <option>انتخاب کنید</option>
        <option value="ToRials">دلار به ریال</option>
        <option value="ToDollars">ریال به دلار</option>
      </select>

      <div className="flex justify-between items-center gap-19">
        <span>مقدار</span>
        <input
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          type="number"
          min="0"
          defaultValue={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          placeholder="مقدار"
        />
      </div>
    </div>
  );
};

export default CurrencyInput;

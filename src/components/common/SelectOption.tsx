type Props = {
  setSelectedOption: (value: string) => void;
  selectedOption: string;
  option: string;
};

const SelectOption = ({ setSelectedOption, selectedOption, option }: Props) => {
  return (
    <div
      className="select-item-bottom-border"
      aria-label="option"
      onClick={() => setSelectedOption(option)}
    >
      <div
        className={`select-menu-item 
              ${selectedOption === option ? "select-menu-selected-item" : ""}
            `}
      >
        {option}
      </div>
    </div>
  );
};

export default SelectOption;

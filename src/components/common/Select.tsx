import React, { useState } from "react";
import SelectOption from "./SelectOption";

type Props = {};

const Select = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Food", "Houseware", "Entertainment"];
  return (
    <div
      aria-label="select"
      className="select"
      onClick={() => setShowMenu(!showMenu)}
    >
      <span>{selectedOption ? selectedOption : "Select"}</span>
      <div
        className="select-menu"
        style={showMenu ? { display: "unset" } : { display: "none" }}
        aria-label="select-menu"
      >
        {options.map((option, i) => (
          <SelectOption
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            option={option}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;

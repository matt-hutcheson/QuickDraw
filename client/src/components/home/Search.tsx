import React, { useState } from "react";

const Search: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number>();
  const [origin, setOrigin] = useState<string>();
  const isDisabled = (base: string) => origin !== undefined && origin !== base;

  const updateValue =
    (baseName: string, base: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        setValue((_oldValue: number | undefined) => undefined);
        setOrigin((_oldOrigin: string | undefined) => undefined);
      } else {
        setValue((oldValue) => {
          const newValue = parseInt(e.target.value, base);
          return isNaN(newValue) ? oldValue : newValue;
        });
        setOrigin((_oldOrigin: string | undefined) => baseName);
      }
    };

  return (
    <div className="Search">
      <label>
        Decimal:
        <input
          type="string"
          value={value?.toString(10) || ""}
          name="decimal"
          onChange={updateValue("decimal", 10)}
          disabled={isDisabled("decimal")}
        />
      </label>
      <label>
        Hexadecimal:
        <input
          type="string"
          value={value?.toString(16) || ""}
          name="hex"
          onChange={updateValue("hex", 16)}
          disabled={isDisabled("hex")}
        />
      </label>
      <label>
        Binary:
        <input
          type="string"
          value={value?.toString(2) || ""}
          name="binary"
          onChange={updateValue("binary", 2)}
          disabled={isDisabled("binary")}
        />
      </label>
    </div>
  );
};

export default Search;

import React from "react";
import Select from "react-select";
import itemsData from "../data/items_f.json";

const ItemSelector = ({ selectedItems, setSelectedItems }) => {
  const options = itemsData.map((item) => ({
    value: item.UniqueName,
    label: item.LocalizedNames?.RU + ` (${item.UniqueName})` || item.UniqueName,
  }));

  return (
    <Select
      isMulti
      options={options}
      value={options.filter((opt) => selectedItems.includes(opt.value))}
      onChange={(selected) =>
        setSelectedItems(selected.map((item) => item.value))
      }
      placeholder="Выберите предметы..."
    />
  );
};

export default ItemSelector;

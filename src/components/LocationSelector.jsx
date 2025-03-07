import React from "react";
import Select from "react-select";

const locations = [
  { value: "Bridgewatch", label: "Bridgewatch" },
  { value: "Martlock", label: "Martlock" },
  { value: "Lymhurst", label: "Lymhurst" },
  { value: "Fort Sterling", label: "Fort Sterling" },
  { value: "Thetford", label: "Thetford" },
];

const LocationSelector = ({ selectedLocations, setSelectedLocations }) => {
  return (
    <Select
      isMulti
      options={locations}
      value={locations.filter((opt) => selectedLocations.includes(opt.value))}
      onChange={(selected) =>
        setSelectedLocations(selected.map((loc) => loc.value))
      }
      placeholder="Выберите города..."
    />
  );
};

export default LocationSelector;

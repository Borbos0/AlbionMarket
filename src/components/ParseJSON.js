const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/items.json");
const outputFilePath = path.join(__dirname, "../data/items_f.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка при чтении файла:", err);
    return;
  }

  try {
    // Парсим JSON
    const jsonData = JSON.parse(data);

    // Процесс фильтрации
    jsonData.forEach((item) => {
      if (item.LocalizedNames) {
        Object.keys(item.LocalizedNames).forEach((key) => {
          if (key !== "RU-RU" && key !== "EN-US") {
            delete item.LocalizedNames[key];
          }
        });
      }

      if (item.LocalizedDescriptions) {
        Object.keys(item.LocalizedDescriptions).forEach((key) => {
          if (key !== "RU-RU" && key !== "EN-US") {
            delete item.LocalizedDescriptions[key];
          }
        });
      }
    });

    // Записываем данные в новый файл
    fs.writeFile(outputFilePath, JSON.stringify(jsonData, null, 2), "utf8", (err) => {
      if (err) {
        console.error("Ошибка при записи в новый файл:", err);
      } else {
        console.log("Новый файл успешно создан!");
      }
    });
  } catch (parseError) {
    console.error("Ошибка при парсинге данных:", parseError);
  }
});

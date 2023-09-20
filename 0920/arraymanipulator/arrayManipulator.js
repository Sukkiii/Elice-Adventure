function ArrayManipulator(array) {
  function addElement(element) {
    // 예시 코드입니다.
    // 변환된 배열을 `ArrayManipulator`의 인자로 넘겨 리턴합니다.
    return ArrayManipulator([...array, element]);
  }

  function removeElement(index) {
    // 인자를 제거한 배열을 만들어주세요.
    return ArrayManipulator([
      ...array.slice(0, index),
      ...array.slice(index + 1),
    ]);
  }

  function updateElement(index, element) {
    // 인자를 갱신한 배열을 만들어주세요.
    const updatedArray = [...array];
    updatedArray[index] = element;
    return ArrayManipulator(updatedArray);
  }

  function mapElements(func) {
    // 배열 전체를 변환하세요.
    // Array 객체의 내장 map 함수를 활용해 보세요.
    const mappedArray = array.map(func);
    return ArrayManipulator(mappedArray);
  }

  function filterElements(func) {
    // 배열의 특정 원소를 필터하세요.
    // Array 객체의 내장 filter 함수를 활용해 보세요.
    const filteredArray = array.filter(func);
    return ArrayManipulator(filteredArray);
  }

  function getArray() {
    return array;
  }

  return {
    addElement,
    removeElement,
    updateElement,
    mapElements,
    filterElements,
    getArray,
  };
}

const generateRandomNumber = () => parseInt(Math.random() * 100, 10);
const generateResultString = (dom, data) =>
  (dom.innerHTML = `결과 : ${JSON.stringify(data)}`);

const App = () => {
  const addButton = document.getElementById("add-button");
  const deleteButton = document.getElementById("delete-button");
  const updateButton = document.getElementById("update-button");
  const mapButton = document.getElementById("map-button");
  const filterButton = document.getElementById("filter-button");

  let am = ArrayManipulator([1, 2, 3, 4, 5]);
  const currentValue = document.getElementById("current-value");
  const result = document.getElementById("result");

  currentValue.innerHTML = `초기 배열 : ${JSON.stringify(am.getArray())}`;

  addButton.addEventListener("click", () => {
    am = am.addElement(generateRandomNumber());
    generateResultString(result, am.getArray());
  });

  deleteButton.addEventListener("click", () => {
    am = am.removeElement(0);
    generateResultString(result, am.getArray());
  });

  updateButton.addEventListener("click", () => {
    am = am.updateElement(0, generateRandomNumber());
    generateResultString(result, am.getArray());
  });

  mapButton.addEventListener("click", () => {
    am = am.mapElements((item) => item * 2);
    generateResultString(result, am.getArray());
  });

  filterButton.addEventListener("click", () => {
    am = am.filterElements((item) => item % 2 === 0);
    generateResultString(result, am.getArray());
  });
};

const run = () => {
  window.addEventListener("DOMContentLoaded", () => {
    App();
  });
};

run();

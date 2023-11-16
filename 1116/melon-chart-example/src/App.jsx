import "./App.css";
import { melonChart as melonChartItems } from "./assets/dummy/melonChart";
import { IoHeart } from "react-icons/io5";
import { useState } from "react";

// likeIds [1, 2, 3]만 state로 선언을 해서 좋아요가 들어있는지 없는지를 check를 하자?
function App() {
  // 컴포넌트가 화면에 다시 렌더링 된다는 것 > state, props가 변경되었을 때 발생

  const [items, setItems] = useState(
    melonChartItems.map((item) => ({ ...item, isLike: false }))
  );

  // 좋아요 기능을 넣기위한 고민..
  // 방법 1) likeIds라는 state를 선언해서 좋아요가 눌린 id를 저장해서 좋아요가 눌린 곡을 구분한다.
  //        단점:
  //        추가 계산 필요: UI를 렌더링할 때, 각 곡이 좋아요된 상태인지 확인하기 위해 likeIds 배열을 매번 확인해야 합니다.
  //        상태 동기화: 좋아요 상태와 차트 데이터가 분리되어 있기 때문에, 두 상태 간 동기화를 신경 써야 합니다.
  // 방법 2) melonChart의 각 곡에 isLike라는 프로퍼티를 추가해서 좋아요가 눌린 곡을 구분한다.
  //        단점: 좋아요 상태를 변경할 때마다 전체 차트 데이터를 업데이트해야 합니다
  function handleLike(index) {
    const newItems = [...items];
    newItems[index].isLike = true;
    setItems(newItems);
  }

  function handleRemoveLike(index) {
    const newItems = [...items];
    newItems[index].isLike = false;
    setItems(newItems);
  }

  // 문제 : counter를 업데이트 했을 뿐인데, 전체가 리랜더링이 되네?
  // 리렌더링이 되는 이유 : state나 props가 변경되었을 때,
  // 컴포넌트가 뭐야? 왜 그걸로 개발해야하는데? > react 구조상 리렌더링이 되는 이유가 위와 같기 때문에, 리렌더링이 필요한 부분만 리렌더링 하는것
  return (
    <>
      <Counter />
      <div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <img
            width="142"
            height="99"
            src="https://cdnimg.melon.co.kr/resource/image/web/common/logo_melon142x99.png"
            alt="Melon"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th style={commonStyle.tableHead}>순위</th>
              <th></th>
              <th style={commonStyle.tableHead}>곡정보</th>
              <th style={commonStyle.tableHead}>앨범</th>
              <th style={commonStyle.tableHead}>좋아요</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div
                      style={{
                        color: "#333",
                        fontSize: 18,
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {item.rank}
                    </div>
                  </td>
                  <td>
                    <img
                      style={{
                        width: 60,
                        height: 60,
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                      src={item.thumbnailUrl}
                      alt={item.title}
                    />
                  </td>
                  <td style={{ width: 250 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ color: "#333", fontSize: 14 }}>
                        {item.title}
                      </div>
                      <div style={{ color: "#969696", fontSize: 12 }}>
                        {item.artist}
                      </div>
                    </div>
                  </td>
                  <td style={{ width: 150 }}>
                    <div style={{ color: "#969696", fontSize: 14 }}>
                      {item.albumName}
                    </div>
                  </td>
                  <td>
                    <div
                      onClick={() => {
                        if (item.isLike) {
                          handleRemoveLike(index);
                        } else {
                          handleLike(index);
                        }
                      }}
                    >
                      {/* <IoHeart color={item.isLike ? 'red' : '#e0dfdf'} /> */}
                      {item.isLike && <IoHeart color="red" />}
                      {!item.isLike && <IoHeart color="#e0dfdf" />}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
const commonStyle = {
  tableHead: { textAlign: "center", fontSize: 13, color: "#606060" },
};

export default App;

import React from "react";
import "./App.css";
import { ChordPage } from "./component/ChordPage";
import { ScalePage } from "./component/ScalePage";

import SplitPane from "react-split-pane";

import "bootstrap/dist/css/bootstrap.css";
import "./SplitPane.css";

const App = () => {
  const [width, setWidth] = React.useState(document.body.clientWidth);
  const [leftWidth, setLeftWidth] = React.useState(
    parseInt(localStorage.getItem("splitPos"), 10) ||
      (document.body.clientWidth * 80) / 100
  );

  React.useEffect(() => {
    const onResize = () => {
      const delta = document.body.clientWidth - width;
      setWidth(document.body.clientWidth);
      setLeftWidth(leftWidth + delta / 2);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  });

  const onChangeSplitPaneSize = (size) => {
    localStorage.setItem("splitPos", size);
  };

  return (
    <div className="App" style={styles.base}>
      <SplitPane
        split="vertical"
        size={leftWidth}
        onChange={onChangeSplitPaneSize}
        maxSize={width - (width * 20) / 100}
        minSize={(width * 20) / 100}
      >
        <ChordPage />
        <ScalePage />
      </SplitPane>
    </div>
  );
};

export default App;

const styles = {
  base: {
    display: "flex",
    flexDirection: "row",
  },
  list: {
    marginTop: 20,
  },
  removeBtn: {
    float: "right",
  },
};

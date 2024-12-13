/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Grid.module.css";
import data from "./GridMetaInfo";
// 04-05-1996
const Grid = ({ grid,gridStatus,panelStatus }) => {

  function getStyleForStatus(cell,gridStatus){
    let number = cell;
    if(gridStatus.isSilverYog   &&(number=='8' || number == '5' || number == '2')){
      return {border:`2px solid #C0C0C0`};
    }
    else if(gridStatus.isGoldenYog  && (number=='4' || number == '5' || number == '6')){
      return {border:'2px solid #FFD700'};
    }
    else{
      return {border:`1px solid ${data[number].styles?.color}`};
    }
  }
  function getStyleForPanel(cell,panelStatus){
    let number = cell;
    const defaultScale = 1.1;
    if(panelStatus.type==='silver'  &&(number=='8' || number == '5' || number == '2')){
      return {
        scale:defaultScale,
        backgroundColor:"#C0C0C0",
      };
    }
    else if(panelStatus.type==='golden'  && (number=='4' || number == '5' || number == '6')){
      return {
        scale:defaultScale,
        backgroundColor:"#FFD700",
      };
    }
    else if(panelStatus.type==='mental' &&(number=='4' || number =='9' || number == '2')){
      return {
        scale:defaultScale,
        backgroundColor:"#ebf5a1",
      };
    }
    else if(panelStatus.type==='emotional' &&(number=='3' || number =='5' || number == '7')){
      return {
        scale:defaultScale,
        backgroundColor:"#97acf8",
      };
    }
    else if(panelStatus.type==='practical' &&(number=='8' || number =='1' || number == '6')){
      return {
        scale:defaultScale,
        backgroundColor:"#a1f5ac",
      };
    }
    else if(panelStatus.type==='thought' &&(number=='4' || number =='3' || number == '8')){
      return {
        scale:defaultScale,
        backgroundColor:"#b248f0",
      };
    }
    else if(panelStatus.type==='will' &&(number=='9' || number =='5' || number == '1')){
      return {
        scale:defaultScale,
        backgroundColor:"#fd8585",
      };
    }
    else if(panelStatus.type==='action' &&(number=='2' || number =='7' || number == '6')){
      return {
        scale:defaultScale,
        backgroundColor:"#fbb784",
      };
    }
    else{
      return {
        scale:1,
      };
    }
  }
  function getMissingNumberStyle(cell){
    return {color:`${cell[0]===0?'red':''}`};
  }
  // const [hoveredCell, setHoveredCell] = useState(null); // Track hovered cell
  const [hoveredCell, setHoveredCell] = useState(null); // Track hovered cell
  return (
    <>
      <div className={styles.gridContainer}>
        {grid.map((row, rowIndex) =>
          row.map((cell, cellIndex) => {
            const cellKey = `${rowIndex}-${cellIndex}`; // Unique key for each cell
            const isHovered = hoveredCell === cellKey && cell[0];

            return (
              <div
                className={styles.grid}
                key={cellKey}
                style={{
                  ...getStyleForStatus(cell[0], gridStatus),
                  ...getStyleForPanel(cell[0], panelStatus),
                }}
                onMouseEnter={() => setHoveredCell(cellKey)} // Set hovered cell
                onMouseLeave={() => setHoveredCell(null)} // Reset on mouse leave
              >
                {!isHovered ? (
                  <>
                    <div
                      className={styles["grid-t"]}
                      style={getMissingNumberStyle(cell)}
                    >
                      {data[cell[0]].info.about[0]}
                    </div>
                    <div
                      className={styles["grid-n"]}
                      style={getMissingNumberStyle(cell)}
                    >
                      {cell[0] || "?"}
                    </div>
                    <div className={styles["grid-f"]}>
                      <div
                        className={styles["box"]}
                        style={{
                          backgroundColor: data[cell[0]].styles.color,
                          color: data[cell[0]].styles?.textColor,
                        }}
                      >
                        x{cell[1]}
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                      className={styles["grid-t"]}
                      style={getMissingNumberStyle(cell)}
                    >
                      {data[cell[0]].info.about.map(about=>(<p key={about}>{about}</p>))}
                    </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Grid;

import React from "react";
import classes from "./ModalWindow.module.css";
import heart from "../../images/Heart.png";
import death from "../../images/Death.png";
import recovered from "../../images/Recovered.png";
import MyButton from "../UI/MyButton";

const ModalWindow = ({ selectedCountry, createModal }) => {
  if (!!selectedCountry) {
    return (
      <div className={[classes.myModal, classes.active].join(" ")}>
        <div className={classes.myModalContent}>
          <h1 className={classes.myModalTitle}>{selectedCountry.Country}</h1>
          <table>
            <tbody>
              <tr className={classes.myModalRow}>
                <td className={classes.myModalImg}>
                  <img style={{ width: 30 }} src={heart} alt='' />
                </td>
                <td className={classes.myModalTotal}>Total Confirmed</td>
                <td className={classes.myModalValue}>
                  {selectedCountry.TotalConfirmed}
                </td>
              </tr>

              <tr className={classes.myModalRow}>
                <td className={classes.myModalImg}>
                  <img style={{ width: 30 }} src={death} alt='' />
                </td>
                <td className={classes.myModalTotal}>Total Deaths</td>
                <td className={classes.myModalValue}>
                  {selectedCountry.TotalDeaths}
                </td>
              </tr>

              <tr className={classes.myModalRow}>
                <td className={classes.myModalImg}>
                  <img style={{ width: 22.5 }} src={recovered} alt='' />
                </td>
                <td className={classes.myModalTotal}>Total Recovered</td>
                <td className={classes.myModalValue}>
                  {selectedCountry.TotalRecovered}
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: "center" }}>
            <MyButton createModal={createModal}>OK</MyButton>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default ModalWindow;

import React from "react";
import styles from "./styles/campaigns.module.css";

const Campaigns = (props) => {
  const disabledClass = props.isActivated === false ? styles.disabled : "";
  return (
    <React.Fragment>
      <div className={disabledClass}>
        <div className="m-4 p-0" onClick={() => props.handleClick(props.id)}>
          <div className={`row ${styles.allContent}`}>
            <div className={`col-5 ${styles.imageContainer}`}>
              <img
                className={styles.image}
                src={props.image}
                alt={props.title}
              />
            </div>

            <div className={`col-7 ${styles.campaignContent}`}>
              <div className={styles.title}>
                <h5>{props.title}</h5>
              </div>
              <div className={styles.description}>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.bottomSection}>
              <div className={`col-7 ${styles.contentBottomSection}`}>
                <div className="row">
                  <div className={`col-7 ${styles.requiredAmount}`}>
                    <b>Required Amount:</b>
                    <p>Rs.{props.requiredAmount}</p>
                  </div>
                  <div className={`col-5  ${styles.DonateNow}`}>
                    <p className={styles.DonateNow_p}>Donate Now{" >"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Campaigns;

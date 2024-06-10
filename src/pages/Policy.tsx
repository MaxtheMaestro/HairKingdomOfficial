import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Policy.module.css";

const Policy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.policy}>
      <div className={styles.navigation}>
        <div className={styles.items}>
          <div className={styles.contactUs} onClick={onContactUsTextClick}>
            Contact us
          </div>
          <div className={styles.button}>
            <a
              className={styles.bookAnAppointment}
              href="https://TheHairKingdomOfficialT.as.me/"
              target="_blank"
            >
              Book an Appointment
            </a>
          </div>
        </div>
        <div className={styles.thehairkingdom}>TheHairKingdom</div>
        <img className={styles.img90121Icon} alt="" src="/img-9012-1@2x.png" />
        <div className={styles.gallery} onClick={onGalleryTextClick}>
          Gallery
        </div>
        <b className={styles.policy1}>Policy</b>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
      </div>
      <div className={styles.navigationFooter}>
        <img
          className={styles.buttonsIcon}
          alt=""
          src="/buttons--icon@2x.png"
        />
        <div className={styles.divider} />
        <div className={styles.contact} data-scroll-to="contactText">
          <span className={styles.contactTxt}>
            <b>Contact</b>
            <span className={styles.span}>{` `}</span>
          </span>
        </div>
        <a
          className={styles.thehairkingdomofficial}
          href={`https://www.instagram.com/thehairkingdom.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
          target="_blank"
        >
          thehairkingdom.official
        </a>
        <div className={styles.eMailThehairkingdomofficial}>
          E-mail: thehairkingdomofficial@gmail.com
        </div>
        <img className={styles.img90261Icon} alt="" src="/img-9026-1@2x.png" />
        <div className={styles.div}>(876) 384-5141/ (876) 326-1996</div>
        <b className={styles.location}>Location</b>
        <div className={styles.azPrestonHall}>AZ Preston Hall UWI Mona</div>
      </div>
      <div className={styles.policies}>Policies</div>
      <div className={styles.yourHairShouldContainer}>
        <ul className={styles.yourHairShouldBeFreshlyWa}>
          <li className={styles.yourHairShould}>
            Your Hair Should be Freshly washed and blown out with little to no
            products
          </li>
          <li className={styles.yourHairShould}>
            30% deposit to confirm Appointment
          </li>
          <li className={styles.yourHairShould}>
            Off Preston incur an additional cost based on location
          </li>
          <li className={styles.yourHairShould}>
            Same day appointments incurs an additional charge of $500
          </li>
        </ul>
      </div>
      <div className={styles.deposit}>Deposit</div>
      <div className={styles.depositUponBookingContainer}>
        <ul className={styles.yourHairShouldBeFreshlyWa}>
          <li className={styles.yourHairShould}>
            30% deposit upon booking to confirm Appointment
          </li>
          <li className={styles.yourHairShould}>
            Until then the appointment is pending
          </li>
          <li className={styles.yourHairShould}>
            After making the deposit send a receipt of the deposit
          </li>
          <li className={styles.yourHairShould}>
            After completing those few steps your appointment will be confirmed
            and we’re through until the day of the appointment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;

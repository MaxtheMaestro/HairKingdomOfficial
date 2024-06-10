import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
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

  const onPolicyTextClick = useCallback(() => {
    navigate("/policy");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.copyWrapper}>
        <div className={styles.copy}>
          <div className={styles.hairKingdom}>Hair Kingdom</div>
          <b className={styles.aWideVariety}>
            A Wide Variety of Styles Tailored To Your Liking
          </b>
        </div>
      </div>
      <div className={styles.heading} />
      <div
        className={styles.servicesOfferedFor}
      >{` Services Offered for Men & Women`}</div>
      <div className={styles.cards} />
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
        <b className={styles.home}>Home</b>
        <div className={styles.thehairkingdom}>TheHairKingdom</div>
        <img className={styles.img90121Icon} alt="" src="/img-9012-1@2x.png" />
        <div className={styles.gallery} onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className={styles.policy} onClick={onPolicyTextClick}>
          Policy
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
      <img className={styles.img90111Icon} alt="" src="/img-9011-1@2x.png" />
    </div>
  );
};

export default Homepage;

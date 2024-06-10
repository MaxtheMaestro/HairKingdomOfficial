import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Gallery.module.css";

const Gallery: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTheHairKingdomTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPolicyTextClick = useCallback(() => {
    navigate("/policy");
  }, [navigate]);

  return (
    <div className={styles.gallery}>
      <div className={styles.copyWrapper}>
        <div className={styles.copy} />
      </div>
      <div className={styles.theGallery}>The Gallery</div>
      <img
        className={styles.c0c0cdfE66e4d1cA00fD095636Icon}
        alt=""
        src="/0c0c0cdfe66e4d1ca00fd09563693e52-1@2x.png"
      />
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
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div
          className={styles.thehairkingdom}
          onClick={onTheHairKingdomTextClick}
        >
          TheHairKingdom
        </div>
        <img className={styles.img90121Icon} alt="" src="/img-9012-1@2x.png" />
        <b className={styles.gallery1}>Gallery</b>
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
        <div
          className={styles.contact}
          data-scroll-to="contactText"
        >{`Contact `}</div>
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
        <div className={styles.location}>Location</div>
        <div className={styles.azPrestonHall}>AZ Preston Hall UWI Mona</div>
      </div>
      <img
        className={styles.db6b2e329d241ce9c9e9daeb22Icon}
        alt=""
        src="/0db6b2e329d241ce9c9e9daeb2202fec-1@2x.png"
      />
      <img
        className={styles.a01e751129348c892d991f4525Icon}
        alt=""
        src="/1a01e751129348c892d991f452530354-1@2x.png"
      />
      <img
        className={styles.d2020adEa2d4358994bE5ad4c5Icon}
        alt=""
        src="/1d2020adea2d4358994be5ad4c5c85bb-1@2x.png"
      />
      <img
        className={styles.ad8ec7E2d04fbeB1721807d7a1Icon}
        alt=""
        src="/75ad8ec7e2d04fbeb1721807d7a12e71-1@2x.png"
      />
      <img
        className={styles.bdbd140674f1bBa9b8ebb20ce4Icon}
        alt=""
        src="/102bdbd140674f1bba9b8ebb20ce4da0-1@2x.png"
      />
      <img
        className={styles.aee36Fae6457e8a33F6cd3f3fdIcon}
        alt=""
        src="/498aee36fae6457e8a33f6cd3f3fda10-1@2x.png"
      />
      <img
        className={styles.fd3c1a4b9196044d07b62211aaIcon}
        alt=""
        src="/402610fd3c1a4b9196044d07b62211aa-1@2x.png"
      />
      <div className={styles.invisibleLocs}>Invisible Locs</div>
      <div className={styles.bobBoho}>Bob Boho</div>
      <div className={styles.naturalHairCornrow}>
        Natural Hair Cornrow Ponytail
      </div>
      <div className={styles.fulaniFlipBraids}>Fulani Flip Braids</div>
      <div className={styles.colouredBoho}>Coloured Boho</div>
      <div className={styles.largeKnotless}>Large Knotless</div>
      <div className={styles.bohoBraLength}>Boho Bra Length</div>
      <div className={styles.straightBackCurly}>Straight Back Curly Braids</div>
      <img
        className={styles.a181040b25b046aa949cA1fff3Icon}
        alt=""
        src="/a181040b25b046aa949ca1fff3ea7b28-1@2x.png"
      />
      <img
        className={styles.b54bc5aeF42942f797e38ec4b3Icon}
        alt=""
        src="/b54bc5aef42942f797e38ec4b30971e7-1@2x.png"
      />
      <img
        className={styles.bb785711D46242e1B1b323652dIcon}
        alt=""
        src="/bb785711d46242e1b1b323652d2b9f44-1@2x.png"
      />
      <img
        className={styles.d8ddbeb81d15438b84e5Bd9b43Icon}
        alt=""
        src="/d8ddbeb81d15438b84e5bd9b43ca699c-1@2x.png"
      />
      <img
        className={styles.ae09b15b29f147a6Ae58Cec610Icon}
        alt=""
        src="/ae09b15b29f147a6ae58cec6101c5ff2-1@2x.png"
      />
      <div className={styles.braidedLowPonytail}>Braided Low Ponytail</div>
      <div className={styles.spiderBraids}>Spider Braids</div>
      <div className={styles.boho}>Boho</div>
      <div className={styles.lemonadeFulani}>Lemonade Fulani</div>
      <div className={styles.lemonadeFunali}>Lemonade Funali</div>
    </div>
  );
};

export default Gallery;

import { FunctionComponent } from "react";
import styles from "./css/LandingPage.module.css";

export const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPageDiv}>
      <div className={styles.footerMaingroupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.div}>©</div>
        <b className={styles.subtitle}>Accenture 2022</b>
        <div className={styles.privacyPolicyDiv}>Privacy policy</div>
        <b className={styles.termsOfUse}>Terms of use</b>
      </div>
      <div className={styles.startupDesignFrame}>First log in tutorial</div>
      <div className={styles.youCanDecideWheth}>
        Your information will be migrated to our internal page for employees
      </div>
      <i className={styles.varietyOfDesigns}>
        My account will dissapear after being hired?
      </i>
      <div className={styles.theMostImportantP}>
        If the page seems to keep loading, try using a different browser,
        otherwise contact your people lead.
      </div>
      <i className={styles.twentyFiveAwesome}>My ID doesn’t exist</i>
      <div className={styles.theGeneratorAppIs}>
        Check your Accenture card, the one provided in your introduction
        course., There will be an 8 digits code at the top right of the card.
      </div>
      <i className={styles.howStartupFramewor}>
        Where can i get my registration ID?
      </i>
      <img
        className={styles.videoFaqPurple1Icon}
        alt=""
        src="video-faq-purple-1@2x.png"
      />
      <b className={styles.faqNewjoinersB}>
        <span>FaQ </span>
        <span className={styles.newJoinersSpan}>(New joiners)</span>
      </b>
      <div className={styles.lineDiv} />
      <div className={styles.groupDiv}>
        <img
          className={styles.aboutGrayBannerIcon}
          alt=""
          src="about-gray-banner.svg"
        />
        <div className={styles.descriptiontPhoto03Div}>
          <div className={styles.startupFrameworkIn}>
            We enable and accelerate an organization’s journey and internal
            transformation
          </div>
        </div>
        <div className={styles.aboutPhoto03Div}>
          <img className={styles.maskIcon} alt="" src="mask@2x.png" />
        </div>
        <div className={styles.descriptiontPhoto02Div}>
          <div className={styles.startupsCanSaveMo}>
            <p className={styles.takeALookToOur}>
              <span className={styles.takeALook}>Take a look to our </span>
            </p>
            <p className={styles.takeALookToOur}>
              <b className={styles.privacyStatementB}>Privacy statement</b>
              <span className={styles.takeALook}>, your </span>
            </p>
            <p className={styles.dataIsSecure}>
              <span className={styles.takeALook}>data is secure.</span>
            </p>
          </div>
        </div>
        <div className={styles.aboutPhoto02Div}>
          <img className={styles.maskIcon} alt="" src="mask1@2x.png" />
        </div>
        <div className={styles.descriptiontPhoto01Div}>
          <div className={styles.startupFrameworkIn}>
            <p className={styles.takeALookToOur}>
              Your profile helps to agilize
            </p>
            <p className={styles.takeALookToOur}>the process witout</p>
            <p className={styles.dataIsSecure}>excessive paperwork.</p>
          </div>
        </div>
        <div className={styles.aboutPhoto01Div}>
          <img className={styles.maskIcon} alt="" src="mask2@2x.png" />
        </div>
      </div>
      <img
        className={styles.imagePurpleWavesIcon}
        alt=""
        src="image-purple-waves@2x.png"
      />
      <div className={styles.groupDiv1}>
        <div className={styles.mainFreeTxtDiv}>
          <span>By signing up, you agree with our </span>
          <span className={styles.termsOfService}>Terms of Service</span>
        </div>
        <div className={styles.mainDescriptionDiv}>
          Either you are a HR professional or a new joiner, this page will be
          your perfect guide through the whole hiring process.
        </div>
        <b className={styles.mainTitleB}>Manage people, not numbers.</b>
        <div className={styles.buttonsDiv}>
          <div className={styles.purpleRectangleDiv} />
          <div className={styles.rhTextDiv}>HR Staff</div>
        </div>
        <div className={styles.buttonsDiv1}>
          <div className={styles.whiteRectangleDiv} />
          <div className={styles.newjointerTextDiv}>New joiner</div>
        </div>
      </div>
      <div className={styles.mainRibbonDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.mainRibbonHeaderDiv}>
          <div className={styles.aboutDiv}>About</div>
          <div className={styles.aboutDiv1}>Contact</div>
          <div className={styles.aboutDiv2}>FaQ</div>
          <div className={styles.homeDiv}>Home</div>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="rectangle-290@2x.png"
        />
      </div>
    </div>
  );
};

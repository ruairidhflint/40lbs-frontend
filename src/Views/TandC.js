import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <StyledTermContainer>
      <h3>Terms and Conditions</h3>
      <h6>Last Updated: 21/05/2020</h6>
      <p>
        Welcome to Forty Pounds! These terms and conditions outline the rules
        and regulations for the use of Forty Pounds's Website, located at
        forty-pounds.com.{' '}
      </p>

      <p>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Forty Pounds if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>

      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same.{' '}
      </p>

      <h4>Cookies</h4>
      <p>
        We employ the use of cookies. By accessing Forty Pounds, you agreed to
        use cookies in agreement with the Forty Pounds's Privacy Policy.
      </p>

      <p>
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </p>

      <h4>License</h4>
      <p>
        Unless otherwise stated, Forty Pounds and/or its licensors own the
        intellectual property rights for all material on Forty Pounds. All
        intellectual property rights are reserved. You may access this from
        Forty Pounds for your own personal use subjected to restrictions set in
        these terms and conditions.
      </p>

      <h4>You must not:</h4>
      <ul>
        <li>Republish material from Forty Pounds</li>
        <li>Sell, rent or sub-license material from Forty Pounds</li>
        <li>Reproduce, duplicate or copy material from Forty Pounds</li>
        <li>Redistribute content from Forty Pounds</li>
        <li>This Agreement shall begin on the date hereof.</li>
      </ul>

      <p>
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website. Forty
        Pounds does not filter, edit, publish or review Comments prior to their
        presence on the website. Comments do not reflect the views and opinions
        of Forty Pounds,its agents and/or affiliates. Comments reflect the views
        and opinions of the person who post their views and opinions. To the
        extent permitted by applicable laws, Forty Pounds shall not be liable
        for the Comments or for any liability, damages or expenses caused and/or
        suffered as a result of any use of and/or posting of and/or appearance
        of the Comments on this website.
      </p>

      <h4>iFrames</h4>
      <p>
        Without prior approval and written permission, you may not create frames
        around our Webpages that alter in any way the visual presentation or
        appearance of our Website.
      </p>

      <h4>Content Liability</h4>
      <p>
        We shall not be hold responsible for any content that appears on your
        Website. You agree to protect and defend us against all claims that is
        rising on your Website. No link(s) should appear on any Website that may
        be interpreted as libelous, obscene or criminal, or which infringes,
        otherwise violates, or advocates the infringement or other violation of,
        any third party rights.
      </p>

      <h4>Your Privacy</h4>
      <p>
        Please read <Link to="/privacy">Privacy Policy</Link>
      </p>

      <h4>Reservation of Rights</h4>
      <p>
        We reserve the right to request that you remove all links or any
        particular link to our Website. You approve to immediately remove all
        links to our Website upon request. We also reserve the right to amen
        these terms and conditions and it’s linking policy at any time. By
        continuously linking to our Website, you agree to be bound to and follow
        these linking terms and conditions.
      </p>

      <h4>Removal of links from our website</h4>
      <p>
        If you find any link on our Website that is offensive for any reason,
        you are free to contact and inform us any moment. We will consider
        requests to remove links but we are not obligated to or so or to respond
        to you directly.
      </p>

      <p>
        We do not ensure that the information on this website is correct, we do
        not warrant its completeness or accuracy; nor do we promise to ensure
        that the website remains available or that the material on the website
        is kept up to date.
      </p>

      <h4>Disclaimer</h4>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will:
      </p>

      <ul>
        <li>
          limit or exclude our or your liability for death or personal injury;
        </li>
        <li>
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
        </li>
        <li>
          limit any of our or your liabilities in any way that is not permitted
          under applicable law; or
        </li>
        <li>
          exclude any of our or your liabilities that may not be excluded under
          applicable law.
        </li>
        <li>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </li>
      </ul>

      <p>
        As long as the website and the information and services on the website
        are provided free of charge, we will not be liable for any loss or
        damage of any nature.
      </p>
    </StyledTermContainer>
  );
}

const StyledTermContainer = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h3 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    padding: 0;

    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }

  h4 {
    font-size: 1.7rem;
    font-weight: bolder;
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  h6 {
    font-style: italic;
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 2rem;
    padding-left: 0.5rem;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    margin-bottom: 0.9rem;
  }

  li {
    padding-left: 0.5rem;
    font-size: 1.3rem;
    line-height: 1.2;
    opacity: 0.8;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  p {
    padding-left: 0.5rem;
    max-width: 1080px;
    font-size: 1.3rem;
    line-height: 1.2;
    opacity: 0.8;
    margin-bottom: 0.9rem;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }

    a {
      transition: color 0.2s ease-in-out;
      color: ${(props) => props.theme.mainBlue};
      :hover {
        color: ${(props) => props.theme.green};
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

export default TermsAndConditions;

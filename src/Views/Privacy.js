import React from 'react';
import styled from 'styled-components';

function Privacy() {
  return (
    <StyledPrivacyContainer>
      <h3>Privacy Policy</h3>
      <h6>Last Updated: 21/05/2020</h6>
      <p>
        Your privacy is important to us. It is Forty Pounds' policy to respect
        your privacy regarding any information we may collect from you across
        our website,{' '}
        <a href="http://forty-pounds.com">http://forty-pounds.com</a>, and other
        sites we own and operate.
      </p>
      <p>
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </p>
      <p>
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorised access, disclosure, copying, use or modification.
      </p>

      <p>
        No data regarding weight, health or fitness is every shared with anybody
        else not is it analysed it any way. Your data is your data. The only way
        it can be shared is via our Social Media Sharing options provided to
        you.
      </p>
      <p>
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p>
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p>
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </p>
      <p>
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </p>
    </StyledPrivacyContainer>
  );
}

const StyledPrivacyContainer = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 3.5rem 2rem;

  h3 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    padding: 0;

    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }

  h6 {
    font-style: italic;
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 2rem;
  }

  p {
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

export default Privacy;

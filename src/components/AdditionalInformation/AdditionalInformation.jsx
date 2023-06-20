import { Outlet, Link } from 'react-router-dom';
import { Section } from './AdditionalInformation.styled';
export const AdditionalInformation = () => {
  return (
    <>
      <Section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Outlet />
    </>
  );
};

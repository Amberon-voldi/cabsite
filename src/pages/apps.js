import { useState }  from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import InfoText from '../components/IntroText';

export default function Apps() {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />


<DownloadApp tagline="Dowload and Book Cabs WIth Just Few Clicks" />
<InfoText title='Customer App' dis="CabYatri is your Partner for Outstation Rental, Taxi Service, Tourism and Transportation all over India. We ensure to simplify traveler’s life by getting them the best outstation cab deals in just a few minutes without even waiting.

We’ve empowered with thousands of taxi vendor as our travel partners to make outstation taxi booking easier and affordable for masses and positively changing the dynamics of the outstation travel market in India.

We, at CabYatri ensure that everyone of our customers gets the best of their money. In fact that is our actual goal and one of the key factor for starting a Cab Booking system like CabYatri itself. "/>
<DownloadApp tagline="Download And Accept Bookings" />
<InfoText title='Vendor App' dis="CabYatri is your Partner for Outstation Rental, Taxi Service, Tourism and Transportation all over India. We ensure to simplify traveler’s life by getting them the best outstation cab deals in just a few minutes without even waiting.

We’ve empowered with thousands of taxi vendor as our travel partners to make outstation taxi booking easier and affordable for masses and positively changing the dynamics of the outstation travel market in India.

We, at CabYatri ensure that everyone of our customers gets the best of their money. In fact that is our actual goal and one of the key factor for starting a Cab Booking system like CabYatri itself. "/>
<Footer />
    </>
  )
}

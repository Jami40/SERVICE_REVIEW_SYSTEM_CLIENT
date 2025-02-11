import React from 'react';
import Banner from '../Home/Banner';
import MeetOurPartners from '../Home/MeetOurPartners';
import GetUpdate from '../Home/GetUpdate';
import FAQSection from '../Home/FAQSection';
import HomesCard from '../Home/HomesCard';
import HappyCustomer from '../Home/HappyCustomer';

const HomeLayout = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <HomesCard></HomesCard>
            <MeetOurPartners></MeetOurPartners>
            <HappyCustomer></HappyCustomer>
            <FAQSection></FAQSection>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default HomeLayout;
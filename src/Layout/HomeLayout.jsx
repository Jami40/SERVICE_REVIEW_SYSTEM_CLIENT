import React from 'react';
import Banner from '../Home/Banner';
import MeetOurPartners from '../Home/MeetOurPartners';
import GetUpdate from '../Home/GetUpdate';
import FAQSection from '../Home/FAQSection';
import HomesCard from '../Home/HomesCard';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <HomesCard></HomesCard>
            <MeetOurPartners></MeetOurPartners>
            <FAQSection></FAQSection>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default HomeLayout;
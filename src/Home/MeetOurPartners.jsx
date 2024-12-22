import React from 'react';

const MeetOurPartners = () => {
    const partners = [
        {
            id: 1,
            name: "TechCorp Solutions",
            logo: "https://i.ibb.co.com/wRV0vGx/images-1.png", 
            description: "Leading provider of cloud infrastructure and enterprise solutions",
            category: "Technology Partner"
        },
        {
            id: 2,
            name: "InnovatePro",
            logo: "https://i.ibb.co.com/Fhj4qgY/1689513934790.jpg", 
            description: "Innovation consulting and digital transformation experts",
            category: "Strategic Partner"
        },
        {
            id: 3,
            name: "SecureNet",
            logo: "https://i.ibb.co.com/qsbYD0w/images-2.png",
            description: "Cybersecurity solutions and network protection services",
            category: "Security Partner"
        },
        {
            id: 4,
            name: "DataFlow Analytics",
            logo: "https://i.ibb.co.com/ZhVHKVJ/images-23.jpg",
            description: "Big data analytics and business intelligence solutions",
            category: "Analytics Partner"
        }
    ];

    return (
        <div className="bg-base-200 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Partners</h2>
                    <p className="text-lg text-base-content/70">
                        Collaborating with industry leaders to deliver excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner) => (
                        <div key={partner.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <figure className="px-6 pt-6">
                                <img 
                                    src={partner.logo} 
                                    alt={`${partner.name} logo`}
                                    className="rounded-xl h-32 object-contain"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <div className="badge badge-primary mb-2">{partner.category}</div>
                                <h3 className="card-title justify-center">{partner.name}</h3>
                                <p className="text-base-content/70">{partner.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurPartners;
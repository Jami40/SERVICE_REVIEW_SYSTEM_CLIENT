import React from 'react';

const MeetOurPartners = () => {
    const partners = [
        {
            id: 1,
            name: "TechCorp Solutions",
            logo: "https://i.ibb.co.com/wRV0vGx/images-1.png", 
            description: "Leading provider of cloud infrastructure and enterprise solutions",
            category: "Technical Partner"
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
        <div className="bg-gradient-to-b from-blue-50 to-white border-none py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Partners</h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <div 
                            key={partner.id} 
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-base-200 group animate-fadeIn"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <figure className="px-6 pt-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
                                <img 
                                    src={partner.logo} 
                                    alt={`${partner.name} logo`}
                                    className="rounded-xl h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                                />
                            </figure>
                            <div className="card-body ">
                                <div className="badge  badge-primary badge-lg font-semibold mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                    {partner.category}
                                </div>
                                <h3 className="card-title justify-center text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                                    {partner.name}
                                </h3>
                                <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                                    {partner.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurPartners;
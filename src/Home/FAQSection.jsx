import React from 'react';

const FAQSection = () => {
  return (
    <section className="border-none rounded-none my-0 bg-gradient-to-b from-blue-50 to-white">
      <div className="container py-10  mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="join join-vertical w-full space-y-3">
            {/* FAQ Item 1 */}
            <div className="collapse collapse-arrow join-item border border-blue-100 bg-white hover:bg-blue-50 transition-colors duration-200">
              <input type="radio" name="my-accordion-4" defaultChecked /> 
              <div className="collapse-title text-xl font-medium text-blue-800">
                How do I submit a review?
              </div>
              <div className="collapse-content text-gray-700">
                <p>To submit a review, simply log in to your account, find the service you want to review, and click on the 'Write a Review' button. Fill in your rating, comments, and any photos you'd like to share.</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="collapse collapse-arrow join-item border border-blue-100 bg-white hover:bg-blue-50 transition-colors duration-200">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blue-800">
                Are the reviews verified?
              </div>
              <div className="collapse-content text-gray-700">
                <p>Yes, all reviews are from verified customers who have used the service. We have a strict verification process to ensure authenticity and prevent fake reviews.</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="collapse collapse-arrow join-item border border-blue-100 bg-white hover:bg-blue-50 transition-colors duration-200">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blue-800">
                Can I edit my review after posting?
              </div>
              <div className="collapse-content text-gray-700">
                <p>Yes, you can edit your review within 48 hours of posting. After that, please contact our support team if you need to make any changes.</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="collapse collapse-arrow join-item border border-blue-100 bg-white hover:bg-blue-50 transition-colors duration-200">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blue-800">
                How is the overall rating calculated?
              </div>
              <div className="collapse-content text-gray-700">
                <p>The overall rating is calculated as an average of all verified reviews. We use a weighted system that considers factors like review recency and reviewer credibility.</p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="collapse collapse-arrow join-item border border-blue-100 bg-white hover:bg-blue-50 transition-colors duration-200">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blue-800">
                What if I see an inappropriate review?
              </div>
              <div className="collapse-content text-gray-700">
                <p>If you spot a review that violates our community guidelines, please click the 'Report' button next to the review. Our moderation team will investigate it promptly.</p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="collapse collapse-arrow join-item border border-blue-100 bg-white hover:bg-blue-50 transition-colors duration-200">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium text-blue-800">
                Can businesses respond to reviews?
              </div>
              <div className="collapse-content text-gray-700">
                <p>Yes, verified business owners can respond to any review on their service page. This helps maintain open communication between businesses and customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
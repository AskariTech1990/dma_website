import React, { useEffect } from "react";

const HowToReturn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">
        How to Return Your Scaffolding
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Follow these simple steps to return your scaffolding:
        </h3>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Step 1: Schedule a Pickup</strong>
            <p>
              Contact our customer service team to schedule a pickup. Provide
              your rental agreement number and preferred pickup date.
            </p>
          </li>
          <li>
            <strong>Step 2: Prepare the Scaffolding</strong>
            <p>
              Ensure all scaffolding components are clean and disassembled.
              Place all items in the provided return containers.
            </p>
          </li>
          <li>
            <strong>Step 3: Verify the Inventory</strong>
            <p>
              Check that all rented items are accounted for. Any missing or
              damaged items may incur additional charges.
            </p>
          </li>
          <li>
            <strong>Step 4: Complete the Return Form</strong>
            <p>
              Fill out the return form provided with your rental agreement.
              Include any notes regarding the condition of the scaffolding.
            </p>
          </li>
          <li>
            <strong>Step 5: Handover to Pickup Team</strong>
            <p>
              Our pickup team will arrive at the scheduled time. Handover the
              scaffolding and the completed return form to them.
            </p>
          </li>
          <li>
            <strong>Step 6: Receive Confirmation</strong>
            <p>
              Once we receive and inspect the scaffolding, we will send you a
              confirmation email. Any additional charges or refunds will be
              processed accordingly.
            </p>
          </li>
        </ol>
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2">Need Assistance?</h4>
          <p>
            If you have any questions or need help with the return process,
            please contact our customer support team at:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Visit us at : Thomas street, Sunshine Av., San Juan , Trinidad and
              Tobago.
            </li>
            <li>Email us at: dmag_07@yahoo.com</li>
            <li>Call us at: (868)- 674-6178</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToReturn;

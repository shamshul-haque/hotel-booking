import { Helmet } from "react-helmet";
import Title from "../components/sectionTitle/Title";

const FAQs = () => {
  return (
    <div className="py-10">
      <Helmet>
        <title>FAQs</title>
      </Helmet>
      <Title>Random Questions and Answer </Title>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How can I book a hotel room on your website?
        </div>
        <div className="collapse-content">
          <p>
            Booking a hotel room on our website is a straightforward and
            user-friendly process. To get started, visit our website and enter
            your desired destination, check-in date, and check-out date in the
            search bar on the homepage. After that, click the Search button to
            view the available hotels and room options for your chosen dates.
            You can then browse through the list of hotels and select the one
            that best suits your preferences. Once you have chosen a hotel,
            select your desired room type and click Book Now. Review the booking
            details, including the room rate and any additional services you may
            wish to add, and then click Proceed to Payment. At this point, you
            will be prompted to provide your payment information, and upon
            confirmation, you will receive a booking confirmation via email with
            all the essential details.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I modify or cancel my hotel booking?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you have the flexibility to modify or cancel your hotel booking
            with us. If you need to make changes to your reservation, such as
            adjusting your booking dates or room preferences, you can do so by
            logging into your account and accessing the My Bookings section.
            From there, select the booking you wish to modify and follow the
            prompts to make the necessary changes. Please note that
            modifications are subject to availability and any applicable terms
            and conditions. If you need to cancel your reservation, a similar
            process applies. Log in to your account, go to the My Bookings
            section, select the booking you want to cancel, and follow the
            cancellation procedure. It is important to be aware of our
            cancellation policy, as there may be fees associated with
            cancellations depending on the timing and the specific policies of
            the hotel you have booked.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Do I need to provide my credit card details when making a reservation?
          Is it safe?
        </div>
        <div className="collapse-content">
          <p>
            Yes, it is standard practice to provide your credit card details
            when making a hotel reservation. This is done to secure your booking
            and guarantee your selected room. We understand the importance of
            safeguarding your personal and financial information. Our website is
            equipped with industry-standard security protocols to ensure the
            safety of your data. We employ encryption and secure sockets layer
            (SSL) technology to guarantee that your information is transmitted
            securely and protected. Your privacy and data security are of utmost
            importance to us, and we take every precaution to secure your
            information during the booking process. You can trust that your
            sensitive data is treated with the highest level of security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

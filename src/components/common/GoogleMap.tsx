import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13289.833770421674!2d73.11605863085774!3d33.61935332255219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb9dfb0cf4d1%3A0x5f2005115a3036fb!2sPhase%204A%20Ghauri%20Town%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722263805338!5m2!1sen!2s"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;

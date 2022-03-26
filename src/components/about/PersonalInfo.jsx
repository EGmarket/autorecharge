import React from "react";

const personalDetails = [
  { title: "কমিশন কত ?", info: "সর্বোচ্চ কমিশন রেট" },
  { title: "বৈধতা ?", info: "হ্যা , আমরা বৈধভাবে ব্যবসা করি" },
  { title: "আপনারা কি কোম্পানি ?", info: "হ্যা, আমরা কোম্পানি ।" },
  { title: "আপনাদের সাথে যোগাযোগ কিভাবে করব?", info: "বাংলাদেশ থেকে WhatsApp এর মাধ্যমে আর দেশের বাহির থেকে সরাসরি কল করতে পারবেন" },
  { title: "ব্যালেন্স কিভাবে নিব ?", info: "আমাদের ব্যাংক একাউন্ট, বিকাশ , নগদ অথবা রকেট নম্বরে টাকা পাঠিয়ে ডিটেলস সহ যোগাযোগ করুন" },
  { title: "বাড়তি কোন চার্জ দিতে হবে ?", info: "না, যদি আপনি ব্যাংকে ট্রান্সফার করেন আর যদি মোবাইল ব্যাংকিং করে থাকেন তাহলে আপনাকে ক্যাশআউট চার্জ বহন করতে হবে" },
];

const aboutContentInfo = {
  meta: "আমাদের সম্পর্কে জানুন",
  title: "আপনি কি মোবাইল রিচার্জ API খুঁজছেন ? তাহলে আপনি সঠিক জায়গায় এসেছেন",
  subTitle: "আমরাই দিচ্ছি মোবাইল রিচার্জ API এবং মোবাইল রিচার্জ সার্ভার",
  description: `অনলাইনে অনেকেই শুধু হাই হ্যালো অথবা ফেস দেখে ব্যালেন্স নিচ্ছেন কিন্তু দিন শেষে এসে প্রতারিত হচ্ছেন কিন্তু আমরা আপনাকে দিব ১০০% নিশ্চয়তা প্রতারিত না হবার । আমাদের থেকে আপনি যদি রিচার্জ ব্যালেন্স নিন তাহলে আপনার প্রতারিত হবার বিন্দুমাত্র ভয় থাকবে না ইনশাহ-আল্লাহ`,
};

const PersonalInfo = () => {
  return (
    <div className="know_tm_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/about/1.jpg"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>{aboutContentInfo.meta}</span>
          <h3>{aboutContentInfo.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutContentInfo.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutContentInfo.description}</p>
        </div>
        <div className="know_tm_button">
          <a href="img/cv/1.jpg" download>
            Download Offer
          </a>
        </div>
      </div>
      {/* End .right */}
    </div>
  );
};

export default PersonalInfo;

import Link from "next/link";
import React from "react";

const Icons = () => {
  return (
    <div className=" bg-[#023e3e] text-yellow-600 " >
      <div className=" flex w-1/2 mx-auto items-center justify-between h-20  ">
        <a
          className=""
          href="https://www.facebook.com/people/Vacastay-Culture/pfbid02cuWkt6G1Q3prud3t5HpUtr9DmxTXE9AAUiVakr3u1mHB3RVYN4B75UEXcrx1jiQvl/"
          target="_blank"
        >
          <img
            src="https://dge74qcdvkym8.cloudfront.net/assets/facebook_icon_footer.svg"
            alt="facebook icon"
            className="social-icon"
          ></img>
        </a>
        <a className="" href="https://x.com/vacastay" target="_blank">
          <img
            src="https://dge74qcdvkym8.cloudfront.net/assets/x_icon_footer.svg"
            alt="twitter icon"
            className="social-icon"
          ></img>
        </a>
        <a
          className=""
          href="https://www.linkedin.com/company/vacastay-culture/"
          target="_blank"
        >
          <img
            src="https://dge74qcdvkym8.cloudfront.net/assets/linkedIn_icon_footer.svg"
            alt="linedin icon"
            className="social-icon"
          ></img>
        </a>
        <a
          className=""
          href="https://www.instagram.com/vacastay_culture/?hl=en"
          target="_blank"
        >
          <img
            src="https://dge74qcdvkym8.cloudfront.net/assets/instagram_icon_footer.svg"
            alt="instagram icon"
            className="social-icon"
          ></img>
        </a>
      </div>
      <div className=" w-1/2 mx-auto flex items-center justify-center ">
        <p className="whatsapp-contact-text">Contact us on</p>
        <a
          className="contact-us-link"
          href="https://wa.me/+918137936006"
          target="_blank"
        >
          <img
            className=""
            src="https://dge74qcdvkym8.cloudfront.net/assets/whatsapp.png"
            width="40px"
            alt="whatsapp icon"
          ></img>
        </a>
      </div>
      <div>
        <p>© Vacastay Culture 2024. All right reserved</p>
        <div className=" w-1/2 ml-auto flex justify-around " >
<Link  href="https://vacastay-culture.com/delete_user_instructions/delete_user_instructions.html" > User deletion instructions</Link>
<Link href='https://vacastay-culture.com/terms_and_conditions/terms_and_conditions.html' >Terms & Conditions </Link>
<Link href='https://vacastay-culture.com/privacy_policy/privacy_policy.html' >About Us</Link>
<Link href='https://vacastay-culture.com/cancellation_and_refund_policy/cancellation_and_refund_policy.html' >Cancellation & Refund Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Icons;

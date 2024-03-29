import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-800 text-white pt-8 px-4">
      <div className="lg:grid grid-cols-3 gap-6 pb-8  md:px-10 xl:px-3">
        <div className="col-span-1 pb-3 lg:pb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            maiores impedit quas maxime quod odit alias modi vero ut,
            consectetur dignissimos consequuntur, ex, optio tenetur incidunt
            quos veritatis rerum quo?
          </p>
        </div>
        <div className="col-span-2">
          <div className="md:flex justify-start items-center gap-4">
            <div class="flex items-center pt-3">
              <img
                src="https://i.ibb.co/r2RKv6X/letter.png"
                alt=""
                class="w-6 h-auto mr-2"
              />
              <p>kms@gmail.com</p>
            </div>
            <div class="flex items-center pt-3">
              <img
                src="https://i.ibb.co/8zV10hK/phone-call.png"
                alt=""
                class="w-6 h-auto mr-2"
              />
              <p>+8801627338828</p>
            </div>
          </div>
          <div class="flex items-center pt-3">
            <img
              src="https://i.ibb.co/8g8JDNS/circle.png"
              alt=""
              class="w-6 h-auto mr-2"
            />
            <p>
              Block: k, Road: 1, House: 19 Eastern Housing, Pallabi 2nd Phase,
              Mirpur 1216
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center md:flex items-center justify-between py-4 md:px-10 xl:px-3">
        <p class="mt-4 text-sm">© {currentYear} All rights reserved by K/M Association.</p>
        {/* Social Icons */}
        <div className="flex justify-center items-center pt-3 gap-2">
          <a href="https://www.facebook.com">
            <img
              src="https://i.ibb.co/3d2ygD0/facebook-4.png"
              alt="Facebook"
              className="w-6 h-auto mr-2"
            />
          </a>
          <a href="https://www.linkedin.com">
            <img
              src="https://i.ibb.co/pRp6105/linkedin-2.png
                "
              alt="LinkedIn"
              className="w-6 h-auto mr-2"
            />
          </a>
          <a href="https://twitter.com">
            <img
              src="https://i.ibb.co/MGRThhw/twitter-2.png"
              alt="Twitter"
              className="w-6 h-auto mr-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import logo from "/png100px/logo.png";
function Footer() {
  return (
    <footer className="bg-black border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link> <br />
            <p className="text-gray-500">Address:Kathmandu,Bagbazar(opposite of P.K campus)</p>
            <p className="text-gray-500">Mail:info.botaneducation@gmail.com</p>
            <p className="text-gray-500">Contacts:9840044318</p>
            <p className="text-gray-500">Whatsapp:9840044318</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Link shortcuts</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/BotanEducation"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/botaneducation/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://wa.me/9779840044323"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer">
                    whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <p className="hover:underline inline">
              BotanEducation
            </p>
            . All Rights Reserved.

          <p>  Developers details:Pratik Chapagain</p>
          <p>  Links:</p>
            <span><Link className="hover:underline" to="https://www.linkedin.com/in/pratik-chapagain-339053252/"> LinkedIn</Link>
            <p>gmail:prtkchapagain@gmail.com</p></span>
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="https://www.facebook.com/BotanEducation" className="text-gray-500 hover:text-gray-900">
            <img className="w-7" src="/Facebook.png" alt="facebook image" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="https://www.instagram.com/botaneducation/" className="text-gray-500">
            <img className="w-7" src="/instagram.png" alt="instagram image" />

              <span className="sr-only">instagram</span>
            </Link>

            <Link to="https://www.youtube.com/@BotanEducation" className="text-gray-500">
              <img className="w-7" src="/youtube.png" alt="youtube image" />
              <span className="sr-only">instagram</span>
            </Link>
            <Link to="https://www.tiktok.com/@botaneducation1?_t=8sg0fWNFOtd&_r=1" className="text-gray-500">
              <img className="w-9" src="/Tiktok.png" alt="youtube image" />
              <span className="sr-only">instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
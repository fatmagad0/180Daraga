import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare,} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white w-full border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-7 px-16 md:px-40">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <p className="text-center md:text-left">
            copyright © 2020-2025, 180Daraga. All Rights Reserved
          </p>
          <ul className="flex space-x-3 mt-4">
            <li>
              <a href="https://www.facebook.com/180Daraga" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare color="#1877F2" className="text-2xl transition-colors"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCy2pNwCwdCDBa557YSYzLOA" target="_blank" rel="noopener noreferrer" >
                <FaYoutube color="red" className="text-2xl transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/180Daraga" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare color="#44aff2" className="text-2xl transition-colors"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/180daraga/" target="_blank" rel="noopener noreferrer" >
                <FaInstagramSquare color="#E1306C" className="text-2xl transition-colors"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0 md:w-1/2">
          <p> Email:{" "}
            <a href="mailto:180daraga.org@gmail.com" className="underline text-white hover:text-blue-400" >
              180daraga.org@gmail.com
            </a>
          </p>
          <p> Tel:{" "}
            <a href="tel:+201040564660" className="underline text-white hover:text-blue-400" >
              +20 104 056 4660
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

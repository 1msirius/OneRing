import React from "react";
import Image from "next/image";
import { FaInstagram, FaSpotify, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";

const SocialIcon = ({ Icon, href }: { Icon: IconType; href: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center group"
    target="_blank"
  >
    <Icon
      size={25}
      className="text-black group-hover:text-[#B89943] transition-colors"
    />
  </a>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="mb-10">
        <Image
          src="/rings.png"
          alt="Rings"
          width={500}
          height={50}
          className="object-contain"
          priority
        />
      </div>

      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-5 flex items-center justify-center overflow-hidden">
        <Image
          src="/logo.png"
          alt="One Ring Band Logo"
          width={192}
          height={192}
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-2">
        <Image
          src="/onering.png"
          alt="One Ring"
          width={230}
          height={55}
          className="object-contain"
          priority
        />
      </div>

      <p className="text-center max-w-md mb-10 mt-5 elvish">
        One Ring is a rock and pop band crafting electrifying, AI-generated
        music with innovative, cutting- <br />
        edge technology.
      </p>

      <div className="flex space-x-4">
        <SocialIcon Icon={FaSpotify} href="#" />
        <SocialIcon
          Icon={FaYoutube}
          href="https://www.youtube.com/@oneringband"
        />
        <SocialIcon
          Icon={FaInstagram}
          href="https://www.instagram.com/oneringband"
        />
        <SocialIcon Icon={FaXTwitter} href="https://x.com/oneringband" />
        <SocialIcon Icon={FaDiscord} href="https://discord.gg/NeCrayw2nW" />
        <SocialIcon Icon={MdEmail} href="#" />
      </div>

      <div className="mt-14">
        <Image
          src="/rings.png"
          alt="Rings"
          width={500}
          height={50}
          className="object-contain rotate-180"
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;

import { Avatar } from "@/components/Avatar";
import BrazilIcon from "@/assets/profile/brazil.webp";
import { MdVerified } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Badge1 from "@/assets/profile/path16.webp";
import Badge2 from "@/assets/profile/booster1.webp";
import Badge3 from "@/assets/profile/Helper1.webp";
import Badge4 from "@/assets/profile/criador1.webp";
import { Container } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "@/services/apiClient";
import { useProfile } from "@/services/hooks/useProfile";
import useAccount from "@/services/hooks/useAccount";

type ProfileCardProps = {
  isPremium?: boolean;
  follow?: boolean;
};

export const ProfileCard = ({ isPremium, follow }: ProfileCardProps) => {
  const [isFollow, setIsFollow] = useState(follow ? true : false);

  return (
    <Container
      className="profileCard"
      bgUrl={
        isPremium
          ? "https://thumbs.gfycat.com/AdorableDapperGallowaycow-size_restricted.gif"
          : "undefined"
      }
    >
      <Avatar size={70} />

      <img
        className="profileCard--country"
        src={BrazilIcon}
        alt="brazil flag"
      />

      <h3 className="profileCard--username">
        <Link to="/profile">fllashii</Link>{" "}
        <MdVerified size={12} color="#4F4FCF" />
      </h3>

      <p className="profileCard--desc">
        Anos de experiência trazidos por meses de motivação!
      </p>

      <p className="profileCard--local">
        <FaMapMarkerAlt size={16} color="#87868B" />
        Santa Rosa, RS, Brasil
      </p>

      <div className="profileCard--badges">
        <img src={Badge1} alt="badge" />
        <img src={Badge2} alt="badge" />
        <img src={Badge3} alt="badge" />
        <img src={Badge4} alt="badge" />
      </div>

      <button
        className="profileCard--follow"
        onClick={() => setIsFollow(!isFollow)}
      >
        {isFollow ? "SEGUINDO" : "SEGUIR"}
      </button>
    </Container>
  );
};

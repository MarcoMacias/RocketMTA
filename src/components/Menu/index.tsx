import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import RocketLogo from "@/assets/@rocketlogo.webp";
import { ProfileDropdown } from "@/components/ProfileDropdown";

import { slide as StackMenu } from "react-burger-menu";
import { HiMenu, HiX } from "react-icons/hi";

type MenuProps = {
  showdropdown: boolean;
};

export const Menu = ({ showdropdown }: MenuProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <StackMenu
        customBurgerIcon={<HiMenu size={28} color="#f8f9fa" />}
        customCrossIcon={<HiX size={28} color="#f8f9fa" />}
      >
        <Link className="logo" to="/home">
          <img src={RocketLogo} alt="rocket brand" />
        </Link>

        <NavLink to="/home">Home</NavLink>

        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/marktplace">Marketplace</NavLink>
        <NavLink to="/support">Suporte</NavLink>
        <NavLink to="/premium">Premium</NavLink>
      </StackMenu>

      <Link className="logo" to="/">
        <img src={RocketLogo} alt="rocket brand" />
      </Link>

      <nav>
        <NavLink to="/home">Home</NavLink>

        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/marktplace">Marketplace</NavLink>
        <NavLink to="/support">Suporte</NavLink>
        <NavLink to="/premium">Premium</NavLink>
      </nav>

      {showdropdown ? (
        <ProfileDropdown />
      ) : (
        <div className="account">
          <p onClick={() => navigate("/home")}>ENTRAR</p>
          <button onClick={() => navigate("/register")}>CRIAR CONTA</button>
        </div>
      )}
    </Container>
  );
};

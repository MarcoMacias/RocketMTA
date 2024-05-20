import { BiBell } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Avatar } from "@/components/Avatar";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge, ClickAwayListener } from "@mui/material";
import AuthContext, { signOut } from "@/context/AuthContext";
import useAccount from "@/services/hooks/useAccount";
import { Button } from "../Button";
import { FaUserAlt } from "react-icons/fa";

export const ProfileDropdown = () => {
  const { user } = useAccount();
  const navigate = useNavigate();
  const [isDropOpen, setIsDropOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsDropOpen(false);
  };

  const handleAuth = () => {
    signOut();
  };

  return (
    <Container className="profile">
      <div className="bell">
        <button>
          <Badge color="primary">
            <BiBell size={20} color="#B1B1C6" />
          </Badge>
        </button>
      </div>
      <div className="dropdown">
        <button onClick={() => setIsDropOpen(!isDropOpen)}>
          <h3>{user.nickname}</h3>
          <Avatar size={40} ident={user.slug} />
          <IoMdArrowDropdown
            size={24}
            color="#B1B1C6"
            className={isDropOpen ? "open" : undefined}
          />
        </button>
        <AnimatePresence>
          {isDropOpen && (
            <ClickAwayListener onClickAway={() => setIsDropOpen(false)}>
              <motion.div
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeIn", duration: 0.4 }}
                className="dropdown--menu"
              >
                <p>Signed as: {user.username}</p>

                <span className="divisor" />

                <button onClick={() => handleNavigate("/me/" + user.slug)}>
                  Meu Perfil
                </button>

                <button>Minhas Conquistas</button>

                <span className="divisor" />

                <button className="signOut" onClick={() => handleAuth()}>
                  Desconectar
                </button>
              </motion.div>
            </ClickAwayListener>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

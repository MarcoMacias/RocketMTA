import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "@/components/Menu";
import { Container, Sticky } from "./styles";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import useAccount from "@/services/hooks/useAccount";
import dayjs from "dayjs";
import { ProfileDropdown } from "@/components/ProfileDropdown";

export const WithMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [isStickyVisible, setShowSticky] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAccount();

  function hasDatePassed(timestamp: number): boolean {
    return dayjs().isAfter(dayjs.unix(timestamp));
  }

  const handleScroll = () => {
    const sticky = menuRef.current?.offsetTop;

    if (window.scrollY > sticky!) {
      menuRef.current?.classList.add("sticky");
      mainRef.current?.classList.add("sticky");
    } else {
      menuRef.current?.classList.remove("sticky");
      mainRef.current?.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());

    return () => {
      window.addEventListener("scroll", () => handleScroll());
    };
  }, []);

  useEffect(() => {
    if (location.pathname == "/challenges/whitelist") {
      switch (user.status) {
        case "APROVADO":
          return navigate("/home");
        case "TRIAGEM":
          return navigate("/home");
        case "ENTREVISTADO":
          return navigate("/home");
        default:
          break;
      }

      return setShowSticky(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Container ref={mainRef} className={`${isStickyVisible && "stickyWl"}`}>
        <div className="menu" ref={menuRef}>
          <Menu showdropdown />

          {isStickyVisible && !user.wlstatus && (
            <StickyBar
              msg="Você ainda precisa fazer sua whitelist, clique para aqui para"
              button={true}
              value="Fazer minha whitelist"
              action={() => navigate("/challenges/whitelist")}
              reverseState={setShowSticky}
            />
          )}

          {isStickyVisible && user.wlstatus === "TRIAGEM" && (
            <StickyBar
              msg={`Hey ${user.nickname}, a sua whitelist está sob análise, fique atento em seu email nos proximos 4/5 dias.`}
              color={"#477ac7"}
              reverseState={setShowSticky}
              value="Fazer minha whitelist"
            />
          )}

          {isStickyVisible &&
          user.wlstatus === "REPROVADO" &&
          hasDatePassed(user.timeout) ? (
            <StickyBar
              msg="Você ainda precisa fazer sua whitelist, clique para aqui para"
              button={true}
              value="Fazer minha whitelist"
              action={() => navigate("/challenges/whitelist")}
              reverseState={setShowSticky}
            />
          ) : (
            !hasDatePassed(user.timeout) && (
              <StickyBar
                msg={`Oh não! Você foi reprovado na whitelist. Você poderá fazer ela novamente em algumas horas.`}
                color={"#f59e0b"}
                reverseState={setShowSticky}
                value="Fazer minha whitelist"
              />
            )
          )}
        </div>

        <Outlet />
      </Container>
    </>
  );
};

type StickyProps = {
  msg: string;
  button?: boolean;
  value?: string;
  color?: string;
  reverseState: React.SetStateAction<any>;

  action?: () => void;
};

const StickyBar = ({
  msg,
  button,
  value,
  action,
  color,
  reverseState,
}: StickyProps) => {
  return (
    <Sticky style={{ background: color }}>
      <p>{msg}</p>
      {button && (
        <button className="wlBtn" onClick={action}>
          {value}
        </button>
      )}

      <button className="close" onClick={() => reverseState(false)}>
        <MdOutlineClose size={24} color="white" />
      </button>
    </Sticky>
  );
};

import { Container } from "./styles";
import React, { useRef, useState } from "react";

import AvatarImg from "@/assets/avatar49.webp";
import { Popover, Skeleton } from "@mui/material";
import { ProfileCard } from "@/components/ProfileCard";
import { createGlobalStyle } from "styled-components";
import { useProfile } from "@/services/hooks/useProfile";

type avatarProps = {
  size: number;
  source?: string;
  ident?: string;
  showProfileCard?: boolean;
};

export const Avatar = ({
  ident,
  size,
  source,
  showProfileCard,
}: avatarProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = Boolean(anchorEl) ? "simple-popover" : undefined;

  return (
    <>
      <Container
        img=""
        aria-describedby={id}
        size={size}
        className={`avatar ${showProfileCard && "click"}`}
        onClick={handleClick}
      >
        {ident ? (
          <ByIdent size={size} ident={ident} />
        ) : source ? (
          <img src={source} alt="profile image" />
        ) : (
          <img src={AvatarImg} alt="profile image" />
        )}
      </Container>

      {showProfileCard && (
        <Popover
          id={id}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <ProfileCard isPremium={false} />
        </Popover>
      )}

      <GlobalStyles />
    </>
  );
};

type byIdentProps = {
  size: number;
  ident: string;
};

const ByIdent = ({ size, ident }: byIdentProps) => {
  const { profile, error, isValidating } = useProfile(ident);

  return (
    <>
      {isValidating ? (
        <Skeleton
          variant="circular"
          width={size}
          sx={{ bgcolor: "#202024", marginLeft: "-10px", marginTop: "-10px" }}
          animation={"wave"}
          height={size}
        />
      ) : error ? (
        <img src={AvatarImg} alt="profile image" />
      ) : (
        <img src={profile.avatar} alt="profile image" />
      )}
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  .MuiPaper-root {
    margin-top: 16px;
    background: none !important;
    overflow: visible;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
  }
`;

import { Container } from "./styles";
import { Avatar } from "@/components/Avatar";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaCommentAlt, FaHeart, FaRegHeart, FaRegSmile } from "react-icons/fa";
import { MdImage } from "react-icons/md";
import useAccount from "@/services/hooks/useAccount";
import { useProfile } from "@/services/hooks/useProfile";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";

TimeAgo.addLocale(pt);

type PostEntityProps = {
  _id?: string;
  authorId: string;
  published?: string;
  content: string;
  createdAt: Date;
};

export const Post = ({
  _id,
  authorId,
  published,
  content,
  createdAt,
}: PostEntityProps) => {
  const [isLiked, setIsliked] = useState(true);
  const [openComments, setOpenComments] = useState({
    open: false,
    size: 4,
    max: 9,
  });
  const { user } = useAccount();
  const { profile } = useProfile(authorId);
  const timeAgo = new TimeAgo("pt-BR");

  if (!profile) {
    return <>Carregando</>;
  }

  if (!user) {
    return <h1>Carregando</h1>;
  }

  const handleMoreComments = () => {
    if (openComments.size >= openComments.max) {
      setOpenComments({ ...openComments, open: false, size: 4 });
    } else {
      let lenghtDiff = openComments.max - openComments.size;
      setOpenComments({
        ...openComments,
        size:
          lenghtDiff > 2
            ? openComments.size + 2
            : openComments.size + lenghtDiff,
      });
    }
  };

  return (
    <Container>
      <div className="head">
        <div className="head--userClick">
          <Avatar size={48} ident={authorId} />

          <div className="head--middle">
            <h4>{profile.nickname}</h4>
            <small>{timeAgo.format(createdAt) ?? "Agora mesmo"}</small>
          </div>
        </div>

        <button>
          <BsThreeDots size={20} color="#495057" />
        </button>
      </div>

      <p className="post--desc">{content}</p>

      {/* <img
        className="post--img"
        src="https://cdn.discordapp.com/attachments/1016391273499857006/1029375385185554432/6.png"
      /> */}

      <div className="post--actions">
        <button onClick={() => setIsliked(!isLiked)}>
          {isLiked ? (
            <FaHeart className="liked" size={18} color="#D73628" />
          ) : (
            <FaRegHeart size={18} color="#585858" />
          )}
          132
        </button>

        <button
          onClick={() =>
            setOpenComments({ ...openComments, open: !openComments.open })
          }
        >
          <FaCommentAlt size={14} color="#585858" style={{ marginTop: 2 }} />4
        </button>
      </div>

      {openComments.open && (
        <div className="commentList">
          {[...Array(openComments.size)].map(() => {
            return <CommentItem />;
          })}

          <button onClick={handleMoreComments} className="more">
            {openComments.size >= openComments.max
              ? "Recolher"
              : "Mostrar mais"}
          </button>
        </div>
      )}

      <div className="post--comment">
        <Avatar ident={user.slug} size={40} />

        <div className="comment--input">
          <input type="text" placeholder="Adicionar um comentario.." />

          <button>
            <FaRegSmile size={18} color="#585858" />
          </button>

          <button>
            <MdImage size={20} color="#585858" />
          </button>
        </div>
      </div>
    </Container>
  );
};

const CommentItem = () => {
  return (
    <div className="comment--item">
      <Avatar size={32} />

      <div className="wrap">
        <div className="head">
          <div>
            <strong className="username">flashii</strong>
            <small className="timeAgo">Há 5 dias atrás</small>
          </div>

          <button>
            <BsThreeDots color="#5B5C62" size={18} />
          </button>
        </div>

        <p className="content">
          Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response
          in Kerala with Chief Minister Shri Pinarayi Vijayan and Health
          Minister of Kerala, Ms. Veena George.…
        </p>
      </div>
    </div>
  );
};

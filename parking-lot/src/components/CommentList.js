import React from 'react';
import CommentCard from './CommentCard';
import { Container } from 'reactstrap';
import "../styles/Comment.css";

export default function CommentList({ list }) {
  
  return(
    <Container>
      <ul className="comment-list">
        {
          list.map(card => {
            return(
              <li>
                <CommentCard comment={card} />
              </li>
            );
          })
        }
      </ul>
    </Container>
  );
}

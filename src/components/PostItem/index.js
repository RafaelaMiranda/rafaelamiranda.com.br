import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug, 
  background,
  category, 
  date, 
  TimeToRead, 
  title, 
  description
}) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {TimeToRead} min de leitura</S.PostItemDate>
        <S.PostItemTitle>
            {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
    slug: propTypes.string.isRequired,
    background: propTypes.string,
    category: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    TimeToRead: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}

export default PostItem
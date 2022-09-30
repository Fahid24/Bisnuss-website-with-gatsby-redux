import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { fetchPost } from "./postSlice"

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 30px;
  gap: 20px;
  justify-items: center;
  text-align: center;
`

const Article = styled.article`
  border-radius: 20px;
  background-color: lightPink;
  padding: 5px;
`

const Button = styled.button`
  border: none;
  margin: 5px;
  padding: 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: small;
  background-color: #fb2f79;
  border-radius: 20px;
  width: auto;
  height: auto;
  color: white;
  cursor: pointer;
`

const PostView = () => {
  const { post, error } = useSelector(state => state.post)
  const [number, setNumber] = useState(6)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPost())
  }, [post])

  const somePost = [...post.slice(0, number)]

  const handleIncrease = () => {
    setNumber(number + 6)
  }
  const handleDecrease = () => {
    setNumber(number - 6)
  }

  return (
    <div>
      {error && <h3>{error}</h3>}

      <Section>
        {post &&
          somePost.map(p => (
            <Article key={p.id}>
              <h3 className="accent">{p.title}</h3>
              <p>{p.body}</p>
            </Article>
          ))}
      </Section>
      {somePost.length > 6 && (
        <Button onClick={() => handleDecrease()}>{"<<"}previews</Button>
      )}

      {somePost.length < post.length && (
        <Button onClick={() => handleIncrease()}>see more{">>"}</Button>
      )}
    </div>
  )
}

export default PostView

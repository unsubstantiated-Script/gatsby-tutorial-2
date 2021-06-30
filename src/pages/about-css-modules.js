import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Nam Bill"
        avatar="https://www.fillmurray.com/400/400"
        excerpt="I'm Nam Bill. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Aquatic Bill"
        avatar="https://www.fillmurray.com/600/600"
        excerpt="I'm Aquatic Bill. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}

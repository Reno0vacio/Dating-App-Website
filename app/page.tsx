import * as motion from "motion/react-client"
import "./pagestyle.css"
import { easeInOut } from "motion"
import Container from "./components/Conatiner"
export default function Home() {

  const ball = {
    marginTop: "400px",
    width: "100vh",
    height: 500,
    backgroundColor: "green",
  }
  const text = {
    fontSize: 32
  }
  function EnterAnimation() {
    return <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }
      }}
      style={ball} />
  }


  return (
    <main style={{ display: "flex", flexDirection: 'column' }} >
      {/* <EnterAnimation />
      <EnterAnimation />
      <EnterAnimation /> */}
      <div style={{ height: 100, width: 11, backgroundColor: 'red' }}>
      </div>
      <motion.h1
        style={{alignSelf: 'center', overflow: "hidden", marginTop: 100 }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{duration: 3, ease: "easeInOut"}}
        >
        Dating apps suck
      </motion.h1>
      <Container />

    </main>
  );
}

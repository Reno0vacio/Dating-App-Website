import * as motion from "motion/react-client"
export default function Home() {
  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#ff1515ff",
    borderRadius: "50%",
  }
  function EnterAnimation() {
    return <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{duration: 0.4,
        scale: {type: "spring", visualDuration: 0.4, bounce: 0.5}
      }}
      style={ball} />
  }


  return (
    <main style={{ display: "flex",height: 500, width: 600, justifyContent: 'center', alignItems: 'center'}} >
      <EnterAnimation />
      <div>
        <h2 style={{justifyContent: 'center'}}>Why know what you want</h2>
      </div>
    </main>
  );
}

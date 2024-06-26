import Link from "next/link"

const HomePage = () => {
  return (
  <div>
    <h1>Welcome...</h1>
    <Link href="/properties">show properties</Link>
  </div>
  )
};

export default HomePage; 
import { Banners, Collections } from "../components/";

const Home: React.FC = () => {
  return (
    <main className="-z-10">
      <Banners />
      <Collections />
    </main>
  )
}

export default Home;
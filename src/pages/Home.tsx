import { Banners, Collections, Products } from "../components/";

const Home: React.FC = () => {
  return (
    <main className="-z-10">
      <Banners />
      <Collections />
      <Products />
    </main>
  )
}

export default Home;
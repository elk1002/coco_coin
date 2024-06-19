import MainContainer from "./components/layout/container";
import HomeLayout from "./components/layout/homeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <MainContainer className="flex flex-col items-center justify-between p-24">
        <h1 className="text-black">Coco Tala</h1>
      </MainContainer>
    </HomeLayout>
  );
}

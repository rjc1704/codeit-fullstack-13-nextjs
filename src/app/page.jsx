import CatCardList from "@/components/ui/CatCardList";
import PageContainer from "@/components/common/PageContainer";
import Image from "next/image";
import staticCat from "../../public/sampleCat.jpg";
import { getPlaiceholder } from "plaiceholder";

async function getCats() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}&limit=8&has_breeds=1`,
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default async function Home() {
  const cats = await getCats();

  // 외부 이미지 URL
  const imageUrl =
    "https://res.cloudinary.com/dv8ifoygg/image/upload/v1706786484/cat7_xdqpdr.jpg";

  // 이미지 데이터 가져오기
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();

  // Plaiceholder를 사용하여 blur 데이터 생성
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <PageContainer title="The Cat API">
      <div className="relative mx-auto w-[300px] h-[300px] flex justify-center items-center mb-4">
        <Image
          src={imageUrl}
          alt="The Cat API"
          fill
          sizes="300px"
          placeholder="blur"
          className="object-cover"
          blurDataURL={base64}
        />
      </div>
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}

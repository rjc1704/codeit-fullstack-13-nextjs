import CatCardList from "@/components/ui/CatCardList";
import PageContainer from "@/components/common/PageContainer";
import { getCats } from "@/lib/services/catApi";

export default async function Home() {
  const cats = await getCats();

  return (
    <PageContainer title="The Cat API">
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}

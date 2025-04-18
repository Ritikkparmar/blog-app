import EditArticlePage from "@/components/articles/edit-article-page";
import { prisma } from "@/lib/prisma";
import React from "react";

type EditArticlePageProps = {
  params: Promise<{ id: string }>;
};
const page: React.FC<EditArticlePageProps> = async ({ params }) => {
    const id = (await params).id;
     const article = await prisma.articles.findUnique({
        where:{id}
     })
     if(!article) {
        return <div>Article not found</div>
     }
  return (
    <div>
      <EditArticlePage article ={article} />
    </div>
  );
};

export default page;

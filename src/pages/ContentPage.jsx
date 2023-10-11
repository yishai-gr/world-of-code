import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContentPage() {
  const { category, contentId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    // טוען את המידע מהקובץ JSON באמצעות fetch
    fetch(`/data/${category}.json`)
      .then((response) => response.json())
      .then((data) => {
        // מוצא את הקורס לפי ה-ID מה-URL
        const selectedContent = data.find((c) => c.id === parseInt(contentId));
        setContent(selectedContent);
      })
      .catch((error) => {
        console.error("שגיאה בטעינת הקובץ JSON:", error);
      });
  }, [contentId, category]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-page">
      <img src={content.image} alt={content.heading} />
      <div className="tag" hidden>
        {content.tag}
      </div>
      <h2>{content.heading}</h2>
      <p>{content.description}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        dolorem temporibus aut in libero, assumenda ex, facere, non neque illo
        quisquam hic voluptatem quo ipsam ut dicta a laborum et error quis
        blanditiis! Numquam eveniet voluptatem, suscipit libero id labore
        nesciunt commodi porro veniam necessitatibus doloribus amet eius
        mollitia! Sapiente quo consequuntur, dolorem dignissimos dolorum fugit
        ex repudiandae vitae magnam delectus! Quas dicta fugiat sit cumque odio
        totam facilis iure, maiores quaerat maxime doloremque recusandae ullam,
        eligendi quidem nobis. Velit quasi at vitae non nam. Possimus magni
        distinctio nesciunt eligendi repudiandae, maiores cupiditate dolores,
        consectetur quos laboriosam earum obcaecati ut aspernatur? Officiis
        laborum magnam autem, numquam, amet nam atque cum, incidunt ut voluptate
        saepe mollitia ducimus consequatur aspernatur? Doloribus ab eveniet
        molestiae ad sequi ducimus necessitatibus nisi accusantium, nihil, atque
        blanditiis delectus vitae porro perferendis at reprehenderit
        consequuntur laboriosam soluta error fugit! Eligendi culpa ut asperiores
        maiores, nisi voluptate dolorem tenetur deserunt. Perspiciatis
        dignissimos incidunt, aperiam illo nesciunt tempore quasi quos dolorum,
        eius deserunt explicabo, doloremque sunt tempora nihil animi nulla
        commodi architecto beatae officiis quia dolores eveniet temporibus iure.
        Sapiente assumenda reiciendis dolore beatae natus delectus voluptate
        inventore exercitationem, illum pariatur quasi aliquam dolorum earum
        harum est ullam quia.
      </p>
    </div>
  );
}

export default ContentPage;

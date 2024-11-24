import { useEffect, useState } from "react";
import SectionCategoryItem from "./SectionCategoryItem";
import { useParams } from "react-router-dom";
import axios from "axios";

function SectionCatogory() {
  const [loading, setIsLoading] = useState(true);
  const { slugCategory } = useParams();
  const [stories, setStories] = useState([]);
  const [nameCategory, setNameCategory] = useState(null);

  useEffect(() => {
    let isMounted = true;

    axios
      .get(`https://truyen.ntu264.vpsttt.vn/api/category/${slugCategory}`)
      .then((res) => {
        if (isMounted) {
          setStories(res.data.body.data.data);
          setIsLoading(false);
          setNameCategory(res.data.body.category);
        }
      })
      .catch((err) => {
        console.error("Error fetching category data:", err),
          setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slugCategory]);

  if (loading) {
    return (
      <div className="container">
        <h4>Loading category...</h4>
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className="container">
        <h4>Không có thể loại truyện này.</h4>
      </div>
    );
  }
  const cleanDescription = stories[0].description
    ? stories[0].description
        .replace(/<p>/g, "<span>")
        .replace(/<\/p>/g, "</span>")
    : "Mô tả không có sẵn.";
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          {/* SECTION CATEGORY LIST */}
          <div className="col-12 col-md-8 col-lg-9 mb-3">
            <div className="head-title-global d-flex justify-content-between mb-2">
              <div className="col-12 col-md-12 col-lg-12 head-title-global__left d-flex">
                <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                  <span
                    href="#"
                    className="d-block text-decoration-none text-dark fs-4 category-name"
                    title="Ngôn Tình"
                  >
                    Thể Loại Truyện: {nameCategory}
                  </span>
                </h2>
              </div>
            </div>
            <div className="list-story-in-category section-stories-list">
              {stories.map((story) => (
                <SectionCategoryItem key={story.id} {...story} />
              ))}
            </div>
          </div>
          {/* SECTION CATEGORY DESCRIPTION */}
          <div className="col-12 col-md-4 col-lg-3 sticky-md-top">
            <div className="category-description bg-light p-2 rounded mb-3 card-custom">
              <p className="mb-0 text-secondary"></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: cleanDescription,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCatogory;

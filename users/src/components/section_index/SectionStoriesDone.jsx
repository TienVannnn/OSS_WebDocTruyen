import { DataStoryDoneItem } from "./DataItem";
import SectionStoriesDoneItem from "./SectionStoriesDoneItem";

function SectionStoryDone() {
  return (
    <>
      <div className="section-stories-full mb-3 mt-3">
        <div className="container">
          <div className="row">
            <div className="head-title-global d-flex justify-content-between mb-2">
              <div className="col-12 col-md-4 head-title-global__left d-flex">
                <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                  <span
                    className="d-block text-decoration-none text-dark fs-4 title-head-name"
                    title="Truyện đã hoàn thành"
                  >
                    Truyện đã hoàn thành
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="section-stories-full__list">
                {DataStoryDoneItem.map((data) => {
                  return <SectionStoriesDoneItem key={data.id} {...data} />;
                })}
              </div>
              {/* <SectionStoryDoneList DataStoryDoneItem={DataStoryDoneItem} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionStoryDone;
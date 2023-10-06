import React from 'react';


const News = () => {
  const newsItems = [
    {
      title: "'Bố già' của Trấn Thành lọt Top 30 phim doanh thu cao nhất thế giới",
      date: "25/04/2021",
      content: "Với doanh thu 16,9 triệu USD, 'Bố già' của Trấn Thành là phim Việt duy nhất có mặt trong danh sách những phim chiếu rạp 2021 có doanh thu cao nhất toàn cầu.Tính đến ngày 25-4, trang thống kê doanh thu phim chiếu rạp toàn cầu Box Office Mojo, bộ phim Bố già đạt 16,934,732 USD (khoảng 390 tỉ đồng) đứng thứ 27 trong bảng xếp hạng.Với vị trí này, Bố già chỉ đứng sau những bom tấn quốc tế ăn khách nhất đến từ Hollywood như: Godzilla vs. Kong, Raya and the Last Dragon, Endgames, Mortal Kombat, Nobody... "
    },
    
  ];

  return (
    <div className="news-section">
      <h2>Tin Tức</h2>
      <div className="row">
        {newsItems.map((item, index) => (
          <div key={index} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{item.title}</span>
                <p>{item.content}</p>
              </div>
              <div className="card-action">
                <p className="news-date">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
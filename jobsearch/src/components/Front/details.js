import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCall } from '../utils/api';
import './detail.css';



const Detail = () => {
  const { detailId } = useParams();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getCall('/Detail/'+ detailId);
        setDetailData(res.data);
        console.log(res.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching detail:', error);
      }
    };

    fetchDetail();
  }, [detailId]);

  return (
    <div className="detail-container">
  <div className="detail-card">
    {isLoading && <p>Loading details...</p>}
    {detailData && (
      <div>
        <p>
          {detailData.job} at <span>{detailData.state}</span>
        </p>
        <p className="job-type">{detailData.name}</p>
        <p>
          {detailData.phone}
          <span>{detailData.state}</span>
        </p>
        <p>{detailData.email}</p>
      </div>
    )}
  </div>
</div>

  );
};

export default Detail;

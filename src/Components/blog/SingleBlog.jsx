import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import pic from "../../assets/Articles_pictures/httpIntroduce.png";
import "./SingleBlog.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../helper/spinner";

function SingleBlog() {
  const [singleblog, setsingleblog] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigation = useNavigate();

  const getblogall = () => {
    axios
      .get(`https://nodejs-arash.chabk.ir/api/blogs/${id}`)
      .then((res) => {
        setsingleblog(res.data);
        setLoading(false)
      })
      .catch((err) => {
        // console.log(err);
        navigation('404')
      });
  };
  useEffect(() => {
    getblogall();
  }, [id]);

  return (
    <div className="singleArticlemain">
      {
        !loading ?  (
          <div className="singleArticlesection" >
          <h1>{singleblog.title}</h1>
            <div className="sngimg">
            <img src={pic} alt="" />

            </div>
          <p>{singleblog.desc}</p>
          <p className="timesng">  {moment(singleblog.createdAt).format("MM DD YYYY")}</p>

        </div>
        ):(
          <Spinner/>

        )

        //  <h1>{singleblog.}</h1>
      }

    </div>
  );
}

export default SingleBlog;

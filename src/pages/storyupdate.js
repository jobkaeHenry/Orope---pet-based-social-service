import { React, useEffect, useState, useRef } from "react";
import axios from "../../node_modules/axios/index";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./../components/TopHeader";
import MiniButton from "./../components/minibutton";
import { MobileWrapper } from "./../components/globalComponent";
import useAuth from "./../hooks/useAuth";



const NewStory = () => {
  const [Picture, setPicture] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const { auth } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", "");
    formData.append("contents", contents);
    formData.append("picture", Picture);

    console.log(formData);

    axios
      .post("http://3.34.21.153/story/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${auth.accessToken}`,
        },
        withCredentials: true,
        "Access-Control-Allow-Credentials": "*",
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <TopHeader
        type="3"
        name="새 스토리"
        callBackType="text"
        callBackText="저장"
      />
      <MobileWrapper>
        <form>
          <textarea
            placeholder="내용을 입력하세요"
            onChange={(e) => setContents(e.target.value)}
          />
          <input type="file" onChange={(e) => setPicture(e.target.files)} />

          <MiniButton onClick={handleSubmit}>제출</MiniButton>
        </form>
      </MobileWrapper>
    </>
  );
};

export default NewStory;

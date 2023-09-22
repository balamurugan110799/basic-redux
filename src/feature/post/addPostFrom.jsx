import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUser } from "../user/userSlice";

export default function AddPostFrom() {
  const dispatch = useDispatch();

  const user = useSelector(selectAllUser);
  console.log(user);

  const userOption = user.map((user) => <option>{user.name}</option>);

  const [data, setData] = useState({
    id: null,
    title: "",
    content: "",
    userID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const canSave =
    Boolean(data.title) && Boolean(data.content) && Boolean(data.title);

  const handleClick = (e) => {
    e.preventDefault();
    if (data.title && data.content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: data.title,
          content: data.content,
          userID: data.userID,
        })
      );
      setData({
        id: null,
        title: "",
        content: "",
        userID: "",
      });
    }
  };

  return (
    <div className=" p-3">
      <form>
        <div>
          <label htmlFor="postTitle">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={data.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="postAuthor">Author</label>
          <select
            name="userID"
            value={data.userID}
            onChange={(e) => handleChange(e)}
          >
            {userOption}
          </select>
        </div>
        <div>
          <label htmlFor="postcontent">content</label>
          <input
            type="text"
            name="content"
            id="content"
            value={data.content}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button disabled={!canSave} onClick={(e) => handleClick(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
export default function Poste(){
  const [posts,setPost] = useState([]);
  useEffect(function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);
}
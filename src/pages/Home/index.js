import { useState } from "react";
import { FiLink2 } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);

      setLink("");
    } catch {
      alert("Ops algo deu errado!");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Link facil logo" />
        <h1>Link Fácil</h1>
        <span>Cole para encurtar seu link 👇</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink2 size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button className="button-link" onClick={handleShortLink}>
          Encurtar Link
        </button>
      </div>

      <Menu />
      <br />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}

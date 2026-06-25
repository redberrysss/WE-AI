import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwtpc4PeCE1AHIXyeA67pv2WsVDEkgwpVVL_QKlynzR-B_z36tCp1tjw-wgL6ZIy_kR1Q/exec";

export default function useSurveyData() {
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setRows(data);
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return rows;
}
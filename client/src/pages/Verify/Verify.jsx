import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  // console.log(success, orderId);
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myOrders");
      toast.success("Payment success");
    } else {
      navigate("/");
      toast.error("Payment Failed");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className="min-h-60vh grid">
      <div className="w-24 h-24 place-self-center border-solid border-5 border-custom-border border-t-red-400 rounded-50 animate-rotate-1s-in"></div>
    </div>
  );
};

export default Verify;

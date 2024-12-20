import { useState, useEffect } from "react";
//import axios from "../../chequeAxios";
//import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import loader from "../../assets/loader.svg";
import { useSelector } from "react-redux";


const AdminDashboard = () => {
    const [showDepositModal, setShowDepositModal] = useState(false);
    const handleClose = () => setShowDepositModal(false);
    const handleShow = () => setShowDepositModal(true);
    const [reload, setReload] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    //const history = useHistory();
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
  
    // if(!auth)
    // {
    //   history.push("/admin");
    // } 
    // else 
    // {
    //     if(user.name !== "") 
    //     {
    //         console.log(user);
    //         history.push("/");
    //     }
    // }
  
    // useEffect(() => {
    //   const func = async () => {
    //     const res = await axios.get("/api/adminDashboard");
    //     setTransactions(res.data);
    //     setLoading(false);
    //   };
    //   func();
    // });

    return (
        <img 
          src={loader} 
          alt="loader" 
          className="block mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48"
        />
      )
      
    return (
    //   auth && user?.name === "" && 
    <div className="mt-[5vh] text-center">
    <h2 className="text-2xl font-semibold text-blue-700 my-[5vh]">Pending Requests ({transactions.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactions.map((transaction) => (
            <Link
                to={`/chequeVerify?id=${transaction}`}
                key={transaction}
                className="block text-blue-800 font-semibold hover:text-white active:text-blue-900 transition-colors"
            >
                <div className="mx-auto my-4 p-6 w-full max-w-[320px] bg-blue-50 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="m-0 text-lg text-blue-800">{transaction}</p>
                </div>
            </Link>
            ))}
        </div>
    </div>

    //   ))
    );
};
  
export default AdminDashboard;
  